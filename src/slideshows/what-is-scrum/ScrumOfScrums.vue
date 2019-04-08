<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide(v-if='active')
    .eg-slide-content
      h3 Limites
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        div.rugby
          img( src='./assets/scrum-of-scrums.png')
          p Times Gerindo Times, se preocupando em sincronizar informações entre si e para camadas a cima.
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
