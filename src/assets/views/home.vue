<script>
import Conteudo from '@/assets/components/conteudo.vue';
export default{
  components: { Conteudo },
  data(){
    return{
      conteudos:[
        {conteudoid:"afazer" , titulo:"A Fazer",
        cards:[
        {id:1 , nome: "Front end" , cont:"Bersk tem que fazer o Front"},
        {id:2 , nome: "Documentação" , cont:"Padrão ABNT"},
        {id:5 , nome: "BackEnd" , cont:"Melhor Parte pelo Filipe"},
        {id:6 , nome: "Negociações" , cont:"Como negociar com o Soethe"},
        {id:7 , nome: "Festa" , cont:"Comemorar a parte 1"},
        ]},
        {conteudoid:"feito" , titulo:"Feito",
        cards:[
        {id:3 , nome: "Ideia do Projeto" , cont:"definir a ideia"},
        {id:4 , nome: "Definir quem faz oque" , cont:"quem vai fazer cada coisa"},
        ]},
      ]
    }
  },
  methods:{
    scragbadum(id , idconteudo){
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
      if (idconteudo == 'afazer'){
      const idc = procurarIndice(this.conteudos[0].cards,"id",id)
       
       this.conteudos[1].cards.push({id:this.conteudos[0].cards[idc[0]].id, nome:this.conteudos[0].cards[idc[0]].nome, cont:this.conteudos[0].cards[idc[0]].cont});
       this.conteudos[0].cards.splice(idc[0],1);
      }if(idconteudo == 'feito'){
      const idc = procurarIndice(this.conteudos[1].cards,"id",id)
       
       this.conteudos[0].cards.push({id:this.conteudos[1].cards[idc[0]].id, nome:this.conteudos[1].cards[idc[0]].nome, cont:this.conteudos[1].cards[idc[0]].cont});
       this.conteudos[1].cards.splice(idc[0],1);
      }
      
  
    }
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
  height: 50vh;
 
}
</style>
