<script setup>
  import Modal from "./Modal.vue";
  import { ref } from "vue";
  import HeadstoneGame from "@/components/HeadstoneGame.vue";

  const props = defineProps({
    stone: String,
    headstones: Array,
    totalScore: Number,
  });

  const resolveImageUrl = (filename) =>
  new URL(`../assets/img/headstones/${filename}`, import.meta.url).href;


  const showHeadstoneGame = ref(false);
  defineEmits(["update:totalScore"]);

  $(document).ready(function () {
    var images = [];
    images = $("img");
    var i = 1;
  });
  // console.log(props.stone);
</script>

<template>
  <div @click="showHeadstoneGame = true">
    <img
      :src="resolveImageUrl(stone)"
      style="filter: blur(8px) sepia(1)"
      alt="photo"
    />
  </div>

  <Teleport to="body" :disabled="false">
    <!-- use the modal component, pass in the prop -->
    <HeadstoneGame
      :show="showHeadstoneGame"
      @close="showHeadstoneGame = false"
      :stone="stone"
      :headstones="headstones"
    />
  </Teleport>
</template>

<style scoped>
  .modal-button:hover {
    scale: 1.1;
    background-color: rgba(167, 253, 167, 0.9);
    border-radius: 10px;
  }
  img:hover {
    transition: 0.8s;
    scale: 1.2;
    transition-timing-function: ease;
  }

  img {
    width: 350px;
    transition: all 1s ease;
  }
</style>
