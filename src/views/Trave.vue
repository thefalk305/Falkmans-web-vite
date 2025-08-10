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
    const pageTitle = "S.S. Trave"

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
      This is the ship that Karin traveled on from Bremen, Germany to America (New York
      city).
    </p>

    <div class="img-magnifier-container" >
      <img class="magImage" 
      src="@/assets/img/trave.jpg" width="822" height="550" />
    </div>
      <p >SS Trave. From Bremen To New York, via South Hampton.</p>
  </div>
  <BackToTop />
</template>
