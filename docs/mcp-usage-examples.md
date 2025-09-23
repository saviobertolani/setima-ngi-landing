# 🔧 Exemplos Práticos de Uso das Ferramentas MCP

## 🌟 Cenário 1: Automatização de Teste da Landing Page

### Objetivo: Testar automaticamente o formulário de contato

```typescript
// Exemplo de fluxo automatizado usando BrowserMCP
async function testarFormularioContato() {
  // 1. Navegar para a landing page
  await use_mcp_tool("browsermcp", "browser_navigate", {
    "url": "http://localhost:5174"
  });
  
  // 2. Capturar screenshot inicial
  await use_mcp_tool("browsermcp", "browser_screenshot", {});
  
  // 3. Obter elementos interativos da página
  const snapshot = await use_mcp_tool("browsermcp", "browser_snapshot", {});
  
  // 4. Clicar no botão CTA
  await use_mcp_tool("browsermcp", "browser_click", {
    "element": "Botão MARQUE UM CALL",
    "ref": "cta-button"
  });
  
  // 5. Aguardar modal ou redirecionamento
  await use_mcp_tool("browsermcp", "browser_wait", {
    "time": 2
  });
  
  // 6. Capturar screenshot final
  await use_mcp_tool("browsermcp", "browser_screenshot", {});
}
```

## 🌟 Cenário 2: Debug Visual de Responsividade

### Objetivo: Verificar layout em diferentes tamanhos de tela

```typescript
async function debugResponsividade() {
  const urls = [
    "http://localhost:5174", // Desktop
    "http://localhost:5174/?mobileGetCode" // Mobile
  ];
  
  for (const url of urls) {
    // Navegar para cada versão
    await use_mcp_tool("browsermcp", "browser_navigate", {
      "url": url
    });
    
    // Aguardar carregamento
    await use_mcp_tool("browsermcp", "browser_wait", {
      "time": 3
    });
    
    // Capturar screenshot
    await use_mcp_tool("browsermcp", "browser_screenshot", {});
    
    // Verificar logs de erro
    await use_mcp_tool("browsermcp", "browser_get_console_logs", {});
    
    // Fazer scroll para testar toda a página
    for (let i = 0; i < 5; i++) {
      await use_mcp_tool("browsermcp", "browser_press_key", {
        "key": "PageDown"
      });
      await use_mcp_tool("browsermcp", "browser_wait", {
        "time": 1
      });
    }
  }
}
```

## 🌟 Cenário 3: Comparação Design vs Implementação

### Objetivo: Usar Figma MCP para comparar design com resultado final

```typescript
async function compararDesignImplementacao() {
  // 1. Acessar design no Figma (quando conectado)
  await use_mcp_tool("figma-dev-mode", "get_design_specs", {
    "file_key": "LvffsOvDMFp7Ynk5ICcA5O",
    "node_id": "1-75"
  });
  
  // 2. Navegar para implementação
  await use_mcp_tool("browsermcp", "browser_navigate", {
    "url": "http://localhost:5174/?mobileGetCode"
  });
  
  // 3. Capturar screenshot da implementação
  await use_mcp_tool("browsermcp", "browser_screenshot", {});
  
  // 4. Comparar cores, tipografia, espaçamentos
  // (Lógica de comparação seria implementada)
}
```

## 🌟 Cenário 4: Monitoramento de Performance

### Objetivo: Medir tempo de carregamento e interatividade

```typescript
async function monitorarPerformance() {
  // 1. Navegar com timer
  const startTime = Date.now();
  
  await use_mcp_tool("browsermcp", "browser_navigate", {
    "url": "http://localhost:5174"
  });
  
  // 2. Aguardar carregamento completo
  await use_mcp_tool("browsermcp", "browser_wait", {
    "time": 5
  });
  
  // 3. Coletar métricas via console
  await use_mcp_tool("browsermcp", "browser_get_console_logs", {});
  
  // 4. Testar interatividade clicando em elemento
  await use_mcp_tool("browsermcp", "browser_click", {
    "element": "Botão interativo",
    "ref": "interactive-element"
  });
  
  const endTime = Date.now();
  console.log(`Tempo total: ${endTime - startTime}ms`);
}
```

## 🌟 Cenário 5: Teste de Acessibilidade Automatizado

### Objetivo: Verificar navegação por teclado e elementos acessíveis

```typescript
async function testarAcessibilidade() {
  // 1. Navegar para página
  await use_mcp_tool("browsermcp", "browser_navigate", {
    "url": "http://localhost:5174"
  });
  
  // 2. Obter snapshot de acessibilidade
  const snapshot = await use_mcp_tool("browsermcp", "browser_snapshot", {});
  
  // 3. Navegar apenas por teclado
  const teclas = ["Tab", "Tab", "Tab", "Enter"];
  
  for (const tecla of teclas) {
    await use_mcp_tool("browsermcp", "browser_press_key", {
      "key": tecla
    });
    
    await use_mcp_tool("browsermcp", "browser_wait", {
      "time": 1
    });
    
    // Capturar screenshot de cada estado focado
    await use_mcp_tool("browsermcp", "browser_screenshot", {});
  }
}
```

## 📊 Relatório Automatizado

### Objetivo: Gerar relatório de testes automatizado

```typescript
async function gerarRelatorioCompleto() {
  const relatorio = {
    timestamp: new Date().toISOString(),
    testes: []
  };
  
  // Executar todos os cenários de teste
  const cenarios = [
    testarFormularioContato,
    debugResponsividade,
    monitorarPerformance,
    testarAcessibilidade
  ];
  
  for (const cenario of cenarios) {
    try {
      await cenario();
      relatorio.testes.push({
        nome: cenario.name,
        status: "✅ Passou",
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      relatorio.testes.push({
        nome: cenario.name,
        status: "❌ Falhou",
        erro: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }
  
  // Salvar relatório
  console.log("📋 Relatório de Testes:", relatorio);
}
```

## 🎯 Vantagens das Ferramentas MCP

1. **🤖 Automação Total** - Execução de testes sem intervenção manual
2. **📸 Documentação Visual** - Screenshots automáticos para cada estado
3. **🔍 Debug Detalhado** - Logs e métricas coletadas automaticamente
4. **🔄 Testes Repetíveis** - Mesma sequência sempre executada
5. **⚡ Feedback Rápido** - Identificação imediata de problemas
6. **📊 Relatórios Estruturados** - Dados organizados para análise

## 🚀 Próximos Passos

1. **Ativar Servidores MCP** - Configurar e conectar os servidores
2. **Implementar Testes** - Adaptar exemplos para casos reais
3. **Integrar CI/CD** - Automatizar execução em pipeline
4. **Expandir Cobertura** - Adicionar mais cenários de teste

---

*Estes exemplos demonstram o poder das ferramentas MCP para automação e testing.*
