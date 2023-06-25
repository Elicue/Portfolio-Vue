<template>
  <div class="bg-white fixed lg:top-12 flex w-full z-50">
    <div class="px-[5%] w-full mx-auto flex flex-row justify-between items-center border-b-[1.5px] border-noir py-3">
      <div class="lg:w-1/3 w-1/4 flex">
          <p class=" text-xs lg:text-base"><router-link to="/"><img class="lg:w-[3vw]" src="images/EL.svg" alt="logo"></router-link></p>
      </div>
      <div class="lg:w-1/3 w-1/4 flex justify-end">
        <div class="burger"></div>
        <ul class="flex-row gap-8 hidden lg:flex">
          <li class=" text-xs font-inter lg:text-base "><router-link to="/">À propos</router-link></li>
          <li class=" text-xs font-inter lg:text-base"><router-link to="/projects">Mes projets</router-link></li>
          <!-- <li class=" text-xs font-inter lg:text-base"><router-link to="/contact">Me contacter</router-link></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

.font-inter:hover {
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
  text-decoration-color: #FA2B43;
}

</style>

<script>
export default {
  name: 'NavVue',

  props: {
    titre: String,
  },
}
</script>
