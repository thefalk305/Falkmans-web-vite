<script setup>
import BackToTop from "@/components/BackToTop.vue";
import MiniNav from "@/components/MiniNav.vue";

const   resolveImageUrl = (filename) =>
  new URL(`../assets/img/${filename}`, import.meta.url).href;


</script>

<template>
  <div id="newyorkcity">
    <MiniNav />
    <div>
      <div class="nyc-container">


  <!-- <figure> -->
    <img :src="resolveImageUrl('NY-SkyLine.jpg')" width="100%" alt="New York Skyline">
    <figcaption>The New York Skyline</figcaption>
  <!-- </figure> -->

<div class="text-content">




<h2 id="intro" >New York City: The Golden Door of 19th-Century Immigration</h2> 

<p >  In the 1800s, New York City stood as the beating heart of American immigration. From the 
cobbled streets of Lower Manhattan to the bustling piers along the Hudson River, the city became a symbol of hope and opportunity for 
millions seeking refuge and renewal. By the mid-19th century, more than 70% of immigrants entering the United States passed through 
New York, earning it the nickname <b>"The Golden Door"</b>. The journey to America was often long and perilous. Immigrants traveled 
in cramped steerage compartments aboard steamships, enduring rough seas, illness, and uncertainty. Upon arrival, they were greeted 
by the imposing skyline of Manhattan and the promise of a new beginning. From 1855 to 1890, Castle Garden served as the city's first
official immigration station. Located at the southern tip of Manhattan, it processed over eight million immigrants before Ellis Island
took over in 1892.</p>
<hr>

<h2> Waves of Migration and Their Roots </h2>
<p >
The 19th century saw distinct waves of immigration, each driven by unique circumstances. The Irish fled famine and British rule,
Germans escaped political upheaval, and Italians sought relief from poverty and regional instability. Eastern European Jews arrived
in growing numbers to escape religious persecution, while Chinese immigrants—though fewer in New York—faced exclusionary laws like
the Chinese Exclusion Act of 1882. Between 1870 and 1900, nearly 12 million immigrants arrived in the U.S., with New York City as 
their primary gateway. These newcomers often settled in ethnic enclaves-Little Italy, Chinatown, and the Lower East Side-where they 
could find familiar languages, foods, and customs. These neighborhoods became vibrant cultural mosaics, shaping the city's identity 
for generations.</p>
<hr>
<h2 >Arrival Stories and Struggles</h2>
<p >
The arrival experience at Castle Garden was both structured and chaotic. Immigrants registered their names, declared their possessions,
and were directed to bathhouses and waiting areas. Children sometimes arrived alone, wearing tags with their names and destinations.
Stories abound of young siblings reunited with parents after years of separation, or of families navigating the city with little more
than hope and a few coins. Yet life in New York was far from easy. Immigrants faced discrimination, language barriers, and economic 
exploitation. Jobs were scarce, and wages were low. Many worked in sweatshops, built railroads, or took on dangerous labor in factories.
Women were often paid less than men, and children were expected to contribute to household income. Despite these hardships, immigrants 
played a vital role in building the city's infrastructure and fueling its industrial growth.</p>
<hr>
<h2 >Legacy and Transformation</h2>
<p>
By 1890, nearly half of New York City's population was foreign-born. Immigration transformed the city into a global crossroads,
where cultures collided and coexisted. Churches, synagogues, and cultural societies sprang up to support new arrivals. Newspapers
in dozens of languages circulated, and political movements, like labor unions and suffrage campaigns. Found fertile ground among
immigrant communities. The legacy of 19th-century immigration is etched into the very fabric of New York. From the Statue of Liberty's
torch to the tenement buildings of the Lower East Side, the city tells a story of resilience, diversity, and transformation.
 Without immigration, wave after wave, New York would not be New York.</p>  
</div>
</div>
</div>
  </div>
  <BackToTop />
</template>

<style>

h2 {
  text-align: justify;
  text-align: left;
  font-weight: bold;
  margin-top: 20px;
  text-shadow: 0px 0px 0px rgba(0, 178, 0, 0.8);
}
p {
  text-indent: 1em;

  text-align: justify;
}
.nyc-container {
  display: flex;
  flex-direction: column; /* stack image above text, or row for side-by-side */
  align-items: center;
}

.text-content {
  padding: 20px;
  text-align: center;
}
figcaption {
  font-weight: 600;
  margin-top: 10px;
}

#intro {
  text-align: center;

}
/* figure {
  width: 100%;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
    unicode-bidi: isolate;

} */
</style>
