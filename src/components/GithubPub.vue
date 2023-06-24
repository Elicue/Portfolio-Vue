<template>
  <div class="bg-noir fixed top-0 flex w-full z-50">
    <div class="px-[8%] text-white w-full mx-auto flex flex-row justify-between items-center border-b-[1.5px] border-noir py-3">
      <p>Découvrez mes projets en quelques secondes !</p>
      <p>Retrouvez-y tous mes projets </p>
      <p><a class="flex flex-row gap-4 font-semibold" href="https://github.com/Elicue">Accéder à mon Github 
        <img src="../../public/images/ion_arrow-up-red.svg" alt="">
      </a></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GithubPub',

    props: {
      url: String
    },
  }
</script>