<script setup>
import { reactive, ref } from "vue";

const props = defineProps({
  route: String,
  text: String,
});

console.log(props.places);
console.log(props.text);
console.log("hello");
</script>
<template>
  <li>
    <AppLink :to="route">{{ text }}</AppLink>
  </li>
</template>
