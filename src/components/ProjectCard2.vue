<template>
  <div class=" flex flex-col h-[50vh] justify-between">
    <div class="titre text-right items-end justify-end flex flex-col">
      <h3 class="text-6xl uppercase font-bold">{{titre}}</h3>
      <p class="text-5xl font-voyage flex flex-row items-center justify-between w-1/2 "><span class="h-[1px] w-20 bg-noir flex"></span>{{sousTitre}}</p>
    </div>
    <div class="text text-right flex justify-end">
      <p class="text-gris border-r-[1px] border-noir pr-4 w-1/2">{{desc}}<a class="underline underline-offset-4 text-noir" target="_blank" :href="coop">{{name}}</a> 
      </p>
    </div>
    <div class="flex flex-row justify-end">
      <div class="cta justify-between flex flex-row w-3/5">
        <a href="maquette" download><button class="uppercase text-white border-[1px] border-noir bg-noir px-6 py-3 text-sm">telecharger la maquette</button></a>
        <a href="github"><button class="uppercase border-[1px] border-noir text-noir bg-transparent px-6 py-3 text-sm">github</button></a>
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