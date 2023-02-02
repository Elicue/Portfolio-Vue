<template>
  <div class="projects w-full lg:mt-[15vh] mt-[10vh] overflow-hidden">
    <main class="w-11/12 mx-auto">
      <div class="haut flex flex-row w-full lg:h-[70vh]">
        <div class="gauche fade-in-left w-[30%] hidden lg:flex flex-col relative justify-between items-start">
          <Card url="/images/site_axe_haut.webp" filename="mwa.webp" titre="home page" desc="services"/>
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
        <div class="flex flex-col lg:w-[70%]">
          <div class="titre h-1/5">
            <h1 class="capitalize text-6xl lg:text-[7rem]">my <span class="text-primary font-voyage capitalize">projects</span></h1>
          </div>
          <div class="txt fade-in-right h-full flex flex-row w-full">
          <div class="content w-full flex lg:flex-row flex-col">
            <div class="left lg:w-3/5 flex flex-col justify-between h-full">
              <div class="titre lg:w-1/2">
                <h3 class="lg:text-6xl text-4xl uppercase font-bold">end year</h3>
                <p class="lg:text-5xl text-3xl font-voyage lg:w-full w-1/2 flex lg:flex-row items-center justify-between"><span class="h-[1px] w-20 bg-noir flex"></span>project</p>
              </div>
              <div class="txt w-11/12 justify-around mt-8 lg:mt-0 h-[40vh] flex flex-col mx-auto">
                <div class="text w-full flex">
                  <p class="border-l-[1px] border-noir py-2 pl-4 w-3/4">
                    Realization of an Asian food website, including several pages, such as the home page, a blog or even a page on the history of the brand.
                  </p>
                </div>
                <div class="text w-full flex justify-end">
                  <p class="border-r-[1px] border-noir pr-4 text-right py-2 w-3/4">
                    Realization of the model, graphic charter, marketing strategy, and the entire site, front-end and back-end.
                  </p>
                </div>
                <div class="cta mt-8 lg:mt-0 flex flex-row justify-between w-full">
                  <ButtonTransparent titre="website" href="https://github.com/Elicue/Fujian"/>
                  <Button titre="download the model" href="maquettes/site_axe_maquette.xd"/>
                </div>
              </div>
            </div>
            <div class="right lg:w-2/5 mt-10 lg:mt-0 flex h-full items-end">
              <Card url="/images/site_axe_center.webp" filename="mwa.webp" titre="home page" desc="products"/>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div class="projects w-full h-full lg:mt-[20vh] mt-[5vh]">
        <div class="w-full mb-[15vh] lg:h-[65vh] flex flex-col lg:flex-row items-center relative">
          <div class="lg:w-1/2">
            <Card class="w-11/12 mx-auto" titre="POKEDEX" url="images/pkmn-side.png" desc="interactif"/>
          </div>
          <div class="lg:w-1/2">
            <ProjectCard titre="functionnal" sousTitre="pokedex" desc="Realization of the front of a functional pokédex, with research, possibility of sorting the pokémons thanks to its type, or to the fact that it is captured or not. Back-end made by" name=" Charles-Chrismann." maquette="maquettes/pokedex.xd" github="https://elicue.github.io/Pokedex/" coop="https://github.com/Charles-Chrismann"/>
          </div>
          <Circles/>
        </div>
        <div class="w-full mb-[15vh] lg:h-[65vh] flex flex-col lg:flex-row items-center relative">
          <div class="lg:w-1/2">
            <ProjectCard2 titre="AVENUE DE CAMOËNS" sousTitre="scss project" desc="Project in progress, with the aim of improving our grid and scss capabilities. The goal was to make a page talking about a place in Paris, its location and its history." maquette="maquettes/Avenue de Camoëns.xd" github="https://github.com/Elicue/Avenue-de-Camoens" />
          </div>
          <div class="lg:w-1/2">
            <Card class="w-11/12 mx-auto" titre="home page" url="images/sass-side.png" desc="avenue de camöens"/>
          </div>
          <Circles2/>
        </div>
        <div class="w-full mb-[15vh] lg:h-[65vh] flex flex-col lg:flex-row items-center relative">
          <div  class="lg:w-1/2">
            <Card class="w-11/12 mx-auto" titre="home page" url="images/jadoo-side.png" desc="site de voyage"/>
          </div>
          <div class="lg:w-1/2">
            <ProjectCard titre="journey template" sousTitre="integration" desc="Integration of a model in order to improve my front-end capacities, in particular positions and displays." maquette="maquettes/Travel.fig" github="https://github.com/Elicue/JADOO"/>
          </div>
          <Circles/>
        </div>
        <div class="w-full mb-[15vh] lg:h-[65vh] flex flex-col lg:flex-row items-center relative">
          <div class="lg:w-1/2">
            <ProjectCard2 titre="streaming website" sousTitre="devlab" desc="Project carried out at school, aiming to create a streaming platform, thanks to 'The MovieDB', a database of films and series created by the community. project in collaboration with" name=" Arthur Prud'homme" coop="https://github.com/Arthur-Prudhomme" maquette="https://www.figma.com/file/SeOYP71T6NuSVTvXMOmpBY/Devlab?node-id=0%3A1&t=1MCpeBsXvkH1HtJo-0" github="https://github.com/Arthur-Prudhomme/Devlab" />
          </div>
          <div  class="lg:w-1/2">
            <Card class="w-11/12 mx-auto" titre="home page" url="images/devlab-side.png" desc="site de streaming"/>
          </div>
          <Circles2/>
        </div>
        <div class="w-full mb-[15vh] lg:h-[65vh] flex flex-col lg:flex-row items-center relative">
          <div  class="lg:w-1/2">
            <Card class="w-11/12 mx-auto" titre="ecologica" url="images/bap-side.png" desc="website presentation"/>
          </div>
          <div class="lg:w-1/2">
            <ProjectCard titre="présentation" sousTitre="ecologica" desc="This is a partial redesign of the Ecologica higher education school website. Our redesign includes the application page, the Ecologica page and the form page. This was done as part of a 2nd year project at IIM, with" name=" Arthur Prud'homme," name2=" Théa Blachon," name3="Pierre-louis Sans." maquette="https://www.figma.com/file/ZnngDx1YN8zLqOCcDPKc2t/BAP%2Fperso?node-id=0%3A1&t=uMd5efEBABi9xQrD-0" github="https://github.com/EthraDev/site_static_ecologica" coop="https://github.com/Arthur-Prudhomme" coop2="https://github.com/EthraDev" coop3="https://github.com/Pl83"/>
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
