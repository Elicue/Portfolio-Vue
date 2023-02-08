<template>
  <div class="scroll">
    <div class="barre">
      <div id="scrollPath"></div>
      <div id="progressBar"></div>
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

  .scroll {
    position: fixed;
    top: 25%;
    right: 1.5%;
  }
    
  .scroll .barre {
    border: 1.5px #191919 solid;
    height: 500px;
    border-radius: 50px;
    width: 15px;
  }

  .scroll .barre #scrollPath {
    height: 100%;
    display: block;
    border-radius: 50px;
    position: absolute;
    width: 15px;
  }

  .scroll .barre #progressBar {
    height: 0;
    background-color: #a5334a;
    display: block;
    border-radius: 50px;
    width: 99.5%;
    z-index: -1;
  }

  .scroll .barre #progressBar::before {
    content: "";
    height: 100%;
    background-color: #a5334a;
  }

  .scroll .barre #progressBar::after {
    content: "";
    height: 100%;
    background-color: #a5334a;
  }

</style>