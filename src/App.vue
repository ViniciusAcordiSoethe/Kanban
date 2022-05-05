<script>
export default{
  data(){
    return{
      conteudos:[
        {conteudoid:"afazer" , titulo:"A Fazer",
        cards:[{
        id:1 , nome: "Card 1 a fazer" , cont:"Conteudo do card 1",
        id:2 , nome: "Card 2 a fazer" , cont:"Conteudo do card 2",
        }]
        },
        {conteudoid:"feito" , titulo:"Feito",
        cards:[{
        id:3 , nome: "Card 1 Feito" , cont:"Conteudo do card 1",
        id:4 , nome: "Card 2 Feito" , cont:"Conteudo do card 2",
        }]
        },
      ]
    }
  },
};
</script>
<template>
  <section id="kanbanGrande">
    <h1>Kanban</h1>
    <div id="kanbanPrincipal">
      <div class="kanbanColuna" v-for="conteudo in conteudos" :key="conteudo.conteudo">
        <h1>{{conteudo.titulo}}</h1>
        <div class="card" v-for="card in conteudo.cards" :key="card.id">
          {{card.nome}}
          <br />
          <p>{{card.cont}}</p>
          <button>Proximo</button>
        </div>
      </div>
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
