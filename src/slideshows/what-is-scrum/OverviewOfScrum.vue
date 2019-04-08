<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide(v-if='active')
    .eg-slide-content
      h3 Visão Geral
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        div(v-if='step<=3')
          p(v-if='step>=1').
            É uma metodologia de adaptação, iteratividade, rápidez, flexibilidade e eficiência,
            projetada para fornecer um valor significativo de forma rápida durante todo o projeto.
          p(v-if='step>=2').
            Garante a transparência na comunicação e cria um ambiente
            de responsabilidade coletiva e progresso contínuo.
          p(v-if='step>=3').
            Utiliza times multifuncionais, auto-organizados, e empoderados,
            que dividem o trabalho em ciclos curtos e concentrados chamados Sprints.
        div(v-if='step>3').rugby
          img(src='./assets/fluxo-scrum.png')
</template>
<script>
import eagle from 'eagle.js'
export default {
  mixins: [eagle.slide],
  props: {
    steps: { default: 4 }
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
    .rugby {
      img {
        max-width: 120%;
        width: 120%;
        margin-left: -10%;
      }
    }
  }
}
</style>
