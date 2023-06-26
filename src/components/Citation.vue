<template>
  <div>
    <p class="font-inter font-medium text-blanc bg-primary lg:text-lg text-base rounded-full mx-auto px-7 py-2 w-fit">{{titre}}</p>
  </div>
</template>

<script>
  export default {
    name : 'CitationVue',

  props: {
    titre: String,
  },
  }
</script>
