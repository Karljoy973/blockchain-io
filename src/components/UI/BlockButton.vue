<template>
    <!-- <div class="container">
    </div> -->
            <button >{{ props.content }} </button>  
</template>
<style scoped> 
button {
  min-width: fit-content; 
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


</style>

<script lang="ts" setup>
const props = defineProps({
    content: String,
})
</script>