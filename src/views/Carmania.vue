<script setup>
import BackToTop from "@/components/BackToTop.vue";
const   resolveImageUrl = (filename) =>
  new URL(`../assets/img/${filename}`, import.meta.url).href;

</script>

<template>
<div id="heading">

   <h1 >R.M.S. Carmania</h1>
   <p>This is the ship that Adolfina Chytra traveled on from Liverpool, England to America (New York city).</p>
  <img border="0" :src="resolveImageUrl('SSCarmania.jpg')" width="411" height="275">
  <p >R.M.S. Carmania. From Liverpool To New York, via South Hampton.</p>

  <div id="content">
   <p style="text-align: justify">The 19,566 GRT (Gross Registered Ton) "Carmania" (completed 
  November 1905) was the sister ship of the 19,594 GRT "Caronia" (completed February 1905), yet 
  they actually ended up having completely different machinery installed, in addition the “Carmania” 
  was a triple screw liner, and the "Caronia" a twin screw liner. The R.M.S. Carmania was powered 
  by the then innovative Parson's steam turbine engines, which offered higher speeds, simpler 
  maintenance and best of all, lower operational costs. Thus she was effectively the test ship for 
  operating a turbine engine on a large passenger liner, whilst her sister, the R.M.S. Caronia was 
  operated by the more traditional quadruple-expansion steam engines. These very different systems 
  were installed purposely as it was done to test the effectiveness of these two systems, and which 
  would be the most effective for the future. Another feature that differentiated the two sister 
  ships was that "Carmania" had two tall forward deck ventilator cowls, which the "Caronia" did 
  not have. But there was something else about these two fine sister ships, for at the time they 
  where the largest and fastest liners in the Cunard fleet. In 1923 Cunard had her refitted as a 
  cabin class ship, with her total accommodation reduced from 2,650 berths to 1,440. </p>
  
  <p style="text-align: justify">In 1924, Sir Arthur H. Rostron (KBE, RD) was the captain of the 
  RMS Carmania. Rostron won wide praise for his energetic efforts to reach the Titanic before she sank,
  and his efficient preparations for and conduct of the rescue of the survivors. He was awarded a 
  Congressional Gold Medal by the United States Congress, and in 1926, he was appointed Knight 
  Commander of the Order of the British Empire. He rose to become the Commodore of the Cunard fleet 
  and retired in 1931.
  </p>
  <p style="text-align: justify">It was on this ship that Adolfina Chytra (Ida we called her), crossed 
  the Atlantic Ocean and came to America. She was just 17 at the time. When she left her native home of 
  Leszczyna, Zlotoryja, Poland. Leszczyna is a village in the administrative district of Gmina 
  Złotoryja, within Złotoryja County, Lower Silesian Voivodeship, in south-western Poland. 
  It lies approximately 8 km (5 mi) south-east of Złotoryja and 74 km (46 mi) west of the regional 
  capital Wrocław.
  </p>
  <p style="text-align: justify">Adolfina's ship departed Liverpool, England on the 24<sup>th</sup> of 
  January, 1914. And arrived in America (New York City) some 8 days later. From New York Ida traveled 
  to New Jersey where she had relatives. While staying with her relatives, Ida met Frank Alexander. 
  They became acquainted. And on the 21<sup>th</sup> of September Frank and Ida were married. The marriage
  ceremony to place at Our Lady of Solace in Allamuchy New Jersey.
  </p>
  <div  id="ChytraPL" style="text-align: center">
    <p >Here is the </p>
      <AppLink 
        to="/ChytraPL"
        
        style="left:  4px; 
        position:relative;
        background-color: rgba(255, 255, 0, 1.0);"> Carmania's passenger list. 
      </AppLink> <p>You'll find Adolfina about half-way down the page.</p>
  </div>

</div>
</div>
</template>

<style>
#heading{
	text-align: center;
	font-weight: bold;
	margin-top: 10px;
}

p {
  text-indent: 1em;
  text-align: justify;
}

#carmaniaIop {
  display: flex;
  flex-direction: column;
  align-items: center;
    }

#ChytraPL {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10px;
  justify-content: center;
    }
</style>
