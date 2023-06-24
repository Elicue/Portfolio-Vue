<template>
  <GithubPub />
  <Nav />
  <div class="flex flex-col w-full lg:gap-[30vh] gap-[30vh]">
    <section
      class="w-full lg:h-screen h-fit lg:pt-[9%] pt-[25%] items-center bg-cover bg-top bg-no-repeat bg-fond px-[5%] flex lg:flex-row flex-col justify-between">
      <div class="flex flex-col lg:w-[40%] w-full gap-8 items-start justify-center">
        <Citation titre="Mes projets" />
        <h1
          class="lg:text-[80px] text-[50px] font-regular lg:leading-[80px] leading-[60px] border-b-4 pb-4 border-primary">
          Mes <strong class=" font-normal lg:text-[100px] text-[80px] lg:ml-4 text-primary font-macaroni">projets</strong>
        </h1>
        <div class="gap-2 flex flex-col mt-4 text-sm lg:text-lg">
          <p>Grâce à mon parcours scolaire, j'ai eu l'opportunité de réaliser un grand nombre de projets qui ont
            profondément enrichi ma vie. L'école m'a offert un environnement propice à <strong>l'apprentissage</strong> et
            à <strong>l'exploration de mes passions</strong>, me permettant ainsi de <strong>concrétiser mes
              idées</strong>.</p>
        </div>
        <div class="flex flex-row gap-8">
          <FillBtn href="/projets" titre="Me contacter" />
        </div>
      </div>
      <div class="flex flex-col lg:w-1/2 w-full justify-start items-end relative">
        <div class="relative flex w-full hover -top-12">
          <ProjectCard titre="page d'accueil" desc="Mon" bold="portfolio" url="/images/portfolio-side.jpg"  class="absolute rotate-[24deg] right-24 w-7/12 top-12 z-10"/>
          <ProjectCard titre="page contact" desc="Mon" bold="portfolio" url="/images/portfolio-side.jpg" class="w-7/12 h-min z-[1]"/>
        </div>
        <div class="absolute z-10 -bottom-2 -right-8 lg:flex border-primary rounded-full flex text-sm flex-row gap-6 border-solid border-2 px-7 bg-white py-2 w-1/2">
          <img src="images/Window.svg" alt="icone">
          <p>Créer des expériences mémorables et captivantes.</p>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped >

  .-top-12:hover .absolute {
    transform: translateX(10%) rotate(32deg);
    transition: all 0.5s ease-in-out;
  }
  .-top-12:hover .h-min {
    transform: translateX(-10%) rotate(-12deg);
    transition: all 0.5s ease-in-out;
  }

</style>

<script>
import Nav from '@/components/Nav.vue';
import GithubPub from '@/components/GithubPub.vue';
import Citation from '@/components/Citation.vue';
import FillBtn from '@/components/FillBtn.vue';
import ProjectCard from '@/components/ProjectCard.vue';
// import ArrowBtn from '@/components/ArrowBtn.vue';

export default {

  name: 'ProjectsView',

  components: {
    Nav,
    GithubPub,
    Citation,
    FillBtn,
    ProjectCard,
    // ArrowBtn,
  },

}
</script>
