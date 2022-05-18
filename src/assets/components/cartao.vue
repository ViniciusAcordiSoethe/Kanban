<script>
export default {
  props: {
    card: { type: Object },
    idconteudo: { type: String }
  },
  emits: ['scragbadum']
}
</script>
<template>
  <div class="card">
    {{ card.nome }}
    <br />
    <p>{{ card.cont }}</p>
    <div v-if="idconteudo == 'afazer'">
      <button @click="$emit('scragbadum', card.id, idconteudo)">Proximo</button>
    </div>
    <div v-else>
      <button @click="$emit('scragbadum', card.id, idconteudo)">Voltar</button>
    </div>
  </div>
</template>
<style scoped>
button {
  margin-bottom: 5px;
  background-color: rgb(80, 160, 80);
  border-radius: 5px;
  color: white;
  font-weight: bolder;
  border: none;
  width: 50%;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  transform: translateY(-3px);
  background-color: rgb(57, 133, 57);
}

.card {
  background-color: rgb(75, 75, 75);
  border-radius: 5px;
  margin: 0px 50px 5px 50px;
}
</style>