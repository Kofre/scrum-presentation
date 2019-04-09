<template lang='pug'>
#FrameworkOfTheSBOK
 .eg-slideshow
   slide(:steps=4 enter='fadeIn' leave='fadeOut')
     h3 Estrutura do Guia SBOK
     div.framework
       eg-transition(leave='fadeOutLeft', enter='fadeInRight')
         img(src="./assets/sbok-framework.png" v-if='step>=2')
     eg-transition(leave='fadeOutLeft', enter='fadeInRight')
       p(v-if='step==2 && childWindow').
         #[strong Princípios] Expandem-se aos seis princípios que formam a fundação sobre a qual o Scrum se baseia.
     eg-transition(leave='fadeOutLeft', enter='fadeInRight')
       p(v-if='step==3 && childWindow').
         #[strong Aspectos] Cinco aspectos que são considerados importantes para todos os projetos Scrum.
     eg-transition(leave='fadeOutLeft', enter='fadeInRight')
       p(v-if='step==4 && childWindow').
         #[strong Processos] São dezenove processos fundamentais do Scrum e suas entradas, ferramentas e saídas associadas.
         Além  dos processos adicionais específicos de Escalar Scrum para Projetos Grandes e Escalar Scrum para a Empresa.
   principles(enter='bounceInDown' leave='bounceOutDown' :inserted='true' :childWindow="childWindow")
   aspects(enter='bounceInDown' leave='bounceOutDown' :inserted='true')
   aspect-orgnization(enter='fadeInRight' leave='fadeOutLeft' :inserted='true' :childWindow="childWindow")
   aspects(enter='fadeInRight' leave='fadeOutLeft' :inserted='true')
   aspect-business-justification(enter='fadeInRight' leave='fadeOutLeft' :inserted='true' :childWindow="childWindow")
   aspects(enter='fadeInRight' leave='fadeOutLeft' :inserted='true')
   aspect-quality(enter='fadeInRight' leave='fadeOutLeft' :inserted='true' :childWindow="childWindow")
   aspects(enter='fadeInRight' leave='fadeOutLeft' :inserted='true')
   aspect-change(enter='fadeInRight' leave='fadeOutLeft' :inserted='true' :childWindow="childWindow")
   aspects(enter='fadeInRight' leave='fadeOutLeft' :inserted='true')
   aspect-risk(enter='fadeInRight' leave='fadeOutLeft' :inserted='true' :childWindow="childWindow")
   processes(enter='bounceInDown' leave='bounceOutDown' :inserted='true' :childWindow="childWindow")
</template>

<script>
import eagle from 'eagle.js'
export default {
  mixins: [ eagle.slideshow ],
  components: {
    'principles': require('./Principles').default,
    'aspects': require('./Aspects').default,
    'aspect-orgnization': require('./AspectOrganization').default,
    'aspect-business-justification': require('./AspectBusinessJustification').default,
    'aspect-quality': require('./AspectQuality').default,
    'aspect-change': require('./AspectChange').default,
    'aspect-risk': require('./AspectRisk').default,
    'processes': require('./Processes').default
    // 'why-use': require('./WhyUse').default,
    // 'scrum-of-scrums': require('./ScrumOfScrums').default
  },
  infos: {
    // These infos appear on the home page, below the slideshow's thumbnail
    title: 'Estrutura do Guia SBOK',
    description: 'Princípios, aspectos e processos interagem uns com os outros, ' +
      'e que são de igual importância para tentar obter-se uma melhor compreensão do framework Scrum.',
    path: 'framework-of-the-sbok'
  }
}
</script>

<style lang='scss'>
  @import url(https://fonts.googleapis.com/css?family=Raleway);
  #FrameworkOfTheSBOK{
    .eg-slideshow{
      font-family: 'Raleway';
      background-color: #eef;
      .eg-slide{
        .eg-slide-content{
          width: 25em;
          max-width: 80%;
          margin: 0 auto;
          .framework{
            text-align: center;
            img {
              width: 50%;
            }
          }
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
