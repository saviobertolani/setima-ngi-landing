# Integração com Figma (Desktop)

Este projeto pode importar trechos do seu arquivo do Figma (código + assets) diretamente para a pasta do código.

## Pré‑requisitos
- Figma Desktop instalado e logado
- Arquivo do projeto aberto no Figma
- Selecione o frame/componente que deseja exportar (ex.: bloco FAQ)

## Como puxar um bloco
1. Abra o Figma Desktop e selecione o frame ou componente desejado.
2. Volte aqui no VS Code e diga: "seleção pronta" (ou me envie o link do Figma com o parâmetro `node-id`).
3. Eu buscarei o código/recursos do nó selecionado e salvarei:
   - Código React/HTML: `src/components/figma/<NomeDoFrame>.tsx`
   - Imagens/vetores: `src/assets/figma/`

> Observação: a exportação funciona melhor quando o nó selecionado é um Frame/Component claro, com layers nomeadas.

## Dicas
- Se quiser precisão de tipografia/tamanhos, inclua as fontes no projeto (já usamos Ubuntu Light/Bold).
- Para ícones/SVG, priorize shapes vetoriais no Figma.

## Atualizar um bloco
Repita os passos (selecionar no Figma → avisar aqui). Vou sobrescrever/atualizar os arquivos gerados.
