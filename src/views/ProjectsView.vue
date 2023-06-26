<template>
  <GithubPub />
  <Nav />
  <div class="flex flex-col w-full">
    <section
      class="w-full lg:gap-0 gap-[15vh] lg:h-screen h-fit lg:pt-[9%] pt-[25%] items-center px-[5%] flex lg:flex-row flex-col justify-between">
      <div class="flex h-fit flex-col lg:w-[40%] w-full gap-8 items-start justify-center">
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
      <div class="lg:flex flex-col lg:w-1/2 w-full hidden justify-start items-end relative">
        <div class="relative flex w-full hover -top-12">
          <ProjectCard titre="&nbsp;" desc="&nbsp;" bold="&nbsp;" url="images/3ECS.png"
            class="absolute lg:block rotate-[24deg] right-24 w-7/12 top-12 z-10" />
          <ProjectCard titre="&nbsp;" desc="&nbsp;" bold="&nbsp;" url="images/florela-side.jpg"
            class="lg:w-7/12 w-full h-min z-[1]" />
        </div>
        <div
          class="absolute hidden z-10 -bottom-2 -right-8 lg:flex border-primary rounded-full flex text-sm flex-row gap-6 border-solid border-2 px-7 bg-white py-2 w-1/2">
          <img src="images/Window.svg" alt="icone">
          <p>Créer des expériences mémorables et captivantes.</p>
        </div>

      </div>
    </section>

    <section class="w-full lg:gap-32 gap-24 h-fit lg:pt-[9%] pt-[25%] items-center px-[5%] flex flex-col justify-between">

      <div class="flex flex-col-reverse lg:flex-row w-full items-center gap-12">
        <ProjectCard url="images/zot-side.png" class="w-full lg:w-1/2 h-full" />
        <div class="flex flex-col w-full lg:w-1/2 gap-4">
          <DescProjet titre="Intégration de" type="Site web" main="maquette"
            desc="Dans le cadre d'une recherche de stage, j'ai eu l'opportunité de faire une intégration de maquette en HTML/CSS pour une agence digitale à Paris"
            date="05 juin - 23 juin 2023" />
          <div class="flex flex-row gap-10">
            <a target="blank" href="https://zot.wesa.fr/">
              <p class="relative font-inter rounded-full items-center cursor-pointer justify-start py-2 overflow-hidden transition-all group flex flex-row hover:text-primary lg:text-xl text-base gap-4">
                <img class="hidden " src="../../public/images/ion_arrow-up-red.svg" alt="fleche">
                Site en ligne
                <img class="flex" src="../../public/images/ion_arrow-up.svg" alt="fleche">
              </p>
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row w-full items-center gap-12">
        <div class="flex flex-col w-full lg:w-1/2 gap-4">
          <DescProjet2 titre="Intégration de" type="Site web" main="maquette"
            desc="Projet réalisé durant mon stage. Intégration de maquette sur Joomla 4 en utilisant Bootstrap. Projet en collaboration avec "
            collab=" Théa Blachon" coop="https://github.com/EthraDev" date="12 avril - 15 juin 2023" />
            <div class="flex flex-row gap-10 justify-end">
            <a target="blank" href="https://3ecs.wesa.fr/index.php">
              <p
                class="relative font-inter rounded-full items-center cursor-pointer justify-start py-2 overflow-hidden transition-all group flex flex-row hover:text-primary lg:text-xl text-base gap-4">
                <img class="hidden " src="../../public/images/ion_arrow-up-red.svg" alt="fleche">
                Site en ligne
                <img class="flex" src="../../public/images/ion_arrow-up.svg" alt="fleche">
              </p>
            </a>
          </div>
        </div>
        <ProjectCard url="images/3ECS-side.png" class="w-full lg:w-1/2 h-full" />
      </div>

      <div class="flex flex-col-reverse lg:flex-row w-full items-center gap-12">
        <ProjectCard url="images/gs-side.jpg" class="w-full lg:w-1/2 h-full" />
        <div class="flex flex-col w-full lg:w-1/2 gap-4">
          <DescProjet titre="Intégration de" type="Site web" main="maquette"
            desc="Dans le cadre d'une recherche de stage, j'ai eu l'opportunité de faire une intégration de maquette en HTML/CSS pour une agence digitale à Paris"
            date="15 mars - 19 mars 2023" />
          <div class="flex flex-row gap-10">
            <a target="blank" href="https://github.com/Elicue/GS-EXPERTISE">
              <p class="relative font-inter rounded-full items-center cursor-pointer justify-start py-2 overflow-hidden transition-all group flex flex-row hover:text-primary lg:text-xl text-base gap-4">
                <img class="hidden " src="../../public/images/ion_arrow-up-red.svg" alt="fleche">
                Github
                <img class="flex" src="../../public/images/ion_arrow-up.svg" alt="fleche">
              </p>
            </a>
            <a target="blank" href="https://gs-expertise-delta.vercel.app/">
              <p class="relative font-inter rounded-full items-center cursor-pointer justify-start py-2 overflow-hidden transition-all group flex flex-row hover:text-primary lg:text-xl text-base gap-4">
                <img class="hidden " src="../../public/images/ion_arrow-up-red.svg" alt="fleche">
                Site en ligne
                <img class="flex" src="../../public/images/ion_arrow-up.svg" alt="fleche">
              </p>
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row w-full items-center gap-12">
        <div class="flex flex-col w-full lg:w-1/2 gap-4">
          <DescProjet2 titre="Réalisation de" type="Maquette" main="maquette"
            desc="Réalisation d'une maquette pour un fleuriste, projet personnel réalisé  sur Figma."
            date="20 avril 2023" />
          <div class="flex flex-row gap-10 justify-end">
            <!-- <a target="blank" href="https://github.com/Elicue/GS-EXPERTISE">
              <p class="relative font-inter rounded-full items-center cursor-pointer justify-start py-2 overflow-hidden transition-all group flex flex-row hover:text-primary lg:text-xl text-base gap-4">
                <img class="hidden " src="../../public/images/ion_arrow-up-red.svg" alt="fleche">
                Github
                <img class="flex" src="../../public/images/ion_arrow-up.svg" alt="fleche">
              </p>
            </a> -->
          </div>
        </div>
        <ProjectCard url="images/florela-side.png" class="w-full lg:w-1/2 h-full" />
      </div>

      <div class="flex flex-col-reverse lg:flex-row w-full items-center gap-12">
        <ProjectCard url="images/devlab-side.png" class="w-full lg:w-1/2 h-full" />
        <div class="flex flex-col w-full lg:w-1/2 gap-4">
          <DescProjet titre="Site de" type="Site web" main="streaming"
            desc="Projet réalisé à l'école, visant à créer une plateforme de streaming, grâce à 'The MovieDB', une base de données de films et séries créée par la communauté. Projet en collaboration avec "
            collab="Arthur Prud'homme" coop="https://github.com/Arthur-Prudhomme" date="2 janvier - 10 janvier 2023" />
          <div class="flex flex-row gap-10">
            <a target="blank" href="https://github.com/Elicue/Devlab">
              <p
                class="relative font-inter rounded-full items-center cursor-pointer justify-end py-2 overflow-hidden transition-all group flex flex-row hover:text-primary lg:text-xl text-base gap-4">
                <img class="hidden " src="../../public/images/ion_arrow-up-red.svg" alt="fleche">
                Github
                <img class="flex" src="../../public/images/ion_arrow-up.svg" alt="fleche">
              </p>
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row w-full items-center gap-12">
        <div class="flex flex-col w-full lg:w-1/2 gap-4">
          <DescProjet2 titre="Site d'" type="Site web" type2="Maquette" main="Ecologica"
            desc="Il s'agit d'une refonte partielle du site Web de l'école d'enseignement supérieur Ecologica. Notre refonte comprend la page de candidature, la page d'accueil et la page de formulaire. Cela a été fait dans le cadre d'un projet de 2ème année à l'IIM, avec "
            collab=" Théa Blachon, " coop="https://github.com/EthraDev" collab2="Arthur Prud'homme, " coop2="https://github.com/Arthur-Prudhomme" collab3="et Pierre-Louis Sans" coop3="https://github.com/Pl83" date="15 décembre 2023" />
            <div class="flex flex-row gap-10 justify-end">
            <a target="blank" href="https://github.com/EthraDev/site_static_ecologica">
              <p
                class="relative font-inter rounded-full items-center cursor-pointer justify-start py-2 overflow-hidden transition-all group flex flex-row hover:text-primary lg:text-xl text-base gap-4">
                <img class="hidden " src="../../public/images/ion_arrow-up-red.svg" alt="fleche">
                Github
                <img class="flex" src="../../public/images/ion_arrow-up.svg" alt="fleche">
              </p>
            </a>
          </div>
        </div>
        <ProjectCard url="images/bap-side.png" class="w-full lg:w-1/2 h-full" />
      </div>
    </section>
  </div>
</template>

<style scoped >
@media (min-width: 1024px) {
  .-top-12:hover .absolute {
    transform: translateX(10%) rotate(32deg);
    transition: all 0.5s ease-in-out;
  }

  .-top-12:hover .h-min {
    transform: translateX(-10%) rotate(-12deg);
    transition: all 0.5s ease-in-out;
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
import GithubPub from '@/components/GithubPub.vue';
import Citation from '@/components/Citation.vue';
import FillBtn from '@/components/FillBtn.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import DescProjet from '@/components/DescProjet.vue';
import DescProjet2 from '@/components/DescProjet2.vue';

export default {

  name: 'ProjectsView',

  components: {
    Nav,
    GithubPub,
    Citation,
    FillBtn,
    ProjectCard,
    DescProjet,
    DescProjet2

  },

}
</script>
