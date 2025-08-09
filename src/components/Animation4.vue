<script setup>
import { ref, onMounted } from 'vue'

const images = []
const imageFiles = require.context('../assets/treepics', true, /\.(jpe?g|png|gif|svg)$/i)
imageFiles.keys().forEach((key) => {
  const name = key.split('/').pop().split('.')[0]
  images.push({ src: imageFiles(key), name })
})

const index = ref(0)
const prevImage = ref(images[0])
const currentImage = ref(images[0])
const activeLayer = ref(true)

onMounted(() => {
  setInterval(() => {
    prevImage.value = currentImage.value
    index.value = (index.value + 1) % images.length
    currentImage.value = images[index.value]
    activeLayer.value = !activeLayer.value
  }, 6000) // increase if you want a longer pause
})
</script>

<template>
  <div id="cross-fade" class="shadow">
    <!-- Layer 1 -->
    <img
      class="layer"
      :class="activeLayer ? 'fade-in' : 'fade-out'"
      :src="prevImage.src"
      alt=""
    />
    <!-- Layer 2 -->
    <img
      class="layer"
      :class="!activeLayer ? 'fade-in' : 'fade-out'"
      :src="currentImage.src"
      alt=""
    />
    <h5 class="top" style="text-align: center;">
      {{ currentImage.name }}
    </h5>
  </div>
</template>

<style scoped>
#cross-fade {
  position: relative;
  height: 250px;
  width: 200px;
  margin: 10px;
  top: 64px;
  left: 550px;
}

.layer {
  position: absolute;
  height: 250px;
  width: 200px;
  border-radius: 10%;
  filter: sepia(100%);
  border: 2px solid black;
  opacity: 0;
  transition: opacity 2.5s ease-in-out;
}

.fade-in {
  opacity: 1;
  z-index: 1;
}

.fade-out {
  opacity: 0;
  z-index: 0;
}

h5 {
  position: absolute;
  font-family: Decker;
  font-size: 1.525em;
  color: #006600;
  text-shadow: 1px 1px 7px rgba(0, 178, 0, 0.8);
  letter-spacing: 2px;
  margin: 2px;
  left: -20px;
  top: 260px;
  width: 250px;
}
</style>