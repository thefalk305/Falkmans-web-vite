<!-- prettier-ignore-file -->
<!-- prettier-ignore-file -->
<script setup>
  import Modal from "./Modal.vue";
  import { ref } from "vue";


const { recordData, modalTop, fromDaBoys } = defineProps({
  recordData: Object,
  modalTop: Number,
  fromDaBoys: Boolean 
});

console.log(modalTop)
  const showModal = ref(false);
</script>

<template>
  <div id="ShowModal"  v-if="recordData">
    <button class="modal-button" @click="showModal = true">
      {{ recordData.name }}
    </button>

    <Teleport to="body">
      <Modal 
      :show="showModal" 
      @close="showModal = false" 
      :recordData="recordData"
      :modalTop="modalTop"
      :fromDaBoys="fromDaBoys" 
      >
        <template #header></template>
      </Modal>
    </Teleport>
  </div>
</template>

<style>
  #show-modal {
    position: relative;
    width: 200px;
  }
  .modal-button {
    border: none;
    width: 200px;
  }
  .modal-button:hover {
    scale: 1.1;
    background-color: rgba(167, 253, 167, 0.9);
    border-radius: 10px;
  }
</style>