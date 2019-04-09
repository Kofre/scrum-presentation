<template lang="pug">
div
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    h4(v-if='step>=1 && step<=3')
      strong Papéis Centrais
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step>=1 && step<=3')
      strong Dono do Produto
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step===1 && childWindow').
      Responsável por alcançar o maior valor de negócio para o projeto, e
      também responsável pela coordenação das necessidades dos clientes e pela manutenção
      da justificativa de negócio para o projeto. O Dono do Produto representa a voz do cliente.
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step>=2 && step<=3')
      strong Scrum Master
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step===2 && childWindow').
      É um facilitador, que garante ao Time Scrum o fornecimento de um
      ambiente propício para concluir o projeto com sucesso. O Scrum Master guia, facilita e
      ensina as práticas do Scrum para todos os envolvidos no projeto; remove os impedimentos
      encontrados pelo time; e, assegura que os processos do Scrum estejam sendo seguidos.
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step===3')
      strong Time Scrum
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step===3 && childWindow').
      É o grupo ou time responsável pelo desenvolvimento das entregas do
      projeto e por entender os requisitos especificados pelo Dono do Produto.
</template>
<script>
export default {
  props: {
    step: { default: 1 },
    childWindow: { default: null }
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
