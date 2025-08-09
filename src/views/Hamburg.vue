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
  <div id="hamburg">
    <MiniNav />
    <h1 align="center">Hamburg, Germany</h1>
    &nbsp;
    <div align="center">
      <img src="@/assets/img/HamburgPanorama.jpg" style="width: 93% height: 85% " />
      <p align="justify" id="hamburg" class="dropcap">
        Welcome to Hamburg, Germany. Hamburg was one of the many ports through which
        immigrants traveled on their way to American, Canada, and even Australia.In the
        19th century emigration to the United States began. Hamburg was the transitional
        stop for emigrants from the Northern German coastal countries as well as from
        Eastern European countries. During the 19th century mass immigration to the west
        was occurring. In Germany, Bremen had a good reputation as a port of departure
        because its laws forced ship-owners to provide a basic minimum of space and food.
        Until 1850, Bremen was a more popular port than Hamburg. In 1847, the Hamburg
        American Parcel Joint-Stock Company (HAPAG) was founded in Hamburg, which put a
        number of new ships into service. Before this, conditions on the ships were not
        good; there was inadequate food and overcrowded rooms. As many as one-fifth of the
        passengers did not survive the crossing to America. To improve Hamburg's
        reputation as an emigration port, the Senate passed laws to protect emigrants and
        guaranteed sufficient food, space, and medical care on the journey. Conditions
        improved for emigrants in 1870 with the commission of new steamships. While still
        cramped, hygiene was much better than the old sailing ships. Starting in 1895,
        emigrants were segregated based on wealth. The experiences on the ship (and the
        immigration process into the United States) depended on which class of passengers
        an emigrant was a part of: first, second, or steerage. Hamburg became the most
        important emigration port in Germany by 1900. Between 1830 and 1914, more than
        four million people left Europe via Hamburg. By 1914, more than one million
        Eastern European Jews had emigrated to the United States through the port of
        Hamburg. To attract immigrants, the HAPAG set up shipping companies throughout
        Germany and neighboring countries to entice immigrants to come through the port of
        Hamburg. The improved conditions of the ships also improved the port's reputation.
        Clean and hygienic accommodations were built in 1900, called Auswandererhallen, to
        house the increasing emigrants. This attracted even more emigrants to the port of
        Hamburg. Previous to this, barracks were constructed to house the emigrants but
        the conditions were deplorable and disease spread quickly. In addition to clean
        housing, medical exams and disinfections were conducted to ensure that only
        healthy individuals left the port.
      </p>
    </div>
  </div>
  <BackToTop />
</template>

<style>
  #hamburg {
    padding: 30px;
  }
</style>
