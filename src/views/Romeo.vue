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

  const pageTitle = "S.S. Romeo"
</script>

<template>
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
    This is the ship that Nils P. Falkman sailed on from G teborg to Hull, England.<br />
    The highlighted text will take you to the ship’s manifest.
    </p>

    <div class="img-magnifier-container">
      <img class="magImage"
      :src="resolveImageUrl('romeo.jpg')" 
      style="width: 910px;" alt="SS Romeo" />
    </div>

    <AppLink 
      to="/RomeoList"
      style="position: absolute; left: 707px; top: 752px; width: 140px; height: 20px;
      display: block; 
      background-color: rgba(255, 0, 0, 0.0);">
    </AppLink>

  </div>
</template>
