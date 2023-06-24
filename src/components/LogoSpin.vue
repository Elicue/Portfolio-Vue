<template>
  <div class="logo relative w-full flex items-center justify-center rotate-12">
    <img class="absolute z-10" width="60" height="60" :src="url" alt="logo">
    <img class="absolute logo-t-p z-10 spin" src="Images/EnSavoirPlus.svg" alt="logo">
    <div class="fond w-32 h-32 bg-white bg-opacity-50 backdrop-blur-md z-0 rounded-full"></div>
  </div>
</template>

<script>
  export default {
    name: 'LogoSpin',

    props: {
      url: String,
    },
  }
</script>