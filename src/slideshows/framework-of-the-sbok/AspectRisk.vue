<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide(v-if='active')
    .eg-slide-content
      h4 Aspecto - Risco
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        p(v-if='step===1').
          Risco é definido como um evento incerto que pode afetar os objetivos de um projeto e podem contribuir
          para o seu sucesso ou fracasso. Os riscos com o potencial de causar um impacto positivo sobre o projeto
          são conhecidos como oportunidades, enquanto que as ameaças são os riscos que podem afetar o projeto
          de uma forma negativa.
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        div(v-if='step===2')
          p O Gerenciamento de Riscos consiste em cinco etapas:
          ul
            li Identificação de riscos: a utilização de várias técnicas, para identificar todos os riscos potenciais.
            li Avaliação de riscos: avaliar e estimar os riscos identificados.
            li Priorização de riscos: a priorização de riscos que serão incluídos no Backlog Priorizado do Produto.
            li Mitigação de riscos: o desenvolvimento de uma estratégia adequada para lidar com o risco.
            li Comunicação de riscos: a comunicação dos resultados das quatro primeiras etapas aos stakeholders apropriados, e a determinação de sua percepção sobre os eventos incertos.
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
  }
}
</style>
