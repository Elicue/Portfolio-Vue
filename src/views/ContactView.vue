<template >
  <GithubPub />
  <Nav />
</template>

<script>
  import Nav from '@/components/Nav.vue';
  import GithubPub from '@/components/GithubPub.vue';

  export default {
    name: 'ContactView',

    components: {
      Nav,
      GithubPub
    }
  }

</script>