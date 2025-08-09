<!-- prettier-ignore-file -->
<!-- prettier-ignore-file -->
<script setup>
  import { reactive, ref } from "vue";
  import ShowModal from "./ShowModal.vue";
  import ShowInfoPage from "./ShowInfoPage.vue";

  ShowInfoPage;
  import bldRels from "../assets/js/buildRelatives.js";

  const props = defineProps({
    recordData: Object,
    infoTable: Array,
    fromDaBoys: Boolean
  });
  var showRelatives = ref(false);

  var tblArray = ref([]);
  var tblKeys = Object.keys(props.recordData);

  tblArray = bldRels(tblKeys, props.infoTable, props.recordData);
</script>

<template>
  <div>
    <ShowModal 
    :recordData="recordData"
    :fromDaBoys="fromDaBoys"
    />
    <div id="relatives">
      <button class="clickMe" type="input" @click="showRelatives = !showRelatives">
        {{ showRelatives ? "Hide Relatives" : "Show Relatives" }}
      </button>
      <div id="showRelatives" v-if="showRelatives">
        <div v-for="record in tblArray" :key="record.id">
          <!-- test whether heading or relative -->
          <div v-if="record.id == 0">
            <h2>{{ record.name }}</h2>
          </div>
          <div v-else>
            <h2 style="border: none"><ShowModal :recordData="record" /></h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #relatives {
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  .clickMe {
    border: none;
    width: 200px;
    font-weight: bold;
    position: relative;
  }
  .clickMe:hover {
    scale: 1.1;
    background-color: yellow;
    border-radius: 10px;
  }

  h2 {
    width: 200px;
    font-style: italic;
    /* left: -50px;
    text-align: left; */
	font-family: Decker;
  font-size: 16px;
  }
  h2 {
    margin: 0px;
    left: 0px;
    text-align: center;
  }
</style>
