<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide(v-if='active')
    .eg-slide-content
      h4 Aspecto - Organização
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        h5(v-if='step<=3').
          Se resume nos papéis definidos e suas responsabilidades, sendo isso o sucesso do Scrum.
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        p(v-if='step>=2 && step<=3')
          strong Papéis Centrais
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        p(v-if='step===2 && childWindow').
          São aqueles papéis obrigatoriamente necessários para o desenvolvimento do
          produto ou serviço do projeto. As pessoas a que estes papéis são atribuídos estão totalmente
          comprometidas com o projeto e são responsáveis pelo sucesso de cada iteração, e do projeto
          como um todo.
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        p(v-if='step===3')
          strong Papéis Não-Essenciais
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        p(v-if='step===3 && childWindow').
          São os papéis que não são obrigatoriamente necessários para o projeto
          Scrum. Podem incluir os membros dos times que estão interessados no projeto, que não tem
          nenhum papel formal no time do projeto e que podem interagir com o time, mas não podem ser
          responsáveis pelo sucesso do projeto. Os Papéis Não-Essenciais devem ser considerados em
          qualquer projeto Scrum.
      aspect-orgnization-core-role(:step='step-3' :childWindow="childWindow")
      aspect-orgnization-non-core-role(:step='step-6' :childWindow="childWindow")
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        img(v-if='step>=12' src="./assets/organization.png").organization
</template>
<script>
import eagle from 'eagle.js'
export default {
  mixins: [eagle.slide],
  props: {
    steps: { default: 12 },
    childWindow: { default: null }
  },
  components: {
    'aspect-orgnization-core-role': require('./components/AspectOrganizationCoreRole').default,
    'aspect-orgnization-non-core-role': require('./components/AspectOrganizationNonCoreRole').default
  }
}
</script>
<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    p {
      text-align: justify;
    }
    .organization {
      width: 100%;
      max-width: 100%;
    }
  }
}
</style>
