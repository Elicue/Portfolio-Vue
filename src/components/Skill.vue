<template>
  <div class="card border-[1px] border-noir flex flex-col w-11/12 h-[25vh] justify-between text-center items-center py-4">
    <div class="titre w-11/12 mx-auto h-1.4 ">
      <h3 class="uppercase font-bold">{{ titre }}</h3>
    </div>
    <div class="content w-11/12 mx-auto h-1/2 justify-center flex my-4">
      <img class="w-1/2 h-auto grayscale hover:grayscale-0 hover:scale-105" loading="lazy" :src="url" alt="logo">
    </div>
    <div class="desc w-11/12 mx-auto h-1/4 ">
      <p>What's <a :href="href"><button class="underline underline-offset-4">{{ skill }}</button></a> ?</p>    
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