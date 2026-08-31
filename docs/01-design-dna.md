> **GB SOFTWARES  /  INTERNAL DESIGN SYSTEM**

01 — Design DNA

Princípios visuais para criar sites com aparência de trabalho humano e direção de arte real

| Versão 0.1  \|  29 de agosto de 2026  \|  Documento de fundação<br>Objetivo: criar sites comerciais com personalidade de design, sem aparência de template automático ou “site de IA”. |
| --- |

# 1. Objetivo do sistema

O sistema existe para impedir que todo projeto vire a mesma landing page. A tecnologia pode ser padronizada; a direção visual, a hierarquia, o ritmo e a composição precisam mudar de acordo com o negócio.

| PRINCÍPIO CENTRAL<br>A sensação desejada é: “alguém tomou decisões de design aqui”. Não: “um gerador montou uma lista de componentes”. |
| --- |

# 2. O que define "cara de IA"

- Hero sempre centralizado com headline genérica, subtítulo e dois botões.

- Gradiente azul/roxo + fundo escuro + glow + glassmorphism usados sem relação com a marca.

- Tudo transformado em cards arredondados, mesmo quando texto, números ou listas funcionariam melhor.

- Excesso de ícones Bootstrap para representar conceitos óbvios.

- "3 benefícios", "3 serviços", "3 diferenciais", "4 passos" repetidos como preenchimento.

- Imagens de banco sem direção fotográfica ou com estética inconsistente.

- Animações decorativas sem função, sliders automáticos e efeitos que competem com o conteúdo.

- Copy genérica de marketing ("transforme", "solução inovadora", "eleve seu negócio") sem especificidade.

# 3. Regras anti-template

| Regra | Aplicação |
| --- | --- |
| Não centralizar por padrão | A composição inicial deve ser escolhida em função do conteúdo e da personalidade. |
| Não usar cards para tudo | Cards são para objetos independentes; texto editorial, métricas e processos têm outros tratamentos. |
| Uma hero não é um componente | É uma composição de marca; pode ser editorial, split, tipográfica, fotográfica ou utilitária. |
| Menos ornamentação, mais decisão | Uma linha, um número grande ou uma foto forte valem mais que cinco elementos decorativos. |
| Motion deve ter propósito | Revelar, orientar, confirmar ou dar ritmo. Nunca animar apenas porque “dá vida”. |
| Conteúdo dirige o layout | Não alterar o conteúdo para caber no template; alterar a composição para respeitar o conteúdo. |

# 4. Sistema de composição

| Eixo | Opções recomendadas |
| --- | --- |
| Grid | 12 colunas, editorial, split 5/7 ou 7/5, módulos assimétricos, full-bleed, anti-grid controlado. |
| Ritmo | Alternar seções densas e seções respiradas. Não repetir o mesmo padrão de altura ou fundo. |
| Hierarquia | 1 elemento dominante por viewport. Headline, imagem, métrica ou ação — não todos ao mesmo tempo. |
| Profundidade | Preferir escala, sobreposição e contraste de massa a sombras excessivas. |
| Bordas | Usar conforme a direção: de 0px a 12px. Não impor 16–24px globalmente. |
| Espaçamento | Usar escala consistente e permitir “grandes vazios” quando a arte pedir. |
| Alinhamento | Misturar alinhamentos apenas quando houver lógica. Desalinhamento precisa parecer intencional. |

# 5. Tipografia

A tipografia é uma ferramenta estrutural, não um acabamento. Cada direção deve possuir uma família principal e, quando necessário, uma família de contraste.

- Preferir famílias com pesos suficientes para criar contraste sem trocar de fonte a cada seção.

- Controlar largura máxima de texto e quebra de linha; headline não deve quebrar por acidente.

- Variar escala de forma contextual: títulos de 48–88px no desktop podem ser adequados em direções editoriais, mas não são obrigatórios.

- Nunca usar "fonte moderna" como instrução vaga. Definir função, peso, largura, contraste e comportamento responsivo.

# 6. Cor

- Base neutra + 1 acento forte é preferível quando o nicho pede sofisticação.

- Cores devem carregar significado de marca, não apenas "parecer bonitas".

- Evitar gradientes como default. Usá-los somente quando fizerem parte da direção visual.

- Preparar tokens de superfície, texto, borda, acento e estados para light/dark quando necessário.

# 7. Fotografia e imagens

- Priorizar fotografia real do cliente, equipe, clínica, escritório, obra ou espaço.

- Quando stock for necessário, estabelecer direção: lente, iluminação, enquadramento, temperatura e tratamento.

- Arquitetura/engenharia: usar espaço, material, textura, escala e detalhes construtivos.

- Saúde/estética: priorizar ambiente e pessoas reais; evitar imagens excessivamente clínicas ou artificiais.

- Advocacia: retratos editoriais e contexto de trabalho são superiores a tribunais, martelos e estátuas de justiça genéricas.

# 8. Iconografia

Bootstrap Icons deve ser tratado como sistema utilitário. O ícone entra quando melhora escaneabilidade ou ação, não para decorar cards.

# 9. Motion

| Nível | Uso |
| --- | --- |
| Base | Hover, focus, transições de cor e pequenos deslocamentos; 120–220ms. |
| Editorial | Reveal por scroll e máscara/clip-path com moderação; 250–600ms. |
| Hero premium | Uma única interação de assinatura; evitar parallax permanente. |
| Acessibilidade | Respeitar prefers-reduced-motion e manter sentido sem animação. |

# 10. Qualidade mínima

- HTML semântico e hierarquia de headings coerente.

- Contraste e foco visível.

- Navegação por teclado funcional.

- Imagens com alt quando informativas; decorativas marcadas apropriadamente.

- Botões e links com rótulos claros.

- Performance: imagens otimizadas, JS mínimo, evitar dependências desnecessárias.

# Fontes de pesquisa

As referências abaixo sustentam decisões de tendência, acessibilidade e stack técnico. O documento não copia layouts; ele traduz padrões em regras próprias.

- W3C — WCAG 2.2 — https://www.w3.org/TR/WCAG22/ — referência de acessibilidade; W3C recomenda WCAG 2.2 para máxima aplicabilidade futura.

- PaperStreet — 2026 Law Firm Website Design Trends — https://www.paperstreet.com/blog/2026-law-firm-website-design-trends/ — editorial, tipografia forte, paleta restrita, motion sutil e fotografia dirigida.

- Upwell — Allied Health Web Design Trends 2026 — https://upwell.design/blog/allied-health-web-design-trends-2026/ — booking-first, fotografia autêntica, velocidade e acessibilidade.

- Awwwards — Dynamic Grid Layouts — https://www.awwwards.com/websites/dynamic-grid-layout-examples/ — referência de composição editorial, grids dinâmicos e variedade de estruturas.
