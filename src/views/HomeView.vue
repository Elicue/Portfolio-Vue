<template>
  <GithubPub />
  <Nav />
  <div class="flex flex-col w-full lg:gap-[30vh] gap-[10vh]">
    <section class="w-full lg:h-screen h-fit lg:pt-[9%] pt-[25%] items-center px-[5%] flex lg:flex-row flex-col justify-between">
      <div class="flex flex-col lg:w-[40%] w-full gap-8 items-start justify-center">
        <Citation titre="À propos de moi"/>
        <h1 class="lg:text-[80px] text-[50px] font-regular lg:leading-[80px] leading-[60px] border-b-4 pb-4 border-primary"><span class="font-semibold">Bienvenue </span> sur mon  <strong class=" font-normal lg:text-[100px] text-[80px] lg:ml-4 text-primary font-macaroni">portfolio</strong></h1>
        <div class="gap-2 flex flex-col mt-4 text-sm lg:text-base">
          <p>Étudiante en 3ème année en coding & digital innovation à l'IIM Digital School Paris, je suis passionnée par la création de sites web.</p>
          <p>J’aime créer et imaginer des projets <strong>harmonieux</strong> et <strong>agréables visuellement</strong>, tout en restant <strong>intuitifs</strong> et <strong>simples d'utilisation</strong>.</p>
        </div>
        <div class="flex flex-row gap-8">
          <FillBtn href="/projects" titre="Mes projets"/>
        </div>
      </div>
      <div class="flex flex-col lg:w-1/2 w-full lg:items-end relative">
          <div class="img w-fil flex flex-col justify-end lg:items-end lg:h-[70vh] h-fit relative lg:mr-4 mt-8 lg:mt-0">
            <div class="absolute hidden z-10 top-8 -left-14 lg:flex">
              <LogoSpin url="images/Smiley.svg"/>
            </div>
            <div class="lg:w-[30vw] lg:flex hidden w-11/12 bg-primary border-[1.5px] border-primary lg:h-full h-[80vh] absolute top-4 z-[-1] left-4">
            </div>
            <div class="card lg:w-[30vw] w-full border-[1.5px] border-noir lg:h-full h-[80vh] text-noir bg-blanc items-end pb-8 flex hover:translate-x-4 hover:translate-y-4 transition-all ">
              <div class="flex flex-col relative justify-between h-5/6 w-10/12 mx-auto">
                <h2 class="ml-auto font-semibold text-3xl">À propos</h2>
                <div class="flex flex-col gap-3">
                  <p>Curieuse et créative, je m'efforce toujours de développer des design de conception uniques.</p>
                  <p>Depuis longtemps, je suis passionnée par l'art et les activités créatives. Cette passion m'a permis de développer un sens esthétique aiguisé, que j'applique aujourd'hui à la création de sites web plaisants visuellement. En combinant mes compétences artistiques et techniques, je m'efforce de concevoir des expériences en ligne captivantes qui enchantent les utilisateurs dès leur première visite.</p>
                </div>
                <div class="flex flex-row w-full opacity-0 justify-end">
                  <FillBtn href="/projects" titre="Mes projets"/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>

    <section class="w-full lg:h-screen h-fit lg:pt-[9%] pt-[25%] items-center px-[5%] flex lg:flex-row flex-col justify-between">
      <div class="flex flex-col lg:w-[40%] w-full gap-8 items-start justify-center">
        <Citation titre="Me contacter"/>
        <h1 class="lg:text-[80px] text-[50px] font-regular lg:leading-[80px] leading-[60px] border-b-4 pb-4 border-primary"> Me <strong class=" font-normal lg:text-[100px] text-[80px] lg:ml-4 text-primary font-macaroni">contacter</strong></h1>
        <div class="gap-2 flex flex-col mt-4 text-sm lg:text-base">
          <p>Je suis actuellement à la recherche d'une opportunité d'alternance d'un an en tant que <strong>développeur front-end</strong> ou <strong>intégratrice web</strong> à partir de début septembre. </p>
          <p>Si vous avez une offre correspondant à mes compétences et à mes aspirations professionnelles, je serais ravi d'en discuter davantage. </p>
          <p>N'hésitez pas à me contacter si vous êtes intéressé par une collaboration dans le cadre d'une <strong>alternance enrichissante</strong> et <strong>stimulante</strong>.</p>
        </div>
        <div>
          <a target="_blank" href="https://www.linkedin.com/in/lucie-ehrsam/">
            <p class="relative font-inter rounded-full items-center justify-start  px-7 py-2 overflow-hidden transition-all group flex flex-row hover:text-primary lg:text-xl text-base gap-4">
              <img class="hidden " src="../../public/images/ion_arrow-up-red.svg" alt="fleche">
              Linkedin
              <img class="flex" src="../../public/images/ion_arrow-up.svg" alt="fleche">
            </p>
          </a>
        </div>
      </div>
      <div class="flex flex-col lg:w-1/2 w-full lg:items-end relative mb-24 lg:mb-0">
          <div class="img w-fil flex flex-col justify-end lg:items-end lg:h-[70vh] h-fit relative lg:mr-4 mt-8 lg:mt-0">
            <div class="absolute hidden z-10 top-24 -right-14 lg:flex">
              <LogoSpin url="images/Smiley.svg"/>
            </div>
            <div class="lg:w-[30vw] lg:flex hidden w-11/12 bg-primary border-[1.5px] border-primary lg:h-full h-[80vh] absolute top-4 z-[-1] left-4">
            </div>
            <div class="card lg:w-[30vw] w-full border-[1.5px] border-noir lg:h-full h-[65vh] text-noir bg-blanc items-end flex hover:translate-x-4 hover:translate-y-4 transition-all ">
              <div class="flex flex-col relative justify-end items-end mx-auto">
                <img src="images/mwa.png" alt="">
              </div>
            </div>
            <div
              class="absolute hidden z-10 bottom-8 -left-24 lg:flex border-primary rounded-full flex text-sm flex-row gap-6 border-solid border-2 px-7 bg-blanc py-2 w-4/5">
              <img src="images/mail.svg" alt="icone">
              <p>Toujours ouverte à de nouvelles propositions et offres intéressantes.</p>
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
p:hover img:nth-child(1) {
  display: flex;
  transition: all 0.3s ease-in-out;
}

p:hover img:nth-child(2) {
  display: none;
  transition: all 0.3s ease-in-out;
}

</style>
 
<script>
import Nav from '@/components/Nav.vue';
import Citation from '@/components/Citation.vue';
import FillBtn from '@/components/FillBtn.vue';
import LogoSpin from '@/components/LogoSpin.vue';
import GithubPub from '@/components/GithubPub.vue';
// import ArrowBtn from '@/components/ArrowBtn.vue';

export default {

  name: 'HomeView',

  components: {
    Nav,
    Citation,
    FillBtn,
    LogoSpin,
    GithubPub,
    // ArrowBtn
},

}
</script>
