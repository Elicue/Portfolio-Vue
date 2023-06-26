<template>
  <div class="bg-noir fixed top-0 lg:flex hidden w-full z-50">
    <div class="px-[8%] text-blanc w-full mx-auto flex flex-row justify-between items-center border-b-[1.5px] border-noir py-3">
      <p>Découvrez mon travail en quelques secondes !</p>
      <p class=" font-light">Retrouvez-y tous mes projets </p>
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