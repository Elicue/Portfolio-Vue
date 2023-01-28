<template>
  <div>
    <a :href="href"><button class="uppercase text-white bg-primary px-6 py-3 text-md">{{titre}}</button></a>
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