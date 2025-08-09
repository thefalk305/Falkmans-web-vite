<!-- prettier-ignore-file -->
<script setup>
  import Modal from "./Modal.vue";
  import { ref } from "vue";
  import FamilyPage from "../views/FamilyPage.vue";
  import InfoPage from "../views/InfoPage.vue";
  const props = defineProps({
    recordData: Object,
    id: Number,
    fromDaBoys: Boolean,
    modalTop: Number

  });

  const showInfoPage = ref(false);

  $(document).ready(function () {
    var images = [];
    images = $("img");
    var i = 1;
  });
</script>

<template>
  <div @click="showInfoPage = true">
    <div
      class="desc imagecontainer"
      :class="id === 0 ? 'rightslide' : id === 1 ? 'leftslide' : 'upslide'"
      style="color: rgba(105, 248, 105, 0.6)"
    >
      {{ recordData.name }}
      <br /><br />
      {{ recordData.born_died }}
      <p>
        Origins:<br />
        {{ recordData.birthplace }}
      </p>
      <!-- </a> -->
    </div>
  </div>

  <Teleport to="body" :disabled="false">
    <!-- use the modal component, pass in the prop -->
    <FamilyPage 
    :show="showInfoPage" 
    @close="showInfoPage = false" 
    :id="recordData.id"       
    :fromDaBoys="fromDaBoys" 
    :modalTop="modalTop"   
/>
  </Teleport>
</template>

<style scoped>
  .desc:hover {
    color: aquamarine;
  }
  .modal-button:hover {
    scale: 1.1;
    background-color: rgba(167, 253, 167, 0.9);
    border-radius: 10px;
  }
</style>
