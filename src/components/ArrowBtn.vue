<template>
  <div>
    <router-link :to="href">
      <p class="relative font-inter rounded-full items-center justify-start  px-7 py-2 overflow-hidden transition-all group flex flex-row hover:text-primary lg:text-xl text-base gap-4">
        <img class="hidden " src="../../public/images/ion_arrow-up-red.svg" alt="fleche">
        {{titre}}
        <img class="flex" src="../../public/images/ion_arrow-up.svg" alt="fleche">
      </p>
  </router-link>
  </div>
</template>

<style scoped>

p:hover img:nth-child(1) {
  display: flex;
  transition: all 0.3s ease-in-out;
}

p:hover img:nth-child(2) {
  display: none;
  transition: all 0.3s ease-in-out;
}

</style>

<script>
  export default {
    name : 'ArrowBtn',
    
    props: {
      titre: String,
      href: String,
    },
  }
</script>
