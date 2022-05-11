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
        scragbadum(id){
            this.$emit('scragbadum' , id)
        }
    }
}
</script>
<template>
        <div class="kanbanColuna">
        <h1>{{conteudo.titulo}}</h1>
         <Cartao v-for="card in conteudo.cards" :key="card.id" :card="card" @scragbadum="scragbadum" />
      </div>
</template>