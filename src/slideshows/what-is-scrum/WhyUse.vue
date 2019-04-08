<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide(v-if='active')
    .eg-slide-content
      h3 Por que usar o Scrum?
      eg-transition(leave='fadeOutLeft', enter='fadeInRight')
        div(v-if='step<=3')
          p(v-if='step>=1').
            #[strong 1. Adaptabilidade —] O Controle de Processos Empíricos e a Entrega Iterativa fazem com que os
            projetos sejam adaptáveis e abertos à incorporação de mudanças.
          p(v-if='step>=2').
            #[strong 2. Transparência —] Todos as fontes de informações, tais como, o Scrumboard e o Gráfico Burndown
            do Sprint, são compartilhadas gerando um ambiente de trabalho aberto.
          p(v-if='step>=3').
            #[strong 3. Feedback Contínuo —] O Feedback Contínuo é fornecido através de processos denominados como
            Conduzir a Reunião Diária e Demonstrar e Validar o Sprint.
        div(v-if='step<=6')
          p(v-if='step>=4').
            #[strong 4. Melhoria Contínua —] As entregas melhoram progressivamente, Sprint por Sprint, através do
            processo de Refinamento do Backlog Priorizado do Produto.
          p(v-if='step>=5').
            #[strong 5. Entrega Contínua de Valor —] Os processos iterativos permitem a entrega contínua de valor tão
            frequente quanto exigido pelo cliente, através do processo de Envio de Entregáveis.
          p(v-if='step>=6').
            #[strong 6. Ritmo Sustentável —] Os processos do Scrum são projetados de tal forma, que as pessoas
            envolvidas trabalham em um ritmo sustentável, podendo, em teoria, continuar indefinidamente.
        div(v-if='step<=9')
          p(v-if='step>=7').
            #[strong 7. Entrega Antecipada de Alto Valor —] O processo de Criar o Backlog Priorizado do Produto garante
            que as exigências de maior valor ao cliente sejam atendidas primeiramente.
          p(v-if='step>=8').
            #[strong 8. Processo de Desenvolvimento Eficiente —] O Time-boxing e a minimização de trabalho não
            essencial conduzem a níveis mais altos de eficiência.
          p(v-if='step>=9').
            #[strong 9. Motivação —] Os processos de Conduzir a Reunião Diária e de Retrospectiva do Sprint conduzem a
            níveis mais altos de motivação entre os colaboradores.
        div(v-if='step<=12')
          p(v-if='step>=10').
            #[strong 10. Solução de Problemas de Forma mais Rápida —] A colaboração e a colocation de times
            multifuncionais conduzem a resolução de problemas de maneira mais rápida.
          p(v-if='step>=11').
            #[strong 11. Entregas Eficazes —] O processo de Criar o Backlog Priorizado do Produto, e as revisões
            periódicas após a geração de entregáveis, garantem entregas eficazes para o cliente.
          p(v-if='step>=12').
            #[strong 12. Com Foco no Cliente —] Uma abordagem colaborativa com stakeholders e a ênfase no valor de
            negócio, garantem uma estrutura orientada para o cliente.
        div(v-if='step<=15')
          p(v-if='step>=13').
            #[strong 13. Ambiente de Alta Confiança —] Os processos de Conduzir a Reunião Diária e de Retrospectiva do
            Sprint promovem a transparência e a colaboração, resultando em um ambiente de trabalho de alta
            confiança, e garantindo baixo atrito entre os colaboradores.
          p(v-if='step>=14').
            #[strong 14. Responsabilidade Coletiva —] O processo de Aprovar, Estimar e Comprometer as Estórias de
            Usuário permite que os membros do time se sintam responsáveis pelo projeto e por seu trabalho,
            resultando em uma qualidade melhor.
          p(v-if='step>=15').
            #[strong 15. Alta Velocidade —] Uma estrutura de colaboração que permite que os times multifuncionais
            altamente qualificados, atinjam o seu pleno potencial e alta velocidade.
        div(v-if='step>=16')
          p(v-if='step>=16').
            #[strong 16. Ambiente Inovador —] Os processos de Retrospectiva do Sprint e de Retrospectiva do Projeto
            criam um ambiente de introspecção, aprendizagem e adaptabilidade, que levam a um ambiente de
            trabalho inovador e criativo.
</template>
<script>
import eagle from 'eagle.js'
export default {
  mixins: [eagle.slide],
  props: {
    steps: { default: 16 }
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
    div {
      p {
        text-align: justify;
      }
    }
  }
}
</style>
