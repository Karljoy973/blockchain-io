<script setup lang="ts">
import { reactive, ref } from 'vue';
import hashObject from 'hash-object'

//icVariable 

//vVariable 

let currentValue = ref('')
let currentHash =ref('')
type Block = {
  hash: string, 
  value: String, 
  id: number, 
  state: 'inCreation' | 'validated'
}
let blocks : Block[]= reactive([{
  hash: "", 
  value: '', 
  id: 0, 
  state: 'inCreation'
}]); 
const newBlock = () => {
  blocks.push({
    hash: currentHash.value , 
  value: currentValue.value, 
    id: blocks.length, 
  state: 'inCreation'
  })
    currentValue.value =''
}
const validateBlock = () => {
  blocks[blocks.length -1].hash = hashObject([currentHash]), 
  blocks[blocks.length -1].state = 'validated'
}
let blockStatus = true;

</script>

<template>
  <main>
    <span>
      <div class="block"  :key="block.id" v-for="block in blocks">
        <div class="wrapper" v-if="block.state == 'inCreation'">
          <p> id: {{ block.id }}</p>
          Block
          <div class="container">
            hash
            <input type="text" readonly="true" :placeholder="block.hash" v-model="currentHash">
          </div>
          <div class="container">
            value
            <input type="text" v-model="currentValue" >
          </div>
          <div class="container">
            <button  @click="validateBlock">Validate block</button>  
          </div>
        </div>
        <div class="wrapper" v-if="block.state == 'validated'">
          <p> id: {{ block.id }}</p>
          Block
          <div class="container">
            hash
            <input type="text" readonly="true" :placeholder="block.hash" v-model="currentHash">
          </div>
          <div class="container">
            value
            <input type="text" v-model="currentValue" >
          </div>
          <div class="container">
            <button  @click="validateBlock">Validate block</button>  
          </div>
        </div>
      
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
}
span{
  height: fit-content;
  display: flex;
  flex-direction: column;

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
  border-color: black;
  border-width: 2px;
  border-style: ridge;
}
.block > * {
  width: 100%; 
  padding: 5px;
}
.container> * {
  width: 90%;
}
</style>
