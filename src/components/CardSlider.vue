<template>
  <div class="flex flex-shrink-0 relative w-full sm:w-auto border-[1px] border-noir py-16 font-staff px-8">
      <img :src="href" alt="black chair and white table" class="object-cover object-center w-[50vh] grayscale hover:grayscale-0 transition-all hover:scale-105 z-40" />
      <div class="absolute w-1/12 h-full top-0 left-0 py-4 px-8 z-50">
        <div class="flex h-full items-start w-full flex-col justify-between relative ">
          <h2 class="lg:text-xl absolute w-96 top-0 leading-4 text-base lg:leading-5 text-white dark:text-gray-900 capitalize">{{desc}}</h2>
          <h3 class="text-xl absolute w-96 bottom-0 lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900 uppercase z-50">{{titre}}</h3>
        </div>
      </div>
  </div>
</template>

<script>

  export default {
    name : 'CardSliderView',

    props : {
      titre : String,
      href : String,
      desc : String,
    }
  }

</script>