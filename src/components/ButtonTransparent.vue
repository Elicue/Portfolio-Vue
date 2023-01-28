<template>
  <div>
    <a :href="href"><button class="uppercase border-[1px] border-noir text-noir bg-transparent lg:px-6 px-3 py-2 lg:py-3 text-sm lg:text-base">{{titre}}</button></a>
  </div>
</template>

<script>
export default {
  name: 'ButtonTransparentView',

  props: {
    titre: String,
    href: String,
  }
}
</script>