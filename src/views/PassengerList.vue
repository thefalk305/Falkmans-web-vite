<script>
import BackToTop from "@/components/BackToTop.vue";
// import MiniNav from "@/components/MiniNav.vue";

export default {
  components: {
    BackToTop,
    // MiniNav,
  },
};
</script>

<template>
  <div id="passengerlist">
    <div id="content" style="width: 440; height: 2778">
      <p style="text-align: center">
        <img border="0" src="@/assets/img/britpasslist1.jpg" width="902" height="1378" />
        <b style="color: fuchsia"></b>
      </p>
      <center>
        <b style="color: fuchsia"
          >At the bottom of the page is where you'll find N.P. Falkman.</b
        >
      </center>
      <p style="text-align: center">
        <img border="0" src="@/assets/img/britpasslist2.jpg" width="910" height="1292" />
      </p>
      <h2 style="text-align: center">

    <AppLink 
      to="/Britannic"
      style="position: absolute; left: 488px; top:32px; width: 140px; height: 20px;
      display: block; 
      background-color: rgba(255, 0, 0, 0.5);">
    </AppLink>


        <!-- <a href="http://falkman.com/britannic.html">Return</a> -->
      </h2>
      <p style="text-align: center">&nbsp;</p>
    </div>
  </div>
  <BackToTop />
</template>
