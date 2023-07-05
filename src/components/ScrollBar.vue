<template>
  <div class="scroll hidden lg:flex fixed top-[25%] right-[1.5%]">
    <div class="barre border-[1px] border-noir h-[55vh] rounded-full w-[1.7vh] bg-white">
      <div id="scrollPath" class="h-full block rounded-full absolute w-full"></div>
      <div id="progressBar" class="h-0 bg-primary block rounded-full w-full -z-10 before:content-[''] before:h-full after:content-[''] after:h-full"></div>
    </div>
  </div>
  
</template>

<script>

  export default {
    name : 'ScrollBar',

    mounted() {
      "use strict";

      let progress = document.getElementById('progressBar');

      window.onscroll = function() {
        progress.style.height = getScrollPercent() + "%";
      };

      function getScrollPercent() {
        var h = document.documentElement, 
            st = 'scrollTop',
            sh = 'scrollHeight';
      return (h[st]) / ((h[sh]) - h.clientHeight) * 100;
      }

    },
  }

</script>

<style>

  ::-webkit-scrollbar {
    width: 0;
  }

</style>