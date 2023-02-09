<template>
  <header class="fixed w-screen top-0 left-0 flex bg-white bg-opacity-50 backdrop-blur-md z-[90] h-[8vh] text-noir">
    <div class="content flex flex-row justify-between items-center w-11/12 mx-auto border-b-[1px] border-black ">
      <div class="logo lg:w-1/3">
        <router-link to="/"><img class="lg:w-16 w-8" src="/favicon.svg" alt="logo"></router-link>
      </div>
      <div class="page flex flex-row items-center justify-around lg:w-[30vh] uppercase text-lg font-semibold">
        <span class="w-3 lg:w-6 h-[1px] bg-black flex"></span>
        <p class="font-voyage mx-2 lg:mx-0 lg:text-3xl text-2xl">{{ titre }}</p>
        <span class="w-3 lg:w-6 h-[1px] bg-black flex"></span>
      </div>
      <div class="menu flex flex-row lg:w-1/3 justify-end">
      <nav>
        <router-link to="/"><ion-icon class=" mr-4 lg:mr-8 lg:w-8 lg:h-8 w-6 h-6 fill-black" name="person-outline"></ion-icon></router-link>
        <router-link to="/projects"><ion-icon class=" mr-4 lg:mr-8 lg:w-8 lg:h-8 w-6 h-6 fill-black" name="desktop-outline"></ion-icon></router-link>
        <router-link to="/contact"><ion-icon class="lg:w-8 lg:h-8 w-6 h-6 fill-black" name="call-outline"></ion-icon></router-link>
      </nav>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'HeaderView',

  props: {
    titre: String,
  }
}

</script>
