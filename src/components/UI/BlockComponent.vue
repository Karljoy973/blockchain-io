<template>
    <div class="wrapper">
          <p> id: {{ blockId }}</p>
          <h2>Block</h2>
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
            <input type="text" v-model="currentValue" :disabled="blockState " >
          </div>
          
          <block-button @click="validateBlock" :disabled="blockState" :content="buttonContent"></block-button>
        </div>
</template>
<script setup lang="ts">
import hashObject from 'hash-object';
import { onMounted, onUpdated, ref, watch } from 'vue';
import BlockButton from './BlockButton.vue';
import {v7 as uuidv7} from 'uuid'

const props = defineProps({
  toSeal: Boolean
})


let blockState  = ref(false)

let currentValue = ref('')
let currentHash = ref();


let buttonContent = ref('Seal the Block')

const validateBlock = ()=> blockState.value = true
onMounted(() => { currentHash = ref(hashObject([currentValue, Date.now()])) })
onUpdated(() => {

  if(props.toSeal) blockState.value = props.toSeal
  if (!blockState.value) {
    currentHash = currentHash.value; 
    buttonContent.value = 'Sealed Block'
  }
  else currentHash = ref(hashObject([currentValue, Date.now()]))
})


let blockId = uuidv7() 

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