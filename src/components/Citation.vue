<template>
  <div>
    <p class="font-inter font-medium text-white bg-primary text-lg rounded-full mx-auto px-7 py-2 w-fit">{{titre}}</p>
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
