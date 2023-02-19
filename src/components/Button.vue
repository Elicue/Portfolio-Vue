<template>
  <div>
        <router-link :to="href" download><button class="uppercase text-white bg-primary lg:px-6 px-3 py-2 lg:py-3 text-sm lg:text-base hover:scale-110 transition-all">{{titre}}</button></router-link>
    <!-- <a :href="href"></a> -->
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