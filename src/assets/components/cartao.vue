<script>
export default{
    props:{
        card:{type:Object}
    },
    emits:['scragbadum']
}
</script>
<template>
    <div class="card" >
          {{card.nome}}
          <br />
          <p>{{card.cont}}</p>
          <button @click="$emit('scragbadum' , card.id)">Proximo</button>
        </div>
</template>