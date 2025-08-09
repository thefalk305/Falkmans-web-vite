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
    <h1 align="center">S.S. Romeo Passenger List</h1>
    <div id="content">
      <p style="text-align: center">
        <img border="0" src="@/assets/img/RomeoPassList.png" width="902" height="1378">
        <b style="color:fuchsia"><center>Near the top of this page is where you'll find N.P. Falkman.</center></b>
      </p>
      <p style="text-align: center">
        <div style="position: relative; left: 222px; top: 494px; width: 240px; height: 24px;
        display: block; 
        background-color: rgba(255, 0, 0, 0.2);">
        </div>
        <img border="0" src="@/assets/img/RomeoPassList2.png" width="910" height="1292">
      </p>
    </div>
  </div>
  <BackToTop />
</template>
