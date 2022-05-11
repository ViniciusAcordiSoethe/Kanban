<script>
import Cartao from "./cartao.vue";
export default{
    components: { Cartao },
    props:{
        conteudo:{
            type:Object,
        }
    },
    emits:
        ['scragbadum']
    ,
    methods:{
        scragbadum(id, idconteudo){
            this.$emit('scragbadum' , id , idconteudo)
        }
    }
}
</script>
<template>
        <div class="kanbanColuna">
        <h1>{{conteudo.titulo}}</h1>
         <Cartao v-for="card in conteudo.cards" :key="card.id" :card="card" :idconteudo="conteudo.conteudoid" @scragbadum="scragbadum" />
      </div>
</template>
<style>
.kanbanColuna {
  border: solid black;
  width: 45%;
  text-align: center;
   overflow-y:auto;
}
</style>