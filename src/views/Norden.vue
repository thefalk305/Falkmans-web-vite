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
    const pageTitle = "S. S. Norden"

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
    <p class="dropcap">
      The Norden is the ship that Karin Noren traveled on from G�teborg to Hamburg, Germany.
    </p>


    <div class="img-magnifier-container" >
      <img class="magImage" 
      :src="resolveImageUrl('SSNorden.jpg')" 
      width="865" height="545" />
    </div> 

    <p align="center">SS Norden from G�teborg, Sweden to Hamburg, Germany.</p>
  </div>
  <BackToTop />
</template>
