<template>
  <div class="bg-blanc fixed lg:top-12 flex w-full z-50">
    <div class="px-[5%] w-full mx-auto flex flex-row justify-between items-center border-b-[1.5px] border-noir py-3">
      <div class="lg:w-1/3 w-1/4 flex">
          <p class=" text-xs lg:text-base"><router-link to="/"><img class="lg:w-[3vw]" src="images/EL.svg" alt="logo"></router-link></p>
      </div>
      <div class="flex lg:hidden flex-col gap-2 h-full w-full justify-center items-end relative">
        <div class="flex burger flex-col gap-2 h-full w-full justify-center items-end">
          <span class="bg-noir h-[2px] rounded-full w-10"></span>
          <span class="bg-noir h-[2px] rounded-full w-10"></span>
          <span class="bg-noir h-[2px] rounded-full w-10"></span>
       </div>
      </div>
      <div class="lg:w-1/3 w-1/4 hidden lg:flex justify-end">
        <ul class="flex-row gap-8 hidden lg:flex">
          <li class=" text-xs font-inter lg:text-base "><router-link to="/">À propos</router-link></li>
          <li class=" text-xs font-inter lg:text-base"><router-link to="/projects">Mes projets</router-link></li>
          <!-- <li class=" text-xs font-inter lg:text-base"><router-link to="/contact">Me contacter</router-link></li> -->
        </ul>
      </div>
    </div>
    <ul class="flex-col menu gap-8 absolute top-[100%] p-8 flex hidden w-screen bg-blanc border-b-[1.5px] border-noir">
      <li class=" text-base font-inter lg:text-base "><router-link to="/">À propos</router-link></li>
      <li class=" text-base font-inter lg:text-base"><router-link to="/projects">Mes projets</router-link></li>
    </ul>
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

  mounted() {
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.menu');

    burger.addEventListener('click', () => {
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.style.transition = 'all 0.5s ease-in-out';
      } else {
        menu.classList.add('hidden');
        menu.style.transition = 'all 0.5s ease-in-out';
      }
    })
  }
}
</script>
