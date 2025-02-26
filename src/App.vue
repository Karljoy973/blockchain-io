<script setup lang="ts">
import { reactive, ref, type Reactive } from 'vue';
import hashObject from 'hash-object'
import BlockComponent from './components/UI/BlockComponent.vue';


let currentValue = ref('')
let currentHash = ref('')
let blocks = reactive([{
  hash: "", 
  value: '', 
  id: '', 
  state: 'InCreation'
}]); 
const newBlock = () => {
  blocks.push({
    hash: currentHash.value , 
  value: currentValue.value, 
    id: `${blocks.length}`, 
  state: 'InCreation'
  })
    currentValue.value =''
}
const validateBlock = () => {
  blocks[blocks.length -1].hash = hashObject([{...currentHash, date: Date.now()}]), 
  blocks[blocks.length -1].state = 'Validated'
}
let blockStatus = true;

</script>

<template>
  <main>
    <span>
      
      <div class="block"   v-for="block in blocks">
        <block-component :value="block.value" :state="block.state"/>
      </div>
      <div class="container">
        <button @click="newBlock">new block</button>  
      </div>
    </span>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  /* background-color : #DA9C9C */
}
span{
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.block {
  width: 30vw; 
  height: 40vh;
  margin: 10px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  border-color: #2e0505;
  border-width: 2px;
  border-style: ridge;

  background-color: #f1e6e6;


  font-family: 'Bradley Hand', cursive;
}
.block > * {
  width: 100%; 
  padding: 5px;
}
button {
  width: 2em; 
  height: 3rem;
  border-radius: 10px;

  font-family: 'Bradley Hand', cursive;
  font-size: x-large;

  color:#8d4747;
  background-color:#f1e6e6;
}
button:hover {
  color: #f1e6e6;
  background-color: rgb(104, 46, 46);
}
.container {
  width :70%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container> * {
  width: 80%;
}

</style>
