<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide(v-if='active')
    .eg-slide-content
      h4 Aspecto - Justificativa de Negócio
      div.justification
        eg-transition(leave='fadeOutLeft', enter='fadeInRight')
          img(v-if='step===2' src='./assets/value-driven.png')
        eg-transition(leave='fadeOut', enter='fadeIn')
          p(v-if='step===2 && childWindow').
            A Justificativa de Negócio em Scrum é baseada no conceito de entrega dirigida a valor. Uma das
            características-chave de qualquer projeto é a incerteza dos resultados. É impossível garantir o sucesso do
            projeto, independentemente do seu tamanho ou de sua complexidade. Diante dessa incerteza do sucesso,
            o Scrum tenta começar a entregar resultados no projeto o mais rápido possível. Esta entrega antecipada de
            resultados, e consequentemente, de valor, oferece uma oportunidade para reinvestimento e comprova o
            valor do projeto aos stakeholders.
        eg-transition(leave='fadeOutLeft', enter='fadeInRight')
          img(v-if='step===3' src='./assets/business-justification-flow.png')
        eg-transition(leave='fadeOut', enter='fadeIn')
          p(v-if='step===3 && childWindow').
            A adaptabilidade do Scrum permite que os objetivos e os processos do projeto sejam alterados caso
            ocorram modificações na justificativa de negócio. É importante notar que embora o Dono do Produto seja o
            principal responsável pela justificativa de negócio, outros membros do time também contribuem
            significativamente.
</template>
<script>
import eagle from 'eagle.js'
export default {
  mixins: [eagle.slide],
  props: {
    steps: { default: 3 },
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
    .justification {
      img {
        width: 80%;
        margin-left: 10%;
      }
      p {
        font-size: medium;
      }
    }
  }
}
</style>
