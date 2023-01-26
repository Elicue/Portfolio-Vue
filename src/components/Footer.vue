<template>
  <footer class="w-full h-[50vh] py-[5vh] mt-[10vh] text-noir justify-between flex flex-col">
    <div class="border-t-[1px] border-noir w-11/12 mx-auto h-full justify-between flex flex-col">
      <div class="haut flex flex-col items-left text-left justify-around h-[30vh] mt-8">
          <div class="titre">
            <h3 class="uppercase text-5xl font-bold">contact me</h3>
          </div>
          <div class="infos flex flex-row w-full">
            <div class="content w-2/5 ">
              <p class="border-l-[1px] border-noir w-2/3 pl-4 py-2">if you like my work you can share it, and contact me for more fun projects.</p>
            </div>
            <div class="droite w-2/5">
              <div class="reseau items-center flex flex-row">
                <ion-icon class=" w-10 h-10" name="logo-linkedin"></ion-icon>
                <a class="font-semibold ml-4" href="https://www.linkedin.com/in/lucie-ehrsam-4a6348222/">https://www.linkedin.com/in/lucie-ehrsam-4a6348222/</a>
              </div>
              <div class="reseau items-center flex flex-row">
                <ion-icon class=" w-10 h-10" name="logo-github"></ion-icon>
                <a class="font-semibold ml-4" href="https://github.com/Elicue">https://github.com/Elicue</a>
              </div>
            </div>
            <div class="logo relative w-1/5 flex items-center justify-center rotate-12">
              <img width="120" height="120" src="images/logo-centre.svg" alt="logo">
              <img class="absolute w-1/2 logo-t-p" src="images/logo-contour.svg" alt="logo">
            </div>
        </div>
      </div>
      <div class="bas flex flex-row w-full justify-between">
        <div class="menu flex flex-row w-1/3 justify-around items-center">
          <router-link to="/"><p class="uppercase font-semibold">about me</p></router-link>
          <span class="w-6 h-[1px] bg-noir"></span>
          <router-link to="/ProjectsView"><p class="uppercase font-semibold">my projects</p></router-link>
          <span class="w-6 h-[1px] bg-noir"></span>
          <router-link to="/ContactViews"><p class="uppercase font-semibold">contact me</p></router-link>
        </div>
        <div class="bwp w-1/3 text-left">
          <p class="uppercase tracking-wider">build with passion @ 2022</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

  export default {
    name: 'FooterView',
  }

</script>