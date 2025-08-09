<script setup>
import { ref } from "vue";
import HeadstoneGame from "@/components/HeadstoneGame.vue";

const props = defineProps({
  stone: String,
  headstones: Array,
  updateScore: Function,
  removeImage: Function,
  totalScore: Number,
  id: String
});

const resolveImageUrl = (filename) =>
  new URL(`../assets/img/headstones/${filename}`, import.meta.url).href;

const showHeadstoneGame = ref(false);
</script>

<template>
  <div @click="showHeadstoneGame = true">
    <img
      :src="resolveImageUrl(stone)"
      style="filter: blur(4px) sepia(1)"
      alt="headstone"
    />
  </div>
<Teleport to="body">
  <HeadstoneGame
    :updateScore="props.updateScore"
    :show="showHeadstoneGame"
    :stone="stone"
    :headstones="headstones"
    :totalScore="totalScore"
    :id="id"
    @close="(res) => {
      showHeadstoneGame = false;
      if (res?.correct) props.removeImage(res.stone)
    }"
    :key="stone"
  />
</Teleport>
  <!-- <Teleport to="body">
    <HeadstoneGame
      :updateScore="props.updateScore"
      :show="showHeadstoneGame"
      @close="(res) => {
        showHeadstoneGame = false;
        if (res?.correct) {
          props.removeImage(res.stone);
        }
      }"
      :stone="stone"
      :headstones="headstones"
      :totalScore="totalScore"
      :id="id"
    />
  </Teleport> -->
</template>

<style scoped>
div {
  height: 286px;
  padding: 20px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 100%;
  height: 154px;
  filter: sepia(100%);
  margin: 5px;
  border: solid 4px black;
  border-radius: 32px;
}
img:hover {
  scale: 1.25;
}
</style>