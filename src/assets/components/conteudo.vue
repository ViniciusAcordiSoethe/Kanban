<script>
import Cartao from "./cartao.vue";
import Draggable from 'vuedraggable';
export default{
    components: { Cartao , Draggable },
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
        <!-- <draggable class="card" :list="conteudo.cards" @start="drag=true" @end="drag=false" item-key="id"> -->
         <Cartao v-for="card in conteudo.cards" :key="card.id" :card="card" :idconteudo="conteudo.conteudoid" @scragbadum="scragbadum" />
        <!-- </draggable> -->
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