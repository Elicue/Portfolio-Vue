<template>
  <GithubPub />
  <Nav />
  <div class="flex flex-col w-full lg:gap-[30vh] gap-[30vh]">
    <section class="w-full lg:h-screen h-fit lg:pt-[9%] pt-[25%] items-center bg-cover bg-top bg-no-repeat bg-fond px-[5%] flex lg:flex-row flex-col justify-between">
      <div class="flex flex-col lg:w-[40%] w-full gap-8 items-start justify-center">
        <Citation titre="À propos de moi"/>
        <h1 class="lg:text-[80px] text-[50px] font-regular lg:leading-[80px] leading-[60px] border-b-4 pb-4 border-primary"><span class="font-semibold">Bienvenue </span> sur mon  <strong class=" font-normal lg:text-[100px] text-[80px] lg:ml-4 text-primary font-macaroni">portfolio</strong></h1>
        <div class="gap-2 flex flex-col mt-4 text-sm lg:text-lg">
          <p>Étudiante en 3ème année en coding & digital innovation à l'IIM Digital School Paris, je suis passionnée par la création de sites web.</p>
          <p>J’aime créer et imaginer des projets <strong>harmonieux</strong> et <strong>agréables visuellement</strong>, tout en restant <strong>intuitifs</strong> et <strong>simples d'utilisation</strong>.</p>
        </div>
        <div class="flex flex-row gap-8">
          <FillBtn href="/projets" titre="Mes projets"/>
          <ArrowBtn href="/contact" titre="Me contacter"/>
        </div>
      </div>
      <div class="flex flex-col lg:w-1/2 w-full lg:items-end relative">
          <div class="img w-fil flex flex-col justify-end lg:items-end lg:h-[70vh] h-fit relative lg:mr-4 mt-8 lg:mt-0">
            <div class="absolute hidden z-10 top-8 -left-14 lg:flex">
              <LogoSpin url="images/Smiley.svg"/>
            </div>
            <div class="lg:w-[30vw] lg:flex hidden w-11/12 bg-primary border-[1.5px] border-primary lg:h-full h-[80vh] absolute top-4 z-[-1] left-4">
            </div>
            <div class="card lg:w-[30vw] w-full border-[1.5px] border-noir lg:h-full h-[80vh] text-noir bg-white items-end pb-8 flex hover:translate-x-4 hover:translate-y-4 transition-all ">
              <div class="flex flex-col relative justify-between h-5/6 w-10/12 mx-auto">
                <h2 class="ml-auto font-semibold text-3xl">À propos</h2>
                <div class="flex flex-col gap-3">
                  <p>Curieuse et créative, je m'efforce toujours de développer des design de conception uniques.</p>
                  <p>Depuis longtemps, je suis passionnée par l'art et les activités créatives. Cette passion m'a permis de développer un sens esthétique aiguisé, que j'applique aujourd'hui à la création de sites web plaisants visuellement. En combinant mes compétences artistiques et techniques, je m'efforce de concevoir des expériences en ligne captivantes qui enchantent les utilisateurs dès leur première visite.</p>
                </div>
                <FillBtn class="ml-auto" href="/projets" titre="Mes projets"/>
              </div>
            </div>
          </div>
      </div>
    </section>
  </div>
</template>

<style>

.spin {
    animation: spin 10s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
}

</style>
 
<script>
import Nav from '@/components/Nav.vue';
import Citation from '@/components/Citation.vue';
import FillBtn from '@/components/FillBtn.vue';
import ArrowBtn from '@/components/ArrowBtn.vue';
import LogoSpin from '@/components/LogoSpin.vue';
import GithubPub from '@/components/GithubPub.vue';

export default {

  name: 'HomeView',

  components: {
    Nav,
    Citation,
    FillBtn,
    ArrowBtn,
    LogoSpin,
    GithubPub

  },

}
</script>
