<template>
  <div>
    <a :href="href"><button class="uppercase text-white bg-primary lg:px-6 px-3 py-2 lg:py-3 text-sm lg:text-base">{{titre}}</button></a>
  </div>
</template>

<script>
export default {
  name: 'ButtonView',

  props: {
    titre: String,
    href: String,
  }
}
</script>