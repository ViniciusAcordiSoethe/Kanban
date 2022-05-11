<script>
import Conteudo from './assets/components/conteudo.vue';
export default{
  components: { Conteudo },
  data(){
    return{
      conteudos:[
        {conteudoid:"afazer" , titulo:"A Fazer",
        cards:[
        {id:1 , nome: "Card 1 a fazer" , cont:"Conteudo do card 1"},
        {id:2 , nome: "Card 2 a fazer" , cont:"Conteudo do card 2"},
        {id:5 , nome: "Card 3 a fazer" , cont:"Conteudo do card 3"},
        {id:6 , nome: "Card 4 a fazer" , cont:"Conteudo do card 4"},
        {id:7 , nome: "Card 5 a fazer" , cont:"Conteudo do card 5"},
        ]},
        {conteudoid:"feito" , titulo:"Feito",
        cards:[
        {id:3 , nome: "Card 1 Feito" , cont:"Conteudo do card 1"},
        {id:4 , nome: "Card 2 Feito" , cont:"Conteudo do card 2"},
        ]},
      ]
    }
  },
  methods:{
    scragbadum(id){
       function procurarIndice(arraySearch, atributo, valor){
       var cont=0;
       var indices=[];
       for(var i in arraySearch){
          var row = arraySearch[i];
         if(row[atributo]==valor){
           indices.push(cont)
          }
          cont++;
        }
      return indices;
      }
      const idc = procurarIndice(this.conteudos[0].cards,"id",id)
       
       this.conteudos[1].cards.push({id:this.conteudos[0].cards[idc[0]].id, nome:this.conteudos[0].cards[idc[0]].nome, cont:this.conteudos[0].cards[idc[0]].cont});
       this.conteudos[0].cards.splice(idc[0],1);
  
    },

  }
};
</script>
<template>
  <section id="kanbanGrande">
    <h1>Kanban</h1>
    <div id="kanbanPrincipal">
      <Conteudo v-for="conteudo in conteudos" :key="conteudo.conteudoid" :conteudo="conteudo" @scragbadum="scragbadum" />
    </div>
  </section>
</template>
<style>
body,
h1,
html {
  margin: 0px;
}
#kanbanGrande {
  background-color: aqua;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#kanbanPrincipal {
  border: solid black;
  background-color: blueviolet;
  display: flex;
  padding: 10px;
  justify-content: space-around;
  width: 80%;
  height: 40vh;
}
.kanbanColuna {
  border: solid black;
  width: 45%;
  text-align: center;
}
.card {
  border: solid black;
  margin: 0px 50px 5px 50px;
}
</style>
