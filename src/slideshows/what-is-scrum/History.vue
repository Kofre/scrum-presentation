<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide(v-if='active')
    .eg-slide-content
      h3 História
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        p(v-if='step==1').
          Em meados dos anos 80, Hirotaka Takeuchi e Nonaka Ikujiro
          definiram uma estratégia flexível e completa para o desenvolvimento de produtos, onde o time de
          desenvolvimento trabalha como uma unidade, para alcançar um objetivo comum.
        div(v-if='step==2').rugby
          img( src='./assets/rugby.gif')
          p Visão bidimensional de movimentação, retirando conceito de linearidade como em uma corrida de revezamento.
        p(v-if='step==3').
          O conceito do Scrum e sua aplicabilidade para o desenvolvimento de software em uma apresentação durante a
          conferência Object-Oriented Programming, Systems, Languages & Applications (OOPSLA) em 1995 em Austin, Texas.
</template>
<script>
import eagle from 'eagle.js'
export default {
  mixins: [eagle.slide],
  props: {
    steps: { default: 3 }
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
        width: 90%;
        max-width: 100%;
      }
      p {
        margin-right: 10%;
        font-size: medium;
      }
      margin-left: 10%;
    }
  }
}
</style>
