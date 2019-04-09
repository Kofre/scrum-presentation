<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide(v-if='active')
    .eg-slide-content
      h4 Aspecto - Qualidade
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        div.quality
          img(v-if='step===2' src='./assets/quality-cycle.png')
          eg-transition(leave='fadeOut', enter='fadeIn')
            p(v-if='step===2 && childWindow').
              Em Scrum, a qualidade é definida como a capacidade dos produtos ou entregas concluídas em atender os
              Critérios de Aceitação e em alcançar o valor de negócio esperado pelo cliente.
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        div(v-if='step===3').acceptance
          h4 Exemplo Estoria (Critérios de Aceitação)
          p #[strong Como] um operador de marcação de consulta
          p #[strong Eu gostaria] de visualizar a agenda de consultas dos médicos
          p #[strong Para] saber quais horários estão disponíveis para novas marcações.
          p #[strong Critérios de aceitação]
          ul
            li Eu quero ter opções de visualização da agenda por dia, semana e mês.
            li Eu quero visualizar a agenda de consultas do mês atual e do mês posterior.
            li Cada consulta agendada deve mostrar o nome e o convênio do paciente
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        div(v-if='step===4')
          p.
            Enquanto que os Critérios de Aceitação são exclusivos para Estórias de Usuário individuais,
            os Critérios de Pronto são um conjunto de regras que são aplicáveis a todas as Estórias de Usuário
            em um determinado Sprint. Os Critérios de Pronto geralmente podem incluir:
          ul
            li avaliação por outros membros do time
            li Conclusão do teste unitário da Estória de Usuário
            li Conclusão de testes de qualidade
            li Conclusão de toda a documentação relacionada com a Estória de Usuário
            li Todos os problemas são corrigidos
            li Demonstração bem sucedida para os stakeholders e/ou representantes do negócio
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
    .quality {
      img {
        width: 80%;
        margin-left: 10%;
      }
      p {
        font-size: medium;
      }
    }
    .acceptance {
      font-size: large;
    }
  }
}
</style>
