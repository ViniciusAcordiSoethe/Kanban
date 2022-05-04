<script>
</script>

<template>
    <section id="kanbanGrande">
        <h1>Kanban</h1>
       <div id="kanbanPrincipal">

          <div class="kanbanColuna">
              <h1>a Fazer</h1>
              <div class="card">
                Card 1 
                <br>
                <p>COnteudo</p>
                <button>Proximo</button>
              </div>
              <div class="card">
                Card 2 
                <br>
                <p>COnteudo</p>
                <button>Proximo</button>
              </div>
          </div>
          <div class="kanbanColuna">
              <h1>Feito</h1>
              <div class="card">
                Card 1 
                <br>
                <p>COnteudo</p>
                <button>Anterior</button>
              </div>
              <div class="card">
                Card 2 
                <br>
                <p>COnteudo</p>
                <button>Anterior</button>
              </div>
          </div>
       </div>
    </section>
</template>

<style>
body , h1 ,html{
  margin : 0px;
}
#kanbanGrande{
  background-color: aqua;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#kanbanPrincipal{
  border: solid black;
  background-color: blueviolet;
  display: flex;
  padding: 10px;
  justify-content: space-around;
  width: 80%;
  height: 40vh;
}
.kanbanColuna{
  border: solid black;
  width: 45%;
  text-align: center;
}
.card{
  border: solid black;
  margin: 0px 50px 5px 50px;
}
</style>
