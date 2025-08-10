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
  const pageTitle = "Britannic Passenger List"
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
          v-model="magEnabled"/>Enable Mag
      </label>

      <input
        type="text"
        id="mag"
        class="myMag"
        placeholder="Mag Value (2)"
        v-show="magEnabled"/>
    </div>

    <p style="color: fuchsia; font-weight: bolder; text-align: center">
      At the bottom of the page is where you'll find N.P. Falkman.
    </p>

    <div class="img-magnifier-container">
      <img
        class="magImage"
        :src="resolveImageUrl('britpasslist1.jpg')"
        style="display: block; margin: 0 auto;"
        width="902"
        height="1378"
      />
    </div>

    <div class="img-magnifier-container">
      <img
        class="magImage"
        :src="resolveImageUrl('britpasslist2.jpg')"
        style="display: block; margin: 0 auto;"
        width="910"
        height="1292"
      />
    </div>
  </div>
</template>