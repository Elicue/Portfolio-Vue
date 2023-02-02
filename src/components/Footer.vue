<template>
  <footer class="w-full lg:h-[50vh] py-[5vh] lg:mt-[10vh] -mt-[10vh] text-noir justify-between flex flex-col">
    <div class="border-t-[1px] border-noir w-11/12 mx-auto h-full justify-between flex flex-col">
      <div class="haut flex flex-col items-left text-left justify-around lg:h-[30vh] mt-8">
          <div class="titre">
            <h3 class="uppercase text-5xl font-bold">contact me</h3>
          </div>
          <div class="infos flex lg:flex-row flex-col w-full mt-8 lg:mt-0">
            <div class="content lg:w-2/5 ">
              <p class="border-l-[1px] border-noir w-2/3 pl-4 py-2">if you like my work you can share it, and contact me for more fun projects.</p>
            </div>
            <div class="droite lg:w-2/5 my-8 lg:my-0">
              <div class="reseau items-center flex flex-row">
                <ion-icon class=" w-10 h-10" name="logo-linkedin"></ion-icon>
                <a class="font-semibold ml-4 text-xs lg:text-base" href="https://www.linkedin.com/in/lucie-ehrsam-4a6348222/">https://www.linkedin.com/in/lucie-ehrsam-4a6348222/</a>
              </div>
              <div class="reseau items-center flex flex-row">
                <ion-icon class=" w-10 h-10" name="logo-github"></ion-icon>
                <a class="font-semibold ml-4 text-xs lg:text-base" href="https://github.com/Elicue">https://github.com/Elicue</a>
              </div>
            </div>
            <div class="logo hidden relative w-1/5 lg:flex items-center justify-center rotate-12">
              <img width="120" height="120" src="images/logo-centre.svg" alt="logo">
              <img class="absolute w-1/2 logo-t-p" src="images/logo-contour.svg" alt="logo">
            </div>
        </div>
      </div>
      <div class="bas flex lg:flex-row flex-col w-full justify-between ">
        <div class="flex flex-row lg:w-1/3 justify-around items-center">
          <router-link to="/"><p class="uppercase font-semibold text-xs lg:text-base">about me</p></router-link>
          <span class="w-6 h-[1px] bg-noir"></span>
          <router-link to="/ProjectsView"><p class="uppercase font-semibold text-xs lg:text-base">my projects</p></router-link>
          <span class="w-6 h-[1px] bg-noir"></span>
          <router-link to="/ContactViews"><p class="uppercase font-semibold text-xs lg:text-base">contact me</p></router-link>
        </div>
        <div class="bwp lg:w-1/3 text-left menu mt-8 lg:mt-0 ">
          <p class="uppercase tracking-wider">build with passion @ 2023</p>
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