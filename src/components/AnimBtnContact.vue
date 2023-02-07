<template>
  <p class="relative font-staff capitalize inline-flex border-[1px] border-noir hover:border-primary items-center justify-start px-6 py-3 overflow-hidden transition-all bg-white hover:bg-white group text-sm lg:text-base">
    <span class="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
    <span class="relative w-full text-left text-noir transition-colors duration-300 ease-in-out group-hover:text-white">{{titre}}</span>
  </p>
</template>

<script>

  export default {
    name : 'AnimBtnContact',

    props: {
      titre: String,
    }
  }

</script>

