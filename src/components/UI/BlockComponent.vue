<template>
    <div class="wrapper">
          <p> id: {{ block.id }}</p>
          Block
          <div class="container">
            <p>
              hash
            </p>
            <span class="hash">
              {{ currentHash }}
            </span>
          </div>
          <div class="container">
            value
            <input type="text" v-model="currentValue" >
          </div>
          <div class="container">
            <button >Validate block {{ blockState }}</button>  
          </div>
        </div>
</template>
<script setup lang="ts">
import type { Block, BlockState } from '@/types';
import hashObject from 'hash-object';
import { onMounted, onUpdated, ref } from 'vue';

const props = defineProps({
    value: {type : String, required: true}, 
    state: String
})

let blockState: BlockState = 'InCreation'

let currentValue = ref('')
let currentHash = ref();

onMounted(() => { currentHash = ref(hashObject([currentValue, Date.now])) })
onUpdated(() => { currentHash = ref(hashObject([currentValue, Date.now])) })


let block : Block = {
    id: '', 
    hash: '', 
    state: 'InCreation', 
    value: ''
}


</script>
<style scoped>

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

}
.wrapper> * {
  margin: 10px;
}
.container {
  width :70%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container > p {
  width: fit-content;
  margin: 10px
}
.container> * {
  width: 80%;
}
input {
  height: 110%;
  margin-left: 10px;

}
.hash {
  overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
 width: 100%;
 display: inline-block;
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
button:disabled:hover {
  color:#8d4747;
  background-color:#f1e6e6;
}
button:hover {
  color: #f1e6e6;
  background-color: rgb(104, 46, 46);
}


input {
  min-width: 90%;
}</style>