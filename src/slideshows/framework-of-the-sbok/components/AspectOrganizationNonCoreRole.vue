<template lang="pug">
div
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    h4(v-if='step>=1 && step<=5')
      strong Papéis Não-Essenciais
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step>=1 && step<=5')
      strong Stakeholder(s)
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step===1 && childWindow').
      É um termo coletivo que inclui clientes, usuários e patrocinadores, que
      muitas vezes interagem com o Time Central do Scrum e que influenciam o projeto durante
      todo o seu desenvolvimento. Mais importante ainda, é para os stakeholders que o projeto
      produz os benefícios colaborativos.
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step>=2 && step<=5')
      strong Scrum Guidance Body (SGB)
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step===2 && childWindow').
      É um recurso opcional, que geralmente consiste em um
      conjunto de documentos e/ou um grupo de especialistas que estão geralmente envolvidos
      na definição de objetivos relacionados com a qualidade, regulamentações
      governamentais, de segurança e outros parâmetros-chave da organização. O SGB orienta
      o trabalho realizado pelo Dono do Produto, Scrum Master e pelo Time Scrum.
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step>=3 && step<=5')
      strong Fornecedores
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step===3 && childWindow').
      Incluem indivíduos ou organizações externas, que fornecem produtos e/ou
      serviços que não estão dentro das competências essenciais da organização do projeto.
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step>=4 && step<=5')
      strong Dono do Produto Chefe
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step===4 && childWindow').
      É um papel desempenhado em projetos maiores, com vários
      Times Scrum. Este papel é responsável por facilitar o trabalho dos Donos do Produtos e
      por manter a justificativa de negócio durante um projeto grande.
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step===5')
      strong Scrum Master Chefe
  eg-transition(leave='fadeOutLeft', enter='fadeInRight')
    p(v-if='step===5 && childWindow').
      É responsável pela coordenação das atividades relacionadas com o
      Scrum em projetos grandes, que podem exigir que vários Times Scrum trabalhem em
      paralelo.
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
