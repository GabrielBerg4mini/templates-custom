> **GB SOFTWARES  /  INTERNAL DESIGN SYSTEM**

03 — Front-end UI System

Arquitetura técnica para implementar as 15 direções em um repositório front-end independente de CMS, usando HTML5, SCSS, JavaScript, Bootstrap, Bootstrap Icons e Swiper

| Versão 0.1  \|  29 de agosto de 2026  \|  Documento de fundação<br>Objetivo: criar sites comerciais com personalidade de design, sem aparência de template automático ou “site de IA”. |
| --- |

# 1. Stack oficial

| Camada | Padrão |
| --- | --- |
| Markup | HTML5 semântico e independente de CMS, pronto para ser transportado para outros projetos. |
| CSS | SCSS compilado; tokens próprios + componentes + modificadores de direção. |
| Framework | Bootstrap 5.3.x como base de grid, utilitários e componentes. |
| Ícones | Bootstrap Icons. Uso funcional e consistente. |
| JavaScript | JavaScript Vanilla + Bootstrap JS quando suficiente. Swiper somente para carrosséis/galerias que realmente precisem de navegação horizontal. |
| Projeto | Repositório front-end independente de CMS, usando conteúdo mock/estático durante a fase de design e implementação. |
| Performance | CSS/JS enxutos, imagens responsivas e carregamento apenas do que a página precisa. |

# 2. Estrutura de diretórios sugerida

```
/project
  /assets
    /css
    /js
    /images
    /icons
    /scss
      _tokens.scss
      _functions.scss
      _mixins.scss
      _typography.scss
      _layout.scss
      _buttons.scss
      _forms.scss
      _navigation.scss
      _cards.scss
      _utilities.scss
      /directions
        _legal-editorial.scss
        _legal-modern.scss
        _legal-dark.scss
        _arch-editorial.scss
        _arch-technical.scss
        _arch-brutalist.scss
        _clinic-premium.scss
        _clinic-aesthetic.scss
        _clinic-human.scss
        _dental-atelier.scss
        _dental-precision.scss
        _dental-bright.scss
        _therapy-quiet.scss
        _therapy-movement.scss
        _therapy-human.scss
      main.scss
  /components
  /sections
  /pages
  index.html
  package.json
```

# 3. Contrato entre HTML e SCSS

O markup deve expressar semântica e estrutura. A direção visual deve ser aplicada por classe de tema/direção, nunca reescrevendo todas as seções para cada cliente.

```
<body class="site site--legal site--direction-editorial">
  <header class="site-header">...</header>
  <main>
    <section class="hero hero--editorial">...</section>
    <section class="services services--list">...</section>
  </main>
</body>
```

# 4. Tokens

```
:root {
  --ds-font-body: ...;
  --ds-font-display: ...;
  --ds-color-bg: ...;
  --ds-color-surface: ...;
  --ds-color-text: ...;
  --ds-color-muted: ...;
  --ds-color-accent: ...;
  --ds-color-border: ...;
  --ds-radius-sm: 2px;
  --ds-radius-md: 6px;
  --ds-container: 1320px;
  --ds-section-y: clamp(4rem, 9vw, 9rem);
}
```

# 5. Bootstrap: usar, não parecer Bootstrap

- Usar .container, .row, .col-*, utilities e componentes quando acelerarem implementação.

- Sobrescrever tokens e variantes; não redesenhar componentes do zero sem necessidade.

- Evitar depender visualmente do .card, .btn-primary e .navbar padrão.

- Usar Sass e CSS variables do Bootstrap quando ajudarem a criar tokens consistentes.

- A documentação do Bootstrap 5.3 destaca suporte a Sass e variáveis CSS, tornando viável essa camada de customização.

# 6. Componentes obrigatórios

| Componente | Estados / variações |
| --- | --- |
| Header | transparent, solid, dark, sticky, mobile offcanvas. |
| Hero | editorial, split, visual, technical, dark, minimal. |
| Button | primary, secondary, text, icon, dark, light, disabled, focus. |
| Card | service, project, profile, article; usar somente quando semanticamente apropriado. |
| Metric | number, label, supporting text; opcionalmente com divisor. |
| Media block | image, image+caption, gallery, before/after, project detail. |
| Accordion | FAQ, process, details. |
| Form | contact, booking, newsletter; labels visíveis. |
| Footer | compact, editorial, multi-column, legal. |

# 7. Bootstrap Icons

Convenção: ícones devem ser consistentes em peso e tamanho; não usar mais de um tratamento por página sem motivo. Em botões, ícone deve ter função clara e nunca substituir rótulo quando o significado não for universal.

# 8. JavaScript

- Começar com JS nativo para menu, accordions personalizados, filtros, tabs e observadores de viewport.

- Usar Bootstrap JS somente para componentes que já resolvem o problema.

- Criar init modular por componente; não ter um app.js monolítico com centenas de listeners.

- Desativar ou simplificar animação com prefers-reduced-motion.

- Nada de dependência adicional apenas para scroll suave, reveal ou carrossel simples.

# 9. Estrutura de integração e portabilidade

- Organizar componentes e seções para manter estrutura, conteúdo mock/estático e apresentação visual o mais desacoplados possível.

- Não acoplar os componentes a um CMS. O template deve funcionar com conteúdo estático/mock durante a fase de design e ser simples de transportar para outra camada de conteúdo.

- Criar classes de direção no body ou no wrapper principal para trocar a linguagem visual sem duplicar markup.

- Construir componentes tolerantes a textos e imagens de comprimentos diferentes, sem depender de conteúdo fixo para preservar a composição.

- Evitar dependências adicionais de UI no core. Preservar HTML/SCSS/JS sob controle do repositório e manter o bundle enxuto.

# 10. Acessibilidade e qualidade

O sistema deve buscar conformidade com WCAG 2.2 AA como alvo de projeto, sem declarar conformidade formal automaticamente. O W3C descreve WCAG 2.2 como padrão técnico com níveis A, AA e AAA e recomenda seu uso para maximizar a aplicabilidade futura.

- Foco visível e teclado funcional.

- Contraste suficiente em texto, controles e estados.

- Sem dependência exclusiva de cor para comunicar estado.

- Respeitar reduced motion.

- Landmarks e headings semânticos.

- Formulários com labels, mensagens e estados compreensíveis.

# Fontes de pesquisa

As referências abaixo sustentam decisões de tendência, acessibilidade e stack técnico. O documento não copia layouts; ele traduz padrões em regras próprias.

- Bootstrap Versions — https://getbootstrap.com/docs/versions/ — Bootstrap 5.x: atualização 5.3.8 na documentação consultada em 29/08/2026.

- Bootstrap v5.3 Migration — https://getbootstrap.com/docs/5.3/migration/ — Sass, CSS variables, focus utilities e mudanças relevantes.

- Bootstrap Examples — https://getbootstrap.com/docs/5.3/examples/ — exemplos oficiais de integração com Sass e Bootstrap Icons.

- W3C — WCAG 2.2 — https://www.w3.org/TR/WCAG22/ — padrão técnico de acessibilidade.

- W3C — WCAG 2 AA — https://www.w3.org/WAI/WCAG2AA-Conformance — referência para níveis de conformidade; alvo interno recomendado: AA.
