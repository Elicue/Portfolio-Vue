<template>
  <div class=" border-[1.5px] border-noir lg:p-8 p-4 w-full bg-white z-10">
    <p class="uppercase font-semibold">{{ titre }}</p>
    <img loading="lazy" class="w-full lg:grayscale hover:grayscale-0 transition-all hover:scale-105 my-6" :src="url" alt="projet">
    <p class=" opacity-50">{{ desc }}</p>
    <p class="uppercase font-semibold">{{ bold }}</p>
  </div>
</template>

<script>
  export default {
    name : 'ProjectCard',

    props: {
    titre: String,
    desc: String,
    bold: String,
    url: String,
  }
  }
</script>
