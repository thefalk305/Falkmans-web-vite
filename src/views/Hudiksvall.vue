<script setup>
import BackToTop from "@/components/BackToTop.vue";
import MiniNav from "@/components/MiniNav.vue";
const resolveImageUrl = (filename) =>
  new URL(`../assets/img/${filename}`, import.meta.url).href;
</script>

<template>
  <div id="hudiksvall">
    <!-- <MiniNav /> -->
    <h1 >Hudiksvall, Sweden</h1>

  <div style="display: flex; align-items: center; gap: 60px;">
    <img  style="width: 30%; height: auto;" :src="resolveImageUrl('hudiksvall-1.jpg')" alt="Old Hudiksvall" class="responsive-img">
    <p >&#9664◄ A couple of old photos from Hudiksvall's passed.
    <br><br> Aerial view of modern day Hudiksvall, with it's harbor. ►&#9654
    </p>
    <img :src="resolveImageUrl('PresentHudiksvall.jpg')" alt="Hudiksvall now"  class="responsive-img">
  </div>


  <p id="heading" >Welcome to Hudiksvall, Sweden. It is from here that Nils P. Falkman left to 
  come to Amerika.</p>
  <b>Hudiksvall circa 1890</b>
  <p>Hudiksvall, a coastal town in Gävleborg County, Sweden, 
  played a modest but meaningful role in the broader wave of Swedish emigration during the late 
  19th century. Around 1890, Sweden was experiencing one of its peak emigration periods, with 
  many citizens—especially from rural and economically challenged areas—leaving for North America 
  in search of better opportunities. It is here in Hudiksvall that Nils Peter Falkman met Corine Norín.
  Nils had come to Hudiksvall to learn a trade. That of a Cobler. While Corine came to learn to be 
  a seamstress. It must of been here that they made a pack to travel to America and meet up.</p>
  <b>Here's what's known about Hudiksvall in that context:</b>

  <p>🌍 <b>Regional Emigration Trends:</b>
  Gävleborg County, where Hudiksvall is located, saw significant emigration, particularly from 
  inland parishes and smaller towns. The Household Clerical Surveys (1880-1893) and church records 
  from Hudiksvall document individuals and families preparing to emigrate, often listing destinations 
  like the United States or Canada.</p> 

  <p>📦 <b>Reasons for Emigration Economic hardship:</b> Many Swedes faced limited
  land access, low wages, and agricultural challenges. Religious freedom: Some emigrants were 
  affiliated with movements like the Swedish Mission Covenant Church, which had strong emigration 
  ties during the 1880s.<br>
  <b>Social mobility:</b> Young, unmarried individuals (especially women) left to work as domestic 
  servants in American cities.<br>
  <b>Departure and Records:</b> While Hudiksvall wasn't a major port of departure, emigrants from the area typically traveled to 
  Gothenburg or Malmö, where passenger lists were recorded. These lists, along with passport journals
  and parish extracts, are valuable for tracing emigrants from Hudiksvall during this era.</p>

  <p>📉 <b>Shift After 1890:</b> Emigration from Sweden began to decline after 1890, 
  as industrialization improved domestic conditions and return migration increased. If you're 
  researching a specific family or individual from Hudiksvall, I can help you dig into parish 
  records, passenger lists, or even surname distributions from that time. Want to explore that next?</p>  </div>
  <BackToTop />
</template>


 <style>

h1, h2 {
  text-align: center;
}
p b {
  text-indent: 1em;
  text-align: justify;
}

h1 {
  font-weight: bold;
}

.responsive-img {
  /* padding: 80px 0; */
  max-width: 30%;
  height: 233px;
}

b {
  font-weight: bolder;
}

#heading {
  text-align: center;
}
</style>
 
