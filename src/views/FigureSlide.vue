<script setup>
  import { ref, watch, inject } from "vue";
  import ShowModal from "@/components/ShowModal.vue";

  const resolveImageUrl = (filename) =>
  new URL(`../assets/img/${filename}`, import.meta.url).href;

  var recordData = [];
  var infoTable = [];

  const photos = [
    "Frank Alexander Jr",
    "Ida (Aldolfina) Chytra",
    "Violet Alexander",
    "Helen K Alexander",
    "Frank J Alexander",
  ];



  infoTable = inject("infoTable");
  for (var i = 0; i < photos.length; i++) {
    for (var j = 0; j < infoTable.length; j++) {
      if (photos[i] === infoTable[j].name) {
        recordData.push(infoTable[j]);
        break;
      }
    }
  }
console.log(resolveImageUrl(photos[0] + '.jpg'));

  const photo = recordData[0]; // Assuming you want to display the first photo's data

</script>

<template>
    <h2 class="figure-title">Allen B Falkman Sr</h2>
  <figure class="figure-card">

    <img :src="resolveImageUrl(photos[0] + '.jpg')" alt="AL Falkman Sr" />
    <figcaption>
      <h2>Allen B Falkman Sr</h2>
      <h3>Born 1918</h3>
      <p>
        This bio for Allen B. Falkman Sr. will be updated soon.
      </p>
    </figcaption>
  </figure>
    <ShowModal :recordData="recordData[0]" />

</template>



<style scoped>

.figure-title {
  width: 250px;
  margin: auto;
  padding: 10px;
  font-size: 22px;
  color: #fff;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid #666;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 102, 0, 0.8);

}

.figure-card {
  display: flex;
  align-items: center;
  position: relative;
  width: 250px;
  height: 350px;
  margin: 20px auto;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #000;
  color: white;
  font-family: sans-serif;
}

/* Image styling with slide-out */
.figure-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

/* Caption initially off-screen to the left */
.figure-card figcaption {
  position: absolute;
  top: 0;
  left: -100%;
  width: 90%;
  height: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.85);
  transition: left 0.6s ease;
  z-index: 2;
}

/* On hover: image slides out, caption slides in */
.figure-card:hover img {
  transform: translateX(-100%);
}

.figure-card:hover figcaption {
  left: 0;
}

.figure-card h2 {
  margin: 10% 0;
  font-size: 24px;
    color: #888;

}

.figure-card h3 {
  margin: 10% 0;
  font-size: 16px;
  color: #aaa;
}

.figure-card p {
  margin-top: 20%;
  font-size: 14px;
  line-height: 1.4;
  color: #fff;
}
</style>