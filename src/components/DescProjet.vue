<template>
  <div>
    <div class="flex flex-col w-full gap-8 items-start justify-center">
      <h1 class="lg:text-[50px] text-[30px] font-regular lg:leading-[80px] leading-[60px] border-b-4 pb-4 border-primary">
        {{ titre }} <strong
          class=" font-normal lg:text-[80px] text-[60px] lg:ml-4 text-primary font-macaroni">{{ main }}</strong></h1>
      <div class="gap-2 flex flex-col mt-4 text-sm lg:text-base lg:w-9/12">
        <div class="gap-6 flex flex-row w-full">
          <p class="font-inter font-medium text-primary opacity-50 lg:text-base text-sm rounded-full w-fit">{{type}}</p>
          <p class="font-inter font-medium text-primary opacity-50 lg:text-base text-sm rounded-full w-fit">{{type2}}</p>
        </div>  
        <p>{{ desc }}<strong><a class="underline underline-offset-4 text-noir" target="_blank" :href="coop">{{collab}}</a><a class="underline underline-offset-4 text-noir" target="_blank" :href="coop2">{{collab2}}</a> <a class="underline underline-offset-4 text-noir" target="_blank" :href="coop3">{{collab3}}</a></strong> .</p>
        <p class="opacity-50 text-noir text-sm">{{ date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    type2: String,
    desc: String,
    collab: String,
    titre: String,
    main: String,
    date: String,
    coop: String,
    collab2: String,
    coop2: String,
    collab3: String,
    coop3: String,
  }
}
</script>