# 🔧 Guia de Solução de Problemas MCP

## 🎯 Problema Atual
**Status:** "No MCP servers installed" mesmo após configuração

## ✅ Verificações Realizadas

### Servidores Funcionando:
- **BrowserMCP v0.1.3**: ✅ Executável via `npx @browsermcp/mcp@latest`
- **Servidor Figma**: ✅ Rodando em `http://127.0.0.1:3845/mcp`

### Configurações Encontradas:
- **Arquivo 1**: `cline_mcp_settings.json` (formato Cline)
- **Arquivo 2**: `mcp.json` (formato padrão MCP)
- **Status**: ✅ Ambos sincronizados

## 🔍 Arquivos de Configuração MCP

### 1. Configuração Cline (`cline_mcp_settings.json`):
```json
{
  "mcpServers": {
    "browsermcp": {
      "timeout": 60,
      "type": "stdio",
      "command": "npx",
      "args": ["@browsermcp/mcp@latest"]
    },
    "figma-dev-mode": {
      "timeout": 60,
      "type": "http",
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

### 2. Configuração Padrão (`mcp.json`):
```json
{
  "servers": {
    "figma-dev-mode": {
      "url": "http://127.0.0.1:3845/mcp",
      "type": "http",
      "timeout": 60
    },
    "browsermcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["@browsermcp/mcp@latest"],
      "timeout": 60
    }
  },
  "inputs": []
}
```

## 🚀 Soluções para Tentar

### Solução 1: Reiniciar Cline (NOVAMENTE)
Agora que sincronizei os arquivos de configuração:
1. **Fechar Cline completamente**
2. **Reiniciar VSCode**
3. **Verificar seção "MCP Servers" novamente**

### Solução 2: Instalar BrowserMCP Globalmente
```bash
npm install -g @browsermcp/mcp@latest
```

### Solução 3: Verificar Permissões
```bash
# Verificar se npx tem permissões
npx --version

# Testar BrowserMCP diretamente
npx @browsermcp/mcp@latest --help
```

### Solução 4: Limpar Cache NPX
```bash
# Limpar cache do npx
npx clear-npx-cache

# Reinstalar BrowserMCP
npx @browsermcp/mcp@latest --version
```

### Solução 5: Modo Debug
No terminal, executar manualmente para ver erros:
```bash
# Terminal 1: Servidor Figma (já está rodando)
curl http://127.0.0.1:3845/mcp

# Terminal 2: BrowserMCP standalone
npx @browsermcp/mcp@latest
```

## 🎯 Resultado Esperado

Após uma das soluções funcionar, você deve ver:

```
# MCP Servers

## figma-dev-mode (http://127.0.0.1:3845/mcp)

### Available Tools
- get_design_specs: Get component specifications
- export_assets: Export Figma assets

## browsermcp (npx @browsermcp/mcp@latest)

### Available Tools
- browser_navigate: Navigate to a URL
- browser_screenshot: Take a screenshot
- browser_click: Click on elements
- browser_type: Type in input fields
- browser_wait: Wait for a specified time
- browser_get_console_logs: Get browser console logs
```

## 🔧 Teste de Funcionamento

Uma vez conectados, teste:

```typescript
// Teste BrowserMCP
use_mcp_tool("browsermcp", "browser_navigate", {
  "url": "https://www.google.com"
})

// Teste Figma (se disponível)
use_mcp_tool("figma-dev-mode", "get_design_specs", {
  "file_key": "LvffsOvDMFp7Ynk5ICcA5O"
})
```

## 📊 Status Atual

| Componente | Status | Próximo Passo |
|------------|--------|---------------|
| **Configuração** | ✅ Sincronizada | Reiniciar Cline |
| **BrowserMCP** | ✅ Funcional | Aguardar conexão |
| **Servidor Figma** | ✅ Rodando | Aguardar conexão |
| **Cline MCP** | ❌ Não conectado | Aplicar soluções |

---

**🎯 PRÓXIMO PASSO: Reiniciar Cline novamente com configuração corrigida**
