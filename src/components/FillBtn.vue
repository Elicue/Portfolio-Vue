<template>
  <div>
    <router-link :to="href">
      <p class="relative font-inter capitalize rounded-full inline-flex border-[1.5px] border-noir hover:border-primary items-center justify-start  px-7 py-2 overflow-hidden transition-all bg-white hover:bg-white group">
      <span class="w-52 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span class="relative w-full lg:text-xl text-base text-left text-noir transition-colors duration-300 ease-in-out group-hover:text-white">{{titre}}</span>
    </p>
  </router-link>
  </div>
</template>

<script>
  export default {
    name : 'FillBtn',
    
    props: {
      titre: String,
      href: String,
    },
  }
</script>
