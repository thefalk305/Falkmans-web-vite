<script setup>
import { onMounted } from 'vue';
import { setupMagnifier } from '@/assets/js/magnifier.js';

const   resolveImageUrl = (filename) =>
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
  <div id="heading">

  <div class="heading-row">
    <h1>H.M.S. Britannic</h1>

    <label class="heading-checkbox">
      <input type="checkbox" id="mag-checkbox" class="myCheckbox" @click="showMag" />
      Enable Mag
    </label>

    <input type="text" id="mag" class="myMag" placeholder="Mag Value (2)" />
  </div>

    <p class="dropcap" >This is the ship that Nils Falkman sailed on from Liverpool to America (New York City).
    </p>

  <div class="img-magnifier-container" >
    <img id="myimage" 
    :src="resolveImageUrl('brit1.jpg')" width="401" 
    height="266" />

  </div>
    <p >H.M.S. Britannic. From Liverpool To New York city, direct.</p>
    <AppLink 
      to="/BratannicPL"
      style="position: relative; left: -220px; top: 1373px; width: 236px; height: 24px;  
      background-color: rgba(255, 255, 0, 0.1)">
    </AppLink>
    <img 
    :src="resolveImageUrl('brit2.jpg')" style="width: 680px; height: 2878px" alt="SS Romeo" />

  </div>
  <BackToTop />
</template>
