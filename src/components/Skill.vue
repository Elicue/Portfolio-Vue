<template>
  <div class="card border-[1px] border-noir flex flex-col w-11/12 h-full justify-between items-center">
    <div class="titre w-11/12 mx-auto h-full">
      <h3 class="uppercase font-bold">{{ titre }}</h3>
    </div>
    <div class="content w-11/12 mx-auto h-full justify-center flex">
      <img class="w-1/2 h-auto grayscale hover:grayscale-0 hover:scale-105" loading="lazy" :src="url" alt="logo">
    </div>
    <div class="desc w-11/12 mx-auto h-full">
      <p>c'est quoi <a :href="href"><button class="underline underline-offset-4">{{ skill }}</button></a> ?</p>    
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillView',

  props: {
    titre: String,
    skill: String,
    url: String,
    href: String,
  }
}
</script>