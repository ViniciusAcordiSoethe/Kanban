<template>
    <nav>
      <Router-link class="item" :to="{name: 'home'}">Home</Router-link>
      <Router-link class="item" :to="{name: 'sobre'}">Sobre</Router-link>
    </nav>
  <Router-view />
</template>
<style scoped>
nav{
  display: flex;
  text-decoration: none;
  justify-content: center;
  background-color: black;
}
.item{
  margin-right: 10px;
  border: 1px solid black;
  text-decoration: none;
  color:white;
}
.item:hover{
 background-color: gray;
}
</style>

