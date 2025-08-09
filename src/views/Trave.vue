<script>
  import BackToTop from "@/components/BackToTop.vue";
  import MiniNav from "@/components/MiniNav.vue";

  export default {
    components: {
      BackToTop,
      MiniNav,
    },
  };
</script>

<template>
  <div class="transportation">
    <MiniNav />
    <h1 align="center">S.S. Trave</h1>
    <p class="dropcap">
      This is the ship that Karin traveled on from Bremen, Germany to America (New York
      city).
    </p>
    <p align="center">
      <img border="0" src="@/assets/img/trave.jpg" width="411" height="275" />
    </p>
    <p align="center">SS Trave. From Bremen To New York, via South Hampton.</p>
  </div>
  <BackToTop />
</template>
