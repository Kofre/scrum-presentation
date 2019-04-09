<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide(v-if='active')
    .eg-slide-content
      h3 Princípios
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        p(v-if='step===1').
          Os Princípios do Scrum são as diretrizes fundamentais para a aplicação do framework Scrum
          e devem obrigatoriamente serem usados em todos os projetos Scrum.
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        div(v-if='step>=2').principles
          img(src='./assets/principles.png')
          eg-transition(leave='fadeOut', enter='fadeIn')
            p(v-if='step===2 && childWindow').
              #[strong Controle de Processos Empíricos —] Esse princípio enfatiza a filosofia central do Scrum
              com base em três ideias principais: transparência, inspeção e adaptação.
          eg-transition(leave='fadeOut', enter='fadeIn')
            p(v-if='step===3 && childWindow').
              #[strong Auto-organização —] Esse princípio está focado nos colaboradores atuais de uma organização,
              que entregam significamente um maior valor quando são auto-organizados e isto resulta em
              times mais satisfeitos e responsabilidade compartilhada; e em um ambiente inovador e criativo
              que é mais propício ao crescimento.
          eg-transition(leave='fadeOut', enter='fadeIn')
            p(v-if='step===4 && childWindow').
              #[strong Colaboração —] Esse princípio concentra-se nas três dimensões básicas relacionadas com o
              trabalho colaborativo: consciência, articulação e apropriação. Também defende o gerenciamento
              de projetos como um processo de criação de valor compartilhado, com times trabalhando e
              interagindo em conjunto para atingirem melhores resultados.
          eg-transition(leave='fadeOut', enter='fadeIn')
            p(v-if='step===5 && childWindow').
              #[strong Priorização Baseada em Valor —] Esse princípio destaca o foco do Scrum em entregar o máximo
              de valor de negócio possível, durante todo o projeto.
          eg-transition(leave='fadeOut', enter='fadeIn')
            p(v-if='step===6 && childWindow').
              #[strong Time-boxing —] Esse princípio descreve como o tempo é considerado uma restrição limitada em
              Scrum, e como ele é usado para ajudar a gerenciar o planejamento e execução do projeto com
              eficácia. Os elementos de Time-boxed em Scrum incluem os Sprints, as Reuniões Diárias, a
              Reunião de Planejamento do Sprint, e a Reunião de Revisão do Sprint.
          eg-transition(leave='fadeOut', enter='fadeIn')
            p(v-if='step===7 && childWindow').
              #[strong Desenvolvimento Iterativo —] Esse princípio define o desenvolvimento iterativo e enfatiza como
              administrar melhor as mudança e criar produtos que atendam às necessidades do cliente. Também
              delineia as responsabilidades do Dono do Produto e da organização, com relação ao
              desenvolvimento iterativo.
</template>
<script>
import eagle from 'eagle.js'
export default {
  mixins: [eagle.slide],
  props: {
    steps: { default: 7 },
    childWindow: { default: null }
  },
  data: function () {
    return {
    }
  }
}
</script>
<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    p {
      text-align: justify;
    }
    .principles {
      img {
        width: 60%;
        margin-left: 20%;
      }
      p {
        font-size: medium;
      }
    }
  }
}
</style>
