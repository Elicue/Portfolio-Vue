<template>

  <div class="scroll w-4  h-[80vh] block">
    <div class="barre border-[1px] w-full border-noir h-[80vh] rounded-full">
      <div id="scrollPath" class=" block rounded-full absolute"></div>
      <div id="progressBar " class="block rounded-full bg-primary h-0 before:h-full"></div>
    </div>
  </div>

</template>

<script>

  export default {
    name : 'ScrollbarView',

    // mounted(){

    //   let progress = document.getElementById('progressBar');
    //   let TotalHeight = document.body.scrollHeight - window.innerHeight;

    //   window.onscroll = function() {
    //     let progressHeight = (window.pageYOffset / TotalHeight) * 100;
    //     progress.style.height = getScrollPercent() + "%";
    //   };

    //   function getScrollPercent() {
    //     var h = document.documentElement, 
    //         b = document.body,
    //         st = 'scrollTop',
    //         sh = 'scrollHeight';
    //   return (h[st]) / ((h[sh]) - h.clientHeight) * 100;
    //   }

    // },
  }

</script>