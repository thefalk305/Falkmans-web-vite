<template>
  <p class="go-back">
    <button @click="$router.back()">Go Back!</button>
  </p>
</template>

<style scoped>
  .go-back {
    display: flex;
    justify-content: center;  }
</style>
