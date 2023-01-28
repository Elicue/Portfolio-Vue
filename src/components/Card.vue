<template>
  <div class="border-noir border-[1px] text-noir flex flex-col justify-between items-start py-8 w-11/12">
    <div class="titre flex w-11/12 mx-auto">
      <h1 class="uppercase font-bold">{{ titre }}</h1>
    </div>
    <div class="image flex w-11/12 mx-auto my-6">
      <img loading="lazy" class="w-full grayscale hover:grayscale-0 transition-all hover:scale-105" :src="url" alt="projet">
    </div>
    <div class="desc flex w-11/12 mx-auto">
      <div class="left flex flex-col items-start">
        <p class="text-gris font-semibold">Presentation of</p>
        <p class="uppercase font-bold">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardView',

  props: {
    titre: String,
    desc: String,
    url: String,
  }
}
</script>