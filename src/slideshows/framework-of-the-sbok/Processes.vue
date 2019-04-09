<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide(v-if='active')
    .eg-slide-content
      h4 Processos
      div.processes
        eg-transition(leave='fadeOutLeft', enter='fadeInRight')
          img(v-if='step===1' src='./assets/processes.png')
        eg-transition(leave='fadeOutLeft', enter='fadeInRight')
          img(v-if='step===2' src='./assets/scrum-x-traditional.png')
</template>
<script>
import eagle from 'eagle.js'
export default {
  mixins: [eagle.slide],
  props: {
    steps: { default: 2 },
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
    .processes {
      img {
        width: 90%;
        max-width: 90%;
        margin-left: 5%;
        margin-top: -5%;
      }
      p {
        font-size: small;
      }
    }
  }
}
</style>
