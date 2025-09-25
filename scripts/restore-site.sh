#!/bin/bash

# Site Restoration Script for Sétima NGI Landing
# Usage: ./scripts/restore-site.sh [commit-hash|branch-name]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to create backup
create_backup() {
    local backup_name="backup-before-restore-$(date +%Y%m%d-%H%M%S)"
    print_status "Criando backup da branch atual: $backup_name"
    
    git checkout -b "$backup_name"
    print_status "Backup criado com sucesso: $backup_name"
    
    # Return to original branch
    git checkout -
    
    echo "$backup_name"
}

# Function to validate build
validate_build() {
    print_status "Validando build do site..."
    
    if npm run build; then
        print_status "✅ Build validado com sucesso"
        return 0
    else
        print_error "❌ Erro no build"
        return 1
    fi
}

# Function to test site locally
test_site() {
    print_status "Testando site localmente..."
    
    # Start dev server in background
    npm run dev &
    DEV_PID=$!
    
    # Wait a bit for server to start
    sleep 5
    
    # Test if server is responding
    if curl -s http://localhost:3002 > /dev/null; then
        print_status "✅ Site está respondendo localmente"
        kill $DEV_PID
        return 0
    else
        print_error "❌ Site não está respondendo"
        kill $DEV_PID 2>/dev/null || true
        return 1
    fi
}

# Main restoration function
restore_to_commit() {
    local target_commit="$1"
    
    if [ -z "$target_commit" ]; then
        print_error "Uso: $0 <commit-hash|branch-name>"
        exit 1
    fi
    
    print_status "Iniciando restauração para: $target_commit"
    
    # Check if target exists
    if ! git rev-parse --verify "$target_commit" >/dev/null 2>&1; then
        print_error "Commit ou branch '$target_commit' não encontrado"
        exit 1
    fi
    
    # Create backup
    backup_branch=$(create_backup)
    
    # Create restoration branch
    restore_branch="restore-to-$(echo $target_commit | cut -c1-8)-$(date +%Y%m%d-%H%M)"
    print_status "Criando branch de restauração: $restore_branch"
    
    git checkout -b "$restore_branch"
    
    # Reset to target commit
    print_warning "Aplicando restauração para $target_commit..."
    git reset --hard "$target_commit"
    
    # Validate the restoration
    if validate_build; then
        print_status "✅ Restauração bem-sucedida!"
        print_status "Branch de backup: $backup_branch"
        print_status "Branch de restauração: $restore_branch"
        
        # Test the site
        if test_site; then
            print_status "✅ Site testado e funcionando"
        else
            print_warning "⚠️  Site pode ter problemas - verifique manualmente"
        fi
        
    else
        print_error "❌ Restauração falhou - build com erros"
        print_status "Voltando para backup..."
        git checkout "$backup_branch"
        git branch -D "$restore_branch"
        exit 1
    fi
}

# Function to show current status
show_status() {
    print_status "Status atual do repositório:"
    echo "Branch atual: $(git branch --show-current)"
    echo "Último commit: $(git --no-pager log -1 --oneline)"
    echo "Status do working directory:"
    git status --porcelain
    
    print_status "Validando build atual..."
    if validate_build; then
        print_status "✅ Build atual está funcionando"
    else
        print_error "❌ Build atual tem problemas"
    fi
}

# Function to list available restore points
list_restore_points() {
    print_status "Pontos de restauração disponíveis:"
    
    echo "📋 Commits recentes:"
    git --no-pager log --oneline -10
    
    echo ""
    echo "🌿 Branches disponíveis:"
    git branch -a | grep -E "(backup|restore|main|master)" || echo "Nenhuma branch de backup encontrada"
    
    echo ""
    echo "🏷️  Tags disponíveis:"
    git tag -l | head -10 || echo "Nenhuma tag encontrada"
}

# Function to show help
show_help() {
    echo "Site Restoration Script - Sétima NGI Landing"
    echo ""
    echo "Uso:"
    echo "  $0 status                    - Mostra status atual"
    echo "  $0 list                      - Lista pontos de restauração disponíveis"
    echo "  $0 restore <commit>          - Restaura para um commit específico"
    echo "  $0 help                      - Mostra esta ajuda"
    echo ""
    echo "Exemplos:"
    echo "  $0 restore 05d02bd           - Restaura para commit específico"
    echo "  $0 restore backup-branch     - Restaura para uma branch de backup"
    echo ""
    echo "IMPORTANTE:"
    echo "- Sempre cria backup antes de restaurar"
    echo "- Valida build após restauração"
    echo "- Permite reversão em caso de problemas"
}

# Main script logic
case "$1" in
    "status")
        show_status
        ;;
    "list")
        list_restore_points
        ;;
    "restore")
        restore_to_commit "$2"
        ;;
    "help"|"--help"|"-h")
        show_help
        ;;
    "")
        show_help
        ;;
    *)
        restore_to_commit "$1"
        ;;
esac