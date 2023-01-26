<template>
  <div class=" flex flex-col h-[50vh] justify-between">
    <div class="titre">
      <h3 class="text-6xl uppercase font-bold">{{titre}}</h3>
      <p class="text-5xl font-voyage flex flex-row items-center justify-between w-3/5 "><span class="h-[1px] w-20 bg-noir flex"></span>{{sousTitre}}</p>
    </div>
    <div class="text">
      <p class="text-gris border-l-[1px] border-noir pl-4 w-1/2">{{desc}}<a class="underline underline-offset-4 text-noir" target="_blank" :href="coop">{{name}}</a> <a class="underline underline-offset-4 text-noir" target="_blank" :href="coop2">{{name2}}</a> <a class="underline underline-offset-4 text-noir" target="_blank" :href="coop3">{{name3}}</a>
      </p>
    </div>
    <div class="cta justify-between flex flex-row w-3/5">
      <a href="maquette" download><button class="uppercase text-white border-[1px] border-noir bg-noir px-6 py-3 text-sm">telecharger la maquette</button></a>
      <a href="github"><button class="uppercase border-[1px] border-noir text-noir bg-transparent px-6 py-3 text-sm">github</button></a>
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
    name2: String,
    name3: String,
    maquette: String,
    github: String,
    coop: String,
    coop2: String,
    coop3: String,
  }
}
</script>