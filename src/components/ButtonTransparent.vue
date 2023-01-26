<template>
  <div>
    <a :href="href"><button class="uppercase border-[1px] border-noir text-noir bg-transparent px-6 py-3 text-md">{{titre}}</button></a>
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