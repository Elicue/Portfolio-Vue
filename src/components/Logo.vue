<template>
  <div class="logo relative w-full flex items-center justify-center rotate-12">
    <img class="absolute z-10" width="120" height="120" src="images/logo-centre.svg" alt="logo">
    <img class="absolute logo-t-p z-10" src="images/logo-contour.svg" alt="logo">
    <div class="fond w-32 h-32 bg-white bg-opacity-50 backdrop-blur-md z-0 rounded-full"></div>
  </div>
</template>

<script>
export default {
  name: 'LogoView',
}
</script>