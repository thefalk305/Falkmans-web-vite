<!-- prettier-ignore-file -->
<script setup>
  import { reactive, ref, onMounted } from "vue";
  import Branch from "./Branch.vue";
  import treeData from "../assets/js/treeData.js";
  import { useDraggableModal } from '@/composables/useDraggableModal';

  useDraggableModal();

  const modalTop = ref('1400px');

  // const props = defineProps({
  //   recordData: Object,
  //   infoTable: Array,
  // });


  // var familyTree = ref([]);
  var branchData = [];
  var branchLoc = [];
  // var branchData = ref([]);
  // var branchLoc = ref([]);

  treeData.familyTree.forEach((value) => branchData.push(value));
  treeData.familyTreeLocs.forEach((value) => branchLoc.push(value));

</script>

<template>
  <div id="treewindow">
    <img
      class="background"
      src="../assets/graphics/treewindow.png"
      alt=""
      height="2000"
      style="left: 0px"
    />


    <div class="tree-wrapper">

    <div id="draggable-elem">
      <!--this is the main tree container. All "mgroup" inline positioning below is based from the position of the treepot in the tree window-->
      <div id="treepot">
        <Branch
          v-for="(branch, index) in branchData"
          :key="index"
          :class="branch"
          :index="index"
          :branchData="branch"
          :branchLoc="branchLoc[index]"
          :modalTop="treeData.familyTreeLocs[index][0] + 500"
        />
        <!--INFOBOX 00-->
        <figure class="boxzero">
          <h4 class="figs">How To Use This Tree:</h4>
          <p class="p2" style="text-align: justify">
            Grab and drag the white surface to navigate the tree. You can also
            double-click on a spot to return to the 'home' position.<br />
            <br />
            Double Click on an photo to open that person's Infopage or Double Click on the slide (Hover on an image) to open the Family Page.  You can right-click each photo to open the full-sized image in a new tab or window&mdash;perfect for reading the documents, or if you wish to download the image.
          </p>
        </figure>

        <!--INFOBOX 01-->
        <!-- <figure class="boxone" style="left: -620px">
          <h4 class="figs">&#8656;&nbsp;&nbsp;This Way To:</h4>
          <p class="p2" style="line-height: 200%" v-for="n in 5" :key="n">
          </p>
        </figure> -->

        <!--INFOBOX 02-->
        <!-- <figure class="boxtwo" style="left: 600px">
          <h4 class="figs">This Way To:&nbsp;&nbsp;&#8658;</h4>
          <p class="p2" style="line-height: 200%" v-for="n in 5" :key="n">
          </p>
        </figure> -->

        <!--INFOBOX 03-->
        <!-- <figure class="boxthree">
          <p class="p2" style="text-align: justify">New branches growing soon!</p>
        </figure> -->

        <!--INFOBOX 04-->
        <!-- <figure class="boxfour">
          <p class="p2" style="text-align: justify">New branches growing soon!</p>
        </figure> -->
      </div>
      <!--end treepot-->
    </div>

    </div>
    <!--end treepot container-->
  </div>
  <!--end treewindow-->
</template>

<style scoped>
  
figure.boxzero {
  width: 400px; 
  padding: 1rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
  left: -140px;
  top: 380px;}

figure.boxzero .p2 {
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.6;
}

.tree-wrapper {
  display: flex;
  justify-content: center;   /* centers horizontally */
  align-items: start;        /* align top, or use center to center vertically */
  width: 8000px;
  height: 3600px;
  overflow: auto;            /* adds scrollbars when needed */
  position: relative;
}

#draggable-elem {
  position: relative;
  top: 930px;
  left: 600px;
  width: 8000px;
  height: 3700px;
  white-space: nowrap;
  background-color: white;
  /* font-size: 1.6em;
  display: grid;
  place-items: center;
  font-family: "Poppins", sans-serif;
  border-radius: 0.3em;
  cursor: move;
  z-index: 0;
  overflow-x: auto; */
}
 /* 👇 drop the absolute positioning & transform */
  /* position: absolute; */
  /* top/left/transform removed */

  /* #draggable-elem {
    position: absolute;
    background-color: white;
    font-size: 1.6em;
    left: 600px;
    height: 3700px;
    width: 8000px;
    top: 930px;
    transform: translate(-50%, -25%);
    display: grid;
    place-items: center;
    font-family: "Poppins", sans-serif;
    border-radius: 0.3em;
    cursor: move;
    z-index: 0;
    overflow-x: auto;
    white-space: nowrap;
  } */

  h4 {
    background-color: transparent;
  }
  /*
.mgroup {
  left: 300px;
  top: 20px;
  position: absolute;
  width: 370px;
  height: 140px;
  border-radius: 12px 24px 24px 24px;
  border-top: thin #006600 solid;
  border-left: thin #006600 solid;
  border-right: thin #006600 solid;
  z-index: 1;
}
*/

  #treewindow {
    position: relative;
    margin: auto;
    /*    left: 400px;
        width: 250px;
    height: 250px;
 */
    width: 98%;
    height: 700px;
    display: block;
    background-color: white;
    background-image: url(/graphics/treewindow.png);
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: url(/graphics/openhand.cur), pointer;
    overflow: visible;
    z-index: 99;
  }
</style>
