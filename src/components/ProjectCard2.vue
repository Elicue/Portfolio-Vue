<template>
  <div class=" flex flex-col h-[50vh] justify-between mb-8 lg:mb-0">
    <div class="titre text-right items-end justify-end flex flex-col">
      <h3 class="lg:text-6xl text-3xl uppercase font-bold">{{titre}}</h3>
      <p class="lg:text-5xl text-2xl font-voyage flex flex-row items-center justify-between lg:w-1/2 "><span class="h-[1px] w-20 bg-noir flex"></span>{{sousTitre}}</p>
    </div>
    <div class="text text-right flex justify-end">
      <p class="text-gris border-r-[1px] border-noir pr-4 lg:w-1/2">{{desc}}<a class="underline underline-offset-4 text-noir" target="_blank" :href="coop">{{name}}</a> 
      </p>
    </div>
    <div class="flex flex-row justify-end mt-2 lg:mt-0">
      <div class="cta justify-between flex flex-row lg:w-3/5">
        <a href="maquette" download><button class="uppercase text-white border-[1px] border-primary bg-primary px-6 py-3 text-sm hover:scale-110 transition-all">download the model</button></a>
        <a href="github"><button class="uppercase border-[1px] border-noir text-noir bg-transparent px-6 py-3 text-sm hover:scale-110 transition-all">github</button></a>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ProjectCardView',

  props: {
    titre: String,
    sousTitre: String,
    desc: String,
    name: String,
    maquette: String,
    github: String,
    coop: String,
  }
}
</script>