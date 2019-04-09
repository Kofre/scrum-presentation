<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide(v-if='active')
    .eg-slide-content
      h4 Aspecto - Mudança
      div.change
        eg-transition(leave='fadeOutLeft', enter='fadeInRight')
          img(v-if='step===2' src='./assets/change.png')
        eg-transition(leave='fadeOut', enter='fadeIn')
          p(v-if='step===2 && childWindow').
            Um princípio fundamental do Scrum é reconhecer que 1) os stakeholders (por exemplo, clientes, usuários e
            patrocinadores) mudam de ideia muitas vezes durante o projeto, sobre o que eles querem e precisam, e 2)
            é muito difícil, se não impossível, para os stakeholders definirem todos os requisitos durante o início do
            projeto.
</template>
<script>
import eagle from 'eagle.js'
export default {
  mixins: [eagle.slide],
  props: {
    steps: { default: 4 },
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
    .change {
      img {
        width: 60%;
        margin-left: 20%;
      }
      p {
        font-size: small;
      }
    }
  }
}
</style>
