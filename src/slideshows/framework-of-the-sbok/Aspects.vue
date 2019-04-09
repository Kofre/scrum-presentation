<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide(v-if='active')
    .eg-slide-content
      h3 Aspectos
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
          img(src='./assets/aspects.png')
</template>
<script>
import eagle from 'eagle.js'
export default {
  mixins: [eagle.slide],
  props: {
    steps: { default: 1 },
    childWindow: { default: null }
  },
  components: {
  }
}
</script>
<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    p {
      text-align: justify;
    }
      img {
        width: 100%;
        max-width: 100%;
      }
  }
}
</style>
