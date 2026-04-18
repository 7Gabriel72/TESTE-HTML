# Relatório SIGPREV

## Visão Estratégica do Sistema

O SIGPREV deve se posicionar como um sistema de controle financeiro pessoal que une clareza operacional, acolhimento emocional e inteligência preventiva. O produto não pode parecer apenas uma planilha bonita. Ele precisa transmitir que entende o comportamento do usuário, antecipa riscos e oferece apoio concreto para decisões mais conscientes.

O sistema atual já aponta um bom caminho visual, com estética editorial, tons de verde e blocos bem definidos. Mesmo assim, ainda existe uma sensação forte de protótipo porque muitas telas não estavam conectadas, vários CTAs não tinham fluxo real e há versões duplicadas para a mesma etapa da jornada. Isso enfraquece a percepção de confiança e continuidade.

O posicionamento ideal do SIGPREV deve comunicar:

- confiança, por meio de hierarquia visual clara, indicadores consistentes, linguagem segura e feedbacks previsíveis;
- controle financeiro, com números visíveis logo no primeiro olhar, estados de risco bem sinalizados e ações prioritárias claras;
- clareza, evitando excesso de informações no topo da tela e usando blocos com propósito único;
- praticidade, com navegação curta, formulários simples e ações recorrentes sempre acessíveis;
- acolhimento, com microcopy humana, educativa e não punitiva;
- organização e segurança, com padrões visuais consistentes, boa responsividade e mensagens que expliquem o que está acontecendo.

O tom visual ideal deve ser:

- profissional, mas amigável;
- moderno, sem excesso de efeitos ou linguagem genérica;
- limpo, com foco em leitura e tomada de decisão;
- visualmente forte, mas acessível;
- totalmente em português simples, com termos claros e próximos da realidade do usuário.

## Estrutura das Telas

Inventário funcional encontrado no projeto:

- landing page principal: `sigprev_home/code.html`
- landing alternativa: `sigprev_landing_page/code.html`
- login/cadastro principal: `sigprev_login_e_cadastro/code.html`
- login alternativo: `sigprev_entrar/code.html`
- verificação: `sigprev_verifica_o/code.html`
- dashboard principal: `sigprev_dashboard/code.html`
- dashboard alternativo: `sigprev_dashboard_financeiro/code.html`
- histórico principal: `sigprev_hist_rico/code.html`
- histórico alternativo: `sigprev_hist_rico_de_gastos/code.html`
- planos principal: `sigprev_planos_de_assinatura/code.html`
- planos alternativo: `sigprev_planos/code.html`
- configurações principal: `sigprev_configura_es_1/code.html`
- configurações alternativa: `sigprev_configura_es_2/code.html`
- relatórios e metas: `sigprev_relat_rios_e_metas/code.html`

Estrutura ideal do sistema:

- Tela inicial/apresentação
  Objetivo: explicar valor, gerar confiança e levar para cadastro ou planos.
  Primeiro impacto: proposta de valor, dor do consumo impulsivo e visão do benefício.
  Ação principal: criar conta ou começar agora.
  Contribuição para o tema: mostra que o sistema não só registra gastos, mas ajuda a evitar decisões ruins.

- Tela de login
  Objetivo: acesso rápido e seguro.
  Primeiro impacto: confiança, simplicidade e recuperação de acesso fácil.
  Ação principal: entrar.
  Contribuição para o tema: reduz atrito de acesso ao painel de controle, incentivando acompanhamento frequente.

- Tela de cadastro
  Objetivo: coletar dados mínimos e iniciar a jornada.
  Primeiro impacto: clareza sobre tempo necessário e segurança dos dados.
  Ação principal: criar conta.
  Contribuição para o tema: já pode capturar meta principal e perfil financeiro.

- Tela de verificação
  Objetivo: validar e-mail ou identidade.
  Primeiro impacto: segurança e confirmação de acesso.
  Ação principal: verificar código.
  Contribuição para o tema: reforça confiança em um sistema que lida com dados sensíveis.

- Dashboard
  Objetivo: centralizar visão financeira e próximas decisões.
  Primeiro impacto: saldo, orçamento comprometido, alertas e prioridades.
  Ação principal: revisar alerta, registrar gasto ou acompanhar meta.
  Contribuição para o tema: combate a impulsividade com contexto, comparativos e avisos inteligentes.

- Planos
  Objetivo: mostrar proposta de valor com clareza.
  Primeiro impacto: comparação simples entre níveis de profundidade do produto.
  Ação principal: assinar ou começar no gratuito.
  Contribuição para o tema: vende valor por consciência financeira, não por pressão comercial.

- Configurações
  Objetivo: ajustar perfil, notificações, segurança e preferências.
  Primeiro impacto: controle sobre alertas e privacidade.
  Ação principal: salvar alterações.
  Contribuição para o tema: permite personalizar alertas de impulsividade e limites.

- Relatórios e metas
  Objetivo: mostrar evolução, comportamento e objetivos.
  Primeiro impacto: progresso, insights e próximos marcos.
  Ação principal: revisar metas e interpretar tendências.
  Contribuição para o tema: transforma números em aprendizado e autoconsciência.

- Histórico de gastos
  Objetivo: registrar, consultar, editar e analisar despesas.
  Primeiro impacto: filtros, categorias e classificação essencial/não essencial.
  Ação principal: revisar lançamentos.
  Contribuição para o tema: ajuda a perceber repetição de compras supérfluas.

- Alertas e recomendações
  Objetivo: orientar decisões em tempo real.
  Primeiro impacto: mensagens curtas, contextuais e acionáveis.
  Ação principal: revisar orçamento ou adiar compra.
  Contribuição para o tema: atua diretamente na prevenção ao impulso.

## Redesign da Tela Inicial com Carrossel

### Hero Principal

Estrutura ideal:

- título forte: “Controle seus gastos antes que eles controlem você”
- subtítulo: “O SIGPREV ajuda você a entender seus hábitos, evitar compras por impulso e proteger seu orçamento com alertas e relatórios claros”
- CTA primário: “Começar agora”
- CTA secundário: “Ver planos”
- apoio visual: composição com dashboard, metas, alertas e uma cena financeira acolhedora, evitando imagens genéricas de banco

O hero deve trazer uma promessa concreta: menos ansiedade, mais clareza e mais consciência sobre o uso do dinheiro. O texto precisa falar do problema real do usuário brasileiro: promoções, parcelamentos, redes sociais, compras rápidas e perda de controle.

### Carrossel Explicativo

O carrossel deve ser horizontal no mobile e com controles visíveis no desktop. A transição ideal é suave, com arraste no toque e indicadores de progresso.

Sugestão de slides:

- Slide 1
  Título: “Entenda para onde seu dinheiro está indo”
  Texto: “Visualize salários, despesas fixas, gastos variáveis e categorias em uma única tela.”
  Ícone ideal: gráfico de categorias.
  Objetivo emocional: sensação de clareza.
  Objetivo funcional: mostrar organização.
  Transição: fade com deslocamento lateral leve.

- Slide 2
  Título: “Evite compras por impulso com alertas inteligentes”
  Texto: “Receba avisos quando um gasto ameaçar seu orçamento ou se repetir com frequência.”
  Ícone ideal: alerta com carrinho.
  Objetivo emocional: sensação de proteção.
  Objetivo funcional: prevenção.
  Transição: destaque de cor no card ativo.

- Slide 3
  Título: “Organize seus gastos de forma simples”
  Texto: “Classifique despesas em essenciais e não essenciais sem complicar sua rotina.”
  Ícone ideal: checklist financeiro.
  Objetivo emocional: praticidade.
  Objetivo funcional: simplificação.
  Transição: snap suave com toque.

- Slide 4
  Título: “Receba insights personalizados sobre seu comportamento financeiro”
  Texto: “Identifique padrões, gatilhos e excessos antes que eles comprometam suas metas.”
  Ícone ideal: cérebro com gráfico.
  Objetivo emocional: autoconsciência.
  Objetivo funcional: análise comportamental.
  Transição: entrada com microanimação do ícone.

- Slide 5
  Título: “Transforme seu orçamento em decisões mais conscientes”
  Texto: “Troque compras impulsivas por planejamento, estabilidade e progresso real.”
  Ícone ideal: alvo com moeda.
  Objetivo emocional: esperança e controle.
  Objetivo funcional: reforço do valor do produto.
  Transição: pausa um pouco maior no último slide para reforço da mensagem.

### Seção de Benefícios

Os benefícios devem aparecer em cards curtos e fáceis de escanear:

- controle de gastos
- prevenção de dívidas
- acompanhamento do saldo
- relatórios visuais
- planejamento financeiro
- recomendações personalizadas

Cada card deve ter:

- título objetivo;
- descrição de uma frase;
- ícone consistente;
- apoio visual leve;
- possibilidade de clique para ver mais no futuro.

### Seção Educativa

Essa área deve ser curta, mas poderosa:

- “O que é consumo impulsivo?”
- “Como promoções e anúncios afetam suas decisões”
- “Por que pequenos gastos repetidos mudam seu orçamento”
- “Como o SIGPREV ajuda você a pausar antes de comprar”

Formato ideal:

- bloco de conteúdo com 3 ou 4 cartões educativos;
- linguagem simples;
- CTA final do tipo “Quero proteger meu orçamento”.

## Proposta Detalhada da Seção de Planos

Estratégia recomendada:

- Bronze
  Ideal para quem está começando.
  Recursos: registro de salário, despesas, saldo básico e histórico simples.
  Benefício principal: organização inicial.
  CTA: “Começar grátis”.

- Prata
  Ideal para quem já quer visão analítica.
  Recursos: categorias, alertas, relatórios, metas e comparativos mensais.
  Benefício principal: controle ativo e prevenção de desvio.
  CTA: “Assinar Prata”.

- Ouro
  Ideal para quem quer inteligência comportamental.
  Recursos: medidor de impulsividade, previsões, relatórios avançados, parcelamentos e recomendações personalizadas.
  Benefício principal: tomada de decisão assistida.
  CTA: “Assinar Ouro”.

Recomendação visual:

- destacar o plano Prata como mais equilibrado;
- usar um selo “Mais escolhido” ou “Melhor para controle consciente”;
- evitar urgência artificial;
- explicar claramente o ganho de cada plano;
- manter preço, benefício e público-alvo visíveis acima da dobra do card.

Os textos devem vender utilidade e não status. Em vez de “mais poder”, o foco deve ser “mais clareza”, “mais proteção” e “mais previsibilidade”.

## Redesign Completo do Dashboard

Layout ideal no desktop:

- topo com saudação, mês atual, notificações e perfil;
- menu lateral fixo;
- primeira linha com indicadores principais;
- segunda linha com gráfico central e bloco de risco;
- terceira linha com histórico recente, metas e recomendações;
- área final com observações, educação e próximos passos.

Blocos prioritários:

- card de salário
  Conteúdo: valor recebido, variação e data de entrada.

- card de gastos fixos
  Conteúdo: total, compromissos do mês e próximos vencimentos.

- card de gastos variáveis
  Conteúdo: total e tendência de alta ou baixa.

- card de saldo restante
  Conteúdo: quanto ainda pode ser gasto com segurança.

- percentual do orçamento já comprometido
  Deve aparecer em formato visual simples e muito legível.

- alerta de risco de endividamento
  Deve aparecer alto na página quando necessário.

- aviso de compras impulsivas
  Exemplo: “Seus gastos não essenciais cresceram 18% nesta semana.”

- gráfico por categoria
  Ideal em rosca ou barras horizontais.

- gráfico de evolução mensal
  Comparar gasto, economia e comprometimento do orçamento.

- últimas movimentações
  Mostrar data, categoria, tipo, valor e etiqueta essencial/não essencial.

- metas
  Mostrar progresso, prioridade e impacto da meta no orçamento.

- recomendações
  Curadoria de até 3 recomendações acionáveis, não 10 avisos genéricos.

Prioridade de leitura:

- primeiro: saúde geral do mês;
- segundo: alertas de risco;
- terceiro: onde o dinheiro está indo;
- quarto: o que fazer agora;
- quinto: progresso de metas.

## Melhorias Funcionais Contra Consumo Impulsivo

Funcionalidades recomendadas:

- alerta antes de registrar compra supérflua
  Exemplo: “Este gasto é não essencial. Deseja registrar mesmo assim?”

- classificação entre essencial e não essencial
  Pode ser sugerida automaticamente com opção de ajuste.

- medidor de impulsividade financeira
  Índice baseado em frequência, horário, categoria e repetição.

- análise de frequência de compras por categoria
  Exemplo: aumento de pedidos por delivery, moda ou marketplace.

- recomendação automática de economia
  Exemplo: “Se reduzir 20% em lazer neste mês, você protege sua meta de viagem.”

- lembrete de metas
  Mostrar quando um gasto ameaça meta prioritária.

- comparação entre desejo e necessidade
  Pergunta rápida no cadastro de gasto: “Isso é necessidade imediata, desejo ou impulso?”

- relatório de gastos parcelados
  Exibir parcelas futuras e peso no orçamento dos próximos meses.

- aviso de orçamento perto do limite
  Deve aparecer antes do estouro e não depois.

- mensagens educativas contextualizadas
  Exemplo: “Você já comprometeu 82% do orçamento mensal.”
  Exemplo: “Nos últimos 7 dias, seus gastos com compras não essenciais aumentaram.”
  Exemplo: “Considere adiar esta compra para proteger sua meta financeira.”

## Experiência do Usuário e Textos em Português

Padrão de linguagem:

- títulos curtos;
- descrições em frases claras;
- botões com verbos;
- erros objetivos;
- sucesso com reforço positivo;
- alertas sem tom de culpa.

Microcopy recomendada:

- login
  Título: “Entre na sua conta”
  Descrição: “Acompanhe seus gastos, metas e alertas financeiros.”

- cadastro
  Título: “Crie sua conta”
  Descrição: “Leva menos de 2 minutos para começar.”

- redefinição de senha
  “Enviamos um link para seu e-mail. Verifique sua caixa de entrada.”

- cadastro de gasto
  “Descreva a compra para acompanhar melhor seus hábitos.”

- saldo baixo
  “Seu saldo disponível está ficando curto para o restante do mês.”

- metas financeiras
  “Esse gasto pode atrasar sua meta de reserva de emergência.”

- confirmação de alterações
  “Suas preferências foram atualizadas com sucesso.”

- erro de formulário
  “Confira os campos destacados e tente novamente.”

## Layout Responsivo para Celular

No mobile, a prioridade deve ser leitura rápida e ação imediata. O sistema não pode tentar mostrar tudo ao mesmo tempo.

Regras principais:

- o menu lateral vira menu recolhível ou barra inferior;
- os cards se empilham em uma coluna;
- os gráficos devem simplificar legenda e reduzir ruído;
- o carrossel precisa aceitar toque e arraste;
- títulos e indicadores principais devem subir para o topo;
- filtros e ações secundárias devem ficar abaixo do bloco principal;
- áreas de toque precisam ser confortáveis.

Comportamento por tela:

- tela inicial
  Hero com título forte, CTAs empilhados e carrossel horizontal.

- planos
  Cards em coluna, destaque do plano recomendado sem quebrar a leitura.

- login/cadastro
  Formulário central, sem excesso de texto lateral.

- dashboard
  Saldo, alerta e orçamento comprometido primeiro.

- histórico
  Filtros em chips e lista de gastos com rolagem limpa.

- configurações
  Grupos em acordeão ou cards separados.

Recomendações de escala:

- fonte base de 16px;
- títulos entre 24px e 32px;
- espaçamento vertical consistente;
- botões com altura mínima de 44px;
- ícones sempre acompanhados de texto quando forem ações críticas.

## Layout Desktop

Distribuição ideal:

- esquerda: sidebar fixa com navegação principal;
- topo: cabeçalho com contexto da tela, notificações e perfil;
- centro: indicadores e área principal de análise;
- direita, quando houver espaço: insights, metas rápidas ou bloco de recomendações;
- rodapé: apenas informações institucionais, sem competir com a área principal.

Condução de leitura:

- da esquerda para o centro com foco em indicadores;
- do topo para o alerta prioritário;
- do alerta para o gráfico e decisões do mês;
- do gráfico para histórico e metas;
- das metas para recomendações e educação.

## Identidade Visual

Direção recomendada:

- verde escuro para confiança e estabilidade;
- verde médio para ação e progresso;
- âmbar para atenção e reflexão;
- vermelho apenas para risco real;
- fundos neutros claros para reduzir cansaço visual;
- cards com bordas suaves, sombras leves e profundidade discreta.

Uso de cor:

- saldo positivo: verde;
- atenção: âmbar;
- risco: vermelho;
- ação principal: verde profundo;
- fundo neutro: off-white;
- blocos informativos: cinza claro esverdeado.

Tipografia:

- Manrope para títulos;
- Inter para textos e formulários.

Botões:

- primário sólido;
- secundário outline;
- terciário em texto com ícone.

Animação:

- sutil;
- focada em entrada de cards, estados ativos e carrossel;
- sem exagero ornamental.

## Acessibilidade e Usabilidade

Pontos obrigatórios:

- contraste adequado nos textos e alertas;
- fonte mínima confortável;
- áreas de toque amplas;
- navegação previsível;
- ícones com texto de apoio;
- feedback visual em ações;
- formulários com rótulos claros;
- mensagens compreensíveis.

Também recomendo:

- estados de foco visíveis;
- labels persistentes, não apenas placeholder;
- mensagens de erro próximas ao campo;
- agrupamento lógico de informações;
- redução de dependência exclusiva de cor para indicar estado.

## Jornada do Usuário

Fluxo ideal:

- usuário entra na landing;
- entende a proposta em poucos segundos;
- percorre o carrossel e benefícios;
- visualiza conteúdo educativo;
- escolhe um plano;
- cria conta ou entra;
- registra salário;
- adiciona gastos;
- recebe alertas e comparativos;
- acompanha metas e relatórios;
- começa a perceber padrões e mudar hábitos.

## Conclusão

O SIGPREV tem uma base visual promissora e um tema muito forte. O principal problema atual não é falta de estética, mas falta de coesão de produto. As telas pareciam peças isoladas de um bom conceito. Ao conectar a navegação e revisar a jornada, o sistema passa a funcionar mais como plataforma e menos como coleção de protótipos.

Próximas prioridades recomendadas:

- consolidar versões duplicadas por etapa;
- definir uma única arquitetura visual oficial;
- transformar alertas em componente padrão;
- criar o fluxo real de cadastro e lançamento de gastos;
- priorizar funcionalidades anti-impulso como diferencial central do produto.
