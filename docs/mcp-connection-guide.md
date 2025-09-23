# 🔧 Guia para Conectar Servidores MCP

## 📋 Status Atual
- **BrowserMCP**: ⚠️ Executando no terminal, mas não conectado ao Cline
- **Figma Dev Mode**: ⚠️ Não conectado

## 🚀 Passos para Conectar os Servidores MCP

### 1. **Parar o Terminal Atual**
O comando `npx @browsermcp/mcp@latest` está rodando no terminal, mas não está conectado ao Cline.
- Pressione `Ctrl+C` no terminal para parar

### 2. **Reiniciar o Cline**
Os servidores MCP são conectados na inicialização do Cline:
- Feche o Cline completamente
- Reabra o VSCode com Cline
- Os servidores devem conectar automaticamente

### 3. **Verificar Configuração MCP**
A configuração atual em `cline_mcp_settings.json`:
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

### 4. **Instalar Dependências**
Garanta que o BrowserMCP está instalado:
```bash
npm install -g @browsermcp/mcp@latest
```

### 5. **Ativar Servidor Figma Dev Mode**
Para o servidor Figma:
- Deve estar rodando em `http://127.0.0.1:3845/mcp`
- Verifique se a porta 3845 está disponível

## 🔍 Verificação de Conexão

Após reiniciar o Cline, você deve ver na seção "Connected MCP Servers" do environment details:

```
# Connected MCP Servers

## browsermcp (`npx @browsermcp/mcp@latest`)

### Available Tools
- browser_navigate: Navigate to a URL
- browser_snapshot: Capture accessibility snapshot
- browser_click: Perform click on a web page
[...]
```

## 🎯 Teste de Conexão

Uma vez conectado, teste com:
```typescript
use_mcp_tool("browsermcp", "browser_navigate", {
  "url": "https://www.google.com"
})
```

## ⚡ Solução de Problemas

### Problema: "Not connected"
**Solução**: Reiniciar Cline completamente

### Problema: "Server not found"
**Solução**: Verificar configuração em `cline_mcp_settings.json`

### Problema: BrowserMCP não inicia
**Solução**: 
```bash
# Instalar globalmente
npm install -g @browsermcp/mcp@latest

# Ou usar npx diretamente
npx @browsermcp/mcp@latest --version
```

### Problema: Figma server não conecta
**Solução**: Verificar se o servidor está rodando em localhost:3845

## 📈 Próximos Passos

1. **Parar comando atual no terminal**
2. **Reiniciar Cline/VSCode**
3. **Verificar seção "Connected MCP Servers"**
4. **Testar funcionalidades básicas**
5. **Executar exemplos práticos**

---

*Uma vez conectados, os servidores MCP oferecem poderosas capacidades de automação.*
