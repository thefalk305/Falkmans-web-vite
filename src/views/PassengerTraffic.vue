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
  <div id="passengertraffic">
    <MiniNav />
    <div id="topmenu">
      <h1>The Immigrants Journey</h1>
    </div>

    &nbsp;
    <p align="center">
      <img border="0" src="@/assets/img/PassTraf.jpg" width="736" height="478" />
    </p>

    <p align="center">
      The majority of Swedish emigrants after late 1880's travelled by boat from G�teborg
      to Hull and then by train to Liverpool from which the journey continued with the big
      transatlantic passenger steamers. This is the route that my great grand-father, Nils
      P. Falkman took when he left Sweden. Headed to America.&nbsp; My great-grandmother
      on the other hand, travelled from Arbr�, to G�teborg. And then boarded a boat to
      Hamburg, Germany. And from Homburg, by train to Bremen. And it was from Bremen that
      she sailed to America.
    </p>
  </div>
  <BackToTop />
</template>
