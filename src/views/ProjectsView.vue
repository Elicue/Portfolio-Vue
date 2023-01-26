<template>
  <div class="projects w-full mt-[15vh]  overflow-hidden">
    <main class="w-11/12 mx-auto">
      <div class="haut flex flex-row w-full h-[70vh]">
        <div class="gauche fade-in-left w-[30%] flex flex-col relative justify-between items-start">
          <Card url="/images/site_axe_haut.webp" filename="mwa.webp" titre="home page" desc="des services"/>
          <div class="logo absolute bottom-12 right-0">
            <logo/>
            <div class="fond"></div>
          </div>
          <div class="arrow ">
            <a href="#projet">
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-20 h-20" viewBox="0 0 512 512"><title>Arrow Down Circle</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M176 262.62L256 342l80-79.38M256 330.97V170"/><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="5"/></svg>
            </a>
          </div>
        </div>
        <div class="flex flex-col w-[70%]">
          <div class="titre h-1/5">
            <h1 class="uppercase text-[5rem] font-bold">my <span>projects</span></h1>
          </div>
          <div class="txt fade-in-right h-full flex flex-row w-full">
          <div class="content w-full flex flex-row">
            <div class="left w-3/5 flex flex-col justify-between h-full">
              <div class="titre w-1/2">
                <h3 class="text-6xl uppercase font-bold">end year</h3>
                <p class="text-5xl font-voyage flex flex-row items-center justify-between"><span class="h-[1px] w-20 bg-noir flex"></span>project</p>
              </div>
              <div class="txt w-11/12 justify-around h-[40vh] flex flex-col mx-auto">
                <div class="text w-full flex">
                  <p class="border-l-[1px] border-noir py-2 pl-4 w-3/4">
                    Réalisation d'un site web de nourriture asiatique, comprenant plusieurs pages, telles que celle d'accueil, un blog ou encore une page sur l'histoire de la marque.
                  </p>
                </div>
                <div class="text w-full flex justify-end">
                  <p class="border-r-[1px] border-noir pr-4 text-right py-2 w-3/4">
                    Réalisation de la maquette, charte graphique, stratégie marketing, et ensemble du site, front-end et back-end.
                  </p>
                </div>
                <div class="cta flex flex-row justify-between w-full">
                  <ButtonTransparent titre="website" href="https://github.com/Elicue/Fujian"/>
                  <Button titre="telecharger la maquette" href="maquettes/site_axe_maquette.xd"/>
                </div>
              </div>
            </div>
            <div class="right w-2/5 flex h-full items-end">
              <Card url="/images/site_axe_center.webp" filename="mwa.webp" titre="home page" desc="des produits"/>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div class="projects w-full h-full mt-[20vh]">
        <div class="w-full mb-[15vh] h-[65vh] flex flex-row items-center relative">
          <div  class="w-1/2">
            <Card class="w-11/12 mx-auto" titre="POKEDEX" url="images/pokedex.png" desc="interactif"/>
          </div>
          <div class="w-1/2">
            <ProjectCard titre="functionnal" sousTitre="pokedex" desc="Réalisation du front d'un pokédex fonctionnel, avec recherche, possibilité de trier les pokémons grâce à son type, ou au fait qu'il soit capturé ou non. Back-end réalisé par" name=" Charles-Chrismann." maquette="maquettes/pokedex.xd" github="https://elicue.github.io/Pokedex/" coop="https://github.com/Charles-Chrisman"/>
          </div>
          <Circles/>
        </div>
        <div class="w-full mb-[15vh] h-[65vh] flex flex-row items-center relative">
          <div class="w-1/2">
            <ProjectCard2 titre="AVENUE DE CAMOËNS" sousTitre="projet scss" desc="Projet réalisé en cours en cours, dans le but d'améliorer nos capacitées en grid et scss. Le but était de faire une page parlant d'un lieu dans Paris, sa localisation et son histoire." maquette="maquettes/Avenue de Camoëns.xd" github="https://github.com/Elicue/Avenue-de-Camoens" />
          </div>
          <div  class="w-1/2">
            <Card class="w-11/12 mx-auto" titre="home page" url="images/scss.webp" desc="avenue de camöens"/>
          </div>
          <Circles2/>
        </div>
        <div class="w-full mb-[15vh] h-[65vh] flex flex-row items-center relative">
          <div  class="w-1/2">
            <Card class="w-11/12 mx-auto" titre="home page" url="images/jadoo.webp" desc="site de voyage"/>
          </div>
          <div class="w-1/2">
            <ProjectCard titre="INTÉGRATION" sousTitre="de maquette" desc="Intégration d'une maquette dans le but d'améliorer mes capacités en front-end, notamment les position et les displays." maquette="maquettes/Travel.fig" github="https://github.com/Elicue/JADOO"/>
          </div>
          <Circles/>
        </div>
        <div class="w-full mb-[15vh] h-[65vh] flex flex-row items-center relative">
          <div class="w-1/2">
            <ProjectCard2 titre="site de streaming" sousTitre="devlab" desc="Projet effectué dans un cadre scolaire, visant à réaliser une plateforme de streaming, grâce à 'The MovieDB', une base de données de films et de séries créée par la communauté. projet en collaboration avec" name=" Arthur Prud'homme" coop="https://github.com/Arthur-Prudhomme" maquette="https://www.figma.com/file/SeOYP71T6NuSVTvXMOmpBY/Devlab?node-id=0%3A1&t=1MCpeBsXvkH1HtJo-0" github="https://github.com/Arthur-Prudhomme/Devlab" />
          </div>
          <div  class="w-1/2">
            <Card class="w-11/12 mx-auto" titre="home page" url="images/devlab.png" desc="site de streaming"/>
          </div>
          <Circles2/>
        </div>
        <div class="w-full mb-[15vh] h-[65vh] flex flex-row items-center relative">
          <div  class="w-1/2">
            <Card class="w-11/12 mx-auto" titre="ecologica" url="images/ecologica.png" desc="site présentation"/>
          </div>
          <div class="w-1/2">
            <ProjectCard titre="présentation" sousTitre="ecologica" desc="Il s'agit d'une refonte partielle du site internet de l'école du supérieur Ecologica. Notre refonte comprend la page de candidature, la page Ecologica et la page formulaire. Cela a été réalisé dans le cadre d'un projet de 2éme année à l'IIM, avec" name=" Arthur Prud'homme," name2=" Théa Blachon," name3="Pierre-louis Sans." maquette="https://www.figma.com/file/ZnngDx1YN8zLqOCcDPKc2t/BAP%2Fperso?node-id=0%3A1&t=uMd5efEBABi9xQrD-0" github="https://github.com/EthraDev/site_static_ecologica" coop="https://github.com/Arthur-Prudhomme" coop2="https://github.com/EthraDev" coop3="https://github.com/Pl83"/>
          </div>
          <Circles/>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import Footer from '@/components/Footer.vue';
  import Card from '@/components/Card.vue';
  import Button from '@/components/Button.vue';
  import ButtonTransparent from '@/components/ButtonTransparent.vue';
  import Logo from '@/components/Logo.vue';
  import ProjectCard from '@/components/ProjectCard.vue';
  import ProjectCard2 from '@/components/ProjectCard2.vue';
  import Circles from '@/components/Circles.vue';
  import Circles2 from '@/components/Circles2.vue';

  export default {

    name: 'ProjectsView',

    components: {
      Card,
      Button,
      Footer,
      ButtonTransparent,
      Logo,
      ProjectCard,
      ProjectCard2,
      Circles,
      Circles2,
    },
  }
</script>
