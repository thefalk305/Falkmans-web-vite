<!-- prettier-ignore-file -->
<script setup>
  import { reactive, ref } from "vue";
  import NavBar from "./NavBar.vue";
  import axios from "axios";
  const resolveImageUrl = (filename) =>
  new URL(`../assets/img/${filename}`, import.meta.url).href;


  const props = defineProps({
    show: Boolean,
    recordData: Object,
    modalTop: Number,
    fromDaBoys: Boolean
  });

  var bio = "";
  function readText(fname) {
    axios
      .get(fname)
      .then(function (response) {
        bio = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  var fname = props.recordData.bio;
  if (fname) {
    readText("./bios/" + fname);
  } else {
    bio = "The bio for " + props.recordData.name + " should be updated soon.";
  }
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" :style="{ top: fromDaBoys ? '450px' : modalTop + 'px' }">      
      <div class="modal-container">
        <NavBar :recordData="recordData" />
        <div class="modal-body">
          <img :src="resolveImageUrl(recordData.pic)" :alt="recordData.pic" alt="photo" />

          <!-- <img :src="'./img/' + recordData.pic" alt="photo" /> -->
        </div>
        <div class="modal-header">
          <slot name="header">{{ recordData.name }}</slot>
        </div>
        <div class="modal-footer">
          <slot name="body"
            ><p class="p1 infotxt">{{ bio }}</p></slot
          >
          <slot name="footer">
            default footer
            <button class="modal-default-button" @click="$emit('close')">OK</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
  img {
    height: 200px;
    width: auto;
  }
  .modal-mask {
    position: absolute;
    z-index: 9998;
    top: 440px;
    left: 100px;
    width: 750px;
    height: 700px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 1.5s ease;
  }
  .modal-container {
    width: 86%;
    height: 86%;
    margin: auto;
    padding: 20px 30px;
    background-color: antiquewhite;
    opacity: 1;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(255, 0, 0, 0.83);
    transition: all 0.3s ease;
  }
  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }
  .modal-body {
    margin: 20px 0;
  }
  .modal-default-button {
    position: absolute;
    float: right;
    bottom: 50px;
    right: 50px;
  }
  .infotxt {
    margin: 25px 0px 0px 0px;
    line-height: 150%;
  }
  /*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

  .modal-enter-from {
    opacity: 0;
  }

  .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-from .modal-container,
  .modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
