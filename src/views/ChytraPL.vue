<script setup>
import { onMounted } from 'vue';
import { setupMagnifier } from '@/assets/js/magnifier.js'; // Adjust path if needed

const resolveImageUrl = (filename) =>
  new URL(`../assets/img/${filename}`, import.meta.url).href;

function showMag() {
  var checkbox = document.querySelector(".myCheckbox");
  var mag = document.querySelector("#mag");
  if (checkbox.checked) {
    mag.style.display = "block";
  } else {
    mag.style.display = "none";
  }
}

onMounted(() => {
  setupMagnifier();
});
</script>

<template>
  <!-- Inserts the common header -->
  <div id="header"></div>

  <div class="heading-row">
    <h1>Carmania Passenger List</h1>

    <label class="heading-checkbox">
      <input type="checkbox" id="mag-checkbox" class="myCheckbox" @click="showMag" />
      Enable Mag
    </label>

    <input type="text" id="mag" class="myMag" placeholder="Mag Value (2)" />
  </div>

  <p>Mouse over the image — Adolfina Chytra on line 6</p>

  <div class="img-magnifier-container">
    <img id="myimage"  
      :src="resolveImageUrl('ChytraPassList.png')"
      width="902"
      height="1378"/>
  </div>

  <p style="color: blue">
    Feel free to change the strength of the magnifier glass when initiating the
    magnify function.
  </p>

  <!-- Insert the common footer -->
  <div id="footer"></div>
</template>

<style>
/* .img-magnifier-glass {
  position: absolute;
  border: 3px solid #000;
  border-radius: 50%;
  cursor: none;
  width: 100px;
  height: 100px;
  display: none;
  pointer-events: none;
  z-index: 1000;
} */
</style>