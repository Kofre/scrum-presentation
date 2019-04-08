<template lang='pug'>
#WhatIsScrum
  .eg-slideshow
    slide(:steps=5 leave='fadeOut')
      h2 O que é o Scrum
      h4 Para facilitar o entendimento precisamos:
      p(v-if='step>=2') Lembrar como tudo começou (História)
      p(v-if='step>=3') Uma visão geral
      p(v-if='step>=4') Endenter por que Utilizar?
      p(v-if='step>=5') Qual o Limite?
    history(enter='bounceInDown' leave='bounceOutDown' :inserted='true')
    overview-of-scrum(enter='bounceInDown' leave='bounceOutDown' :inserted='true')
    why-use(enter='bounceInDown' leave='bounceOutDown' :inserted='true')
    scrum-of-scrums(enter='bounceInDown' leave='bounceOutDown' :inserted='true')
</template>

<script>
import eagle from 'eagle.js'
export default {
  mixins: [ eagle.slideshow ],
  components: {
    'history': require('./History').default,
    'overview-of-scrum': require('./OverviewOfScrum').default,
    'why-use': require('./WhyUse').default,
    'scrum-of-scrums': require('./ScrumOfScrums').default
  },
  infos: {
    // These infos appear on the home page, below the slideshow's thumbnail
    title: 'O que é o Scrum',
    description: 'Uma breve descrição e história do que é o scrum e o que ele se propõe a resolver',
    path: 'what-is-scrum'
  }
}
</script>

<style lang='scss'>
@import url(https://fonts.googleapis.com/css?family=Raleway);
#WhatIsScrum{
  .eg-slideshow{
    font-family: 'Raleway';
    background-color: #eef;
    .eg-slide{
      .eg-slide-content{
        width: 25em;
        max-width: 80%;
        margin: 0 auto;
      }
    }
  }
  .eg-slide-content{
    width: 25em;
    max-width: 80%;
    margin: 0 auto;
  }
}
</style>
