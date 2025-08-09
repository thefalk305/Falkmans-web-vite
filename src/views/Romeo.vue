<script>
import BackToTop from "@/components/BackToTop.vue";
import MiniNav from "@/components/MiniNav.vue";
import RomeoList from "@/views/RomeoList.vue"; 

export default {
  viewes: {
    RomeoList
  },
  components: {
    BackToTop,
    MiniNav,
  },
};
</script>

<template>
  <div class="transportation">
    <MiniNav />
    <h1 align="center">S.S. Romeo</h1>
    <div id="content">
<div style="display: flex; justify-content: center;">
  <p class="dropcap" style="max-width: 800px;">
    This is the ship that Nils P. Falkman sailed on from G teborg to Hull, England.<br />
    The highlighted text will take you to the ship’s manifest.
  </p>
</div><div style="display: flex; justify-content: center; position: relative;">
  <div style="position: relative; display: inline-block;">
    <img src="@/assets/img/romeo.jpg" style="width: 910px;" alt="SS Romeo" />
    <AppLink 
      to="/RomeoList"
      style="position: absolute; left: 707px; top: 752px; width: 140px; height: 20px;
      display: block; 
      background-color: rgba(255, 0, 0, 0.0);">
    </AppLink>
  </div>
</div>
    </div>
  </div>
  <BackToTop />
</template>
