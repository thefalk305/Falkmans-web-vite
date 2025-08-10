<script setup>
import { ref, watch, onMounted } from 'vue';
import {
  setupMagnifier,
  toggleMagnifier,
  defaultMagConfig
} from '@/assets/js/magnifier.js';

const magEnabled = ref(false);
const pageTitle = "S.S. Samaria Passenger List";

// Watch for toggle changes
watch(magEnabled, (enabled) => {
  toggleMagnifier(enabled, defaultMagConfig);
});

// Optional: resolve image path dynamically
const resolveImageUrl = (filename) =>
  new URL(`../assets/img/${filename}`, import.meta.url).href;

// Attach magnifier after DOM is ready
onMounted(() => {
  toggleMagnifier(magEnabled.value, defaultMagConfig);
});
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
    <p>Below are the passenger lists from the S.S. Samaria</p>

    <div class="img-magnifier-container" >
    <!-- <div class="img-magnifier-container" style="width: 80%"> -->
      <img class="magImage" 
      :src="resolveImageUrl('SamariaList1.jpg')" alt="Samaria List"  style="width: 910px">
    </div>

    <div id="content">

    <p><b style="color: fuchsia">You'll find Ingred and her children 
      about eleven lines down the page.
    </b></p>


    <!-- <div class="img-magnifier-container" style="width: 80%"> -->
    <div class="img-magnifier-container" >
      <img class="magImage" 
      :src="resolveImageUrl('SamariaList2.jpg')" alt="Samaria List" style="width: 910px">
    </div>

    <p><b style="color: fuchsia">You'll find Ingred and her children 
      about eleven lines down the page.
    </b></p>

  </div>
  </div>
 <!-- Inserts the common footer -->
  <div id="footer"></div>
</template>