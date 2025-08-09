<script setup>
import { ref, onMounted } from 'vue';
import { setupMagnifier } from '@/assets/js/magnifier.js';

const resolveImageUrl = (filename) =>
  new URL(`../assets/img/${filename}`, import.meta.url).href;

const useImage2 = ref(false); // tracks which image is selected

function showMag() {
  const magCheckbox = document.getElementById('mag-checkbox');
  const zoomInput = document.getElementById('mag');
  zoomInput.style.display = magCheckbox.checked ? 'inline-block' : 'none';

  if (magCheckbox.checked) {
    setupMagnifier({
      imgID: useImage2.value ? 'myimage2' : 'myimage',
      checkboxID: 'mag-checkbox',
      zoomInputID: 'mag',
    });
  }
}

function selImg() {
  useImage2.value = document.getElementById('img-checkbox').checked;

  const magCheckbox = document.getElementById('mag-checkbox');
  if (magCheckbox.checked) {
    setupMagnifier({
      imgID: useImage2.value ? 'myimage2' : 'myimage',
      checkboxID: 'mag-checkbox',
      zoomInputID: 'mag',
    });
  }
}

onMounted(() => {
  setupMagnifier({
    imgID: 'myimage',
    checkboxID: 'mag-checkbox',
    zoomInputID: 'mag',
  });
});
</script>

<template>
  <!-- Inserts the common header -->
	<div id="heading">

  <div class="heading-row">
    <h1>Britannic Passenger List</h1>

    <label class="heading-checkbox">
      <input type="checkbox" id="mag-checkbox" class="myCheckbox" @click="showMag" />
      Enable Mag
    </label>

    <label class="img-checkbox">
      <input type="checkbox" id="img-checkbox" class="myCheckbox" @click="selImg" />
      Img 2
    </label>

    <input type="text" id="mag" class="myMag" placeholder="Mag Value (2)" />
  </div>
		
  <div class="img-magnifier-container" >
		<img  id="myimage"
		:src="resolveImageUrl('britpasslist1.jpg')" 
		style="display: block; margin: 0 auto;" width="902" height="1378" />
	</div>

  <div class="img-magnifier-container" >
		<img id="myimage2"
		:src="resolveImageUrl('britpasslist2.jpg')" 
		style="display: block; margin: 0 auto;" width="910" height="1292" />
	</div>
	<p style="color: fuchsia;  font-weight: bolder; text-align: center"  >At the bottom of the page is where you'll find N.P. Falkman.</p>


</div>
</template>

