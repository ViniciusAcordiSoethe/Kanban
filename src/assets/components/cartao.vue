<script>
export default{
    props:{
        card:{type:Object},
        idconteudo:{type:String}
    },
    emits:['scragbadum']
}
</script>
<template>
    <div class="card" >
          {{card.nome}}
          <br />
          <p>{{card.cont}}</p>
          <div v-if="idconteudo == 'afazer'">
            <button @click="$emit('scragbadum' , card.id , idconteudo)">Proximo</button>
          </div>
          <div v-else>
              <button @click="$emit('scragbadum' , card.id , idconteudo)">Voltar</button>
          </div>
        </div>
</template>
<style scoped>
button{
    margin-bottom: 5px;
}
.card {
  border: solid black;
  margin: 0px 50px 5px 50px;
}
</style>