<script setup>
  import { ref, watch } from 'vue';
  import {
    toggleMagnifier,
    defaultMagConfig
  } from '@/assets/js/magnifier.js';

  const resolveImageUrl = (filename) =>
    new URL(`../assets/img/${filename}`, import.meta.url).href;

  const magEnabled = ref(false);

  watch(magEnabled, (enabled) => {
    toggleMagnifier(enabled, defaultMagConfig);
  });
    const pageTitle = "H.M.S. Britannic"

</script>

<template>
  <!-- Inserts the common header -->
  <div id="heading">

    <div class="heading-row">
      <h1>{{pageTitle}}</h1>

      <label class="heading-checkbox">
        <input
          type="checkbox"
          id="mag-checkbox"
          class="myCheckbox"
          v-model="magEnabled"
        />
        Enable Mag
      </label>

      <input
        type="text"
        id="mag"
        class="myMag"
        placeholder="Mag Value (2)"
        v-show="magEnabled"
      />
    </div>

    <p class="dropcap" >This is the ship that Nils Falkman sailed on from Liverpool to America (New York City).
    </p>

    <div class="img-magnifier-container" >
      <img class="magImage" 
      :src="resolveImageUrl('brit1.jpg')" width="401" 
      height="266" />
    </div>
    <p >H.M.S. Britannic. From Liverpool To New York city, direct.</p>
    <AppLink 
      to="/BritannicPL"
      style="position: relative; left: -220px; top: 1373px; width: 236px; height: 24px;  
      background-color: rgba(255, 255, 0, 0.1); z-index: 9999;"> 
    </AppLink>

    <div class="img-magnifier-container" >
      <img class="magImage" 
      :src="resolveImageUrl('brit2.jpg')" style="width: 680px; height: 2878px" alt="SS Romeo" />
    </div>

  </div>
</template>
