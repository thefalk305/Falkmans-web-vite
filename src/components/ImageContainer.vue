<!-- prettier-ignore-file -->
<script setup>
  import { reactive, ref } from "vue";
  import Relatives from "./Relatives.vue";
  import ImageCont from "./ImageCont.vue";

  const props = defineProps({
    recordData: Object,
    infoTable: Array,
    fromDaBoys: Boolean,
  });
</script>

<template>
  <div id="image-container">
    <ImageCont :recordData="recordData" :fromDaBoys="fromDaBoys" />
  </div>
</template>

<style>
  Relatives {
    width: 200px;
  }
  #image-container {
    width: 200px;
    height: 174px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;
  }
</style>
