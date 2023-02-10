<template>
  <ScrollBar/>
  <Header titre="about me"/>
  <div class="home w-full lg:mt-[15vh] mt-20">
    <div class="top w-full">
      <div class="top w-11/12 mx-auto h-full">
        <div class="perso flex lg:flex-row flex-col justify-between w-full">
          <div class="ecrit fade-in-left lg:w-1/2 w-full flex flex-col items-start justify-between lg:h-[80vh] h-[50vh]">
            <div class="titre lg:text-5xl text-noir justify-between lg:h-[20vh]">
              <div class="flex flex-row relative">
                <h2 class="flex flex-row uppercase font-bold font-staff tracking-wider lg:text-6xl text-3xl relative">welc
                  <div class="relative">
                    o
                    <svg class=" absolute lg:flex -left-[80%] -top-7 rounded-full hidden" xmlns="http://www.w3.org/2000/svg" version="1.1" width="120px" height="120px">
                      <defs>
                          <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                          </linearGradient>
                      </defs>
                      <circle cx="60" cy="60" r="50" stroke-linecap="round" />
                    </svg>
                  </div>
                  me to my
                
                  <svg width="70" height="79" class="lg:flex absolute hidden right-[12vh] top-5 rotate-[20deg]" viewBox="0 0 100 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_7_692)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.9842 3.52762C63.5826 22.879 65.802 58.5118 55.5267 89.875C55.3512 90.4141 55.6447 90.9961 56.1837 91.1716C56.7227 91.347 57.3046 91.0536 57.4801 90.5146C68.045 58.2736 65.5354 21.7 35.1074 1.80701C34.634 1.49614 33.9974 1.62994 33.6855 2.1057C33.3746 2.57911 33.5084 3.21566 33.9842 3.52762Z" fill="#191919"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M56.6967 89.6063C56.3425 87.8356 55.9224 85.6084 55.8674 85.357C54.3759 78.5454 51.9076 72.3302 48.4457 66.2606C48.1653 65.7676 47.5359 65.596 47.0429 65.8764C46.5499 66.1568 46.3784 66.7862 46.6587 67.2791C50.0177 73.1638 52.4131 79.1908 53.859 85.7984C53.9436 86.1835 54.8847 91.1908 55.1511 92.189C55.2584 92.5989 55.4466 92.7975 55.4954 92.8402C55.7461 93.0764 56.0063 93.1256 56.2128 93.1241C56.446 93.1206 56.8295 93.0211 57.1757 92.6441C57.5364 92.2482 58.08 91.2479 58.2377 91.0065C60.6258 87.3707 62.9744 83.1048 65.9446 79.6072C68.7769 76.2716 72.1786 73.6316 76.8038 73.0707C77.3669 73.0029 77.7682 72.4886 77.7004 71.9254C77.6327 71.3623 77.1183 70.9609 76.5552 71.0287C71.3843 71.6568 67.5431 74.5479 64.3779 78.2752C61.4256 81.7525 59.0674 85.9653 56.6967 89.6063Z" fill="#191919"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_7_692">
                    <rect width="74.4193" height="74.4193" fill="white" transform="translate(0.63916 67.5209) rotate(-65.1354)"/>
                    </clipPath>
                    </defs>
                  </svg>

                </h2>
              </div>
              <div class="flex flex-row text-center items-center lg:mt-8 mt-2">
                <h2 class=" uppercase text-staff italic lg:text-6xl text-3xl">web</h2>
                <div class="flex flex-row justify-end lg:w-8/12 w-10/12 items-center">
                  <p class=" font-extralight text-[#797773]">(</p>
                  <p class="lg:w-8/12 w-11/12 lg:text-base text-xs flex">Hi, I'm Lucee, front-end web developer. Currently at IIM Digital School Paris.</p>
                  <p class=" font-extralight text-[#797773]">)</p>
                </div>
              </div>
              <div class="flex flex-row justify-end lg:mt-8 mt-2 relative">
                <h2 class="font-voyage text-primary uppercase font-bold lg:text-6xl text-4xl relative">portfolio
                  <svg width="70" height="79" class="absolute lg:flex hidden right-[8vh] bottom-[2vh] rotate-[210deg]" viewBox="0 0 100 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_7_692)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.9842 3.52762C63.5826 22.879 65.802 58.5118 55.5267 89.875C55.3512 90.4141 55.6447 90.9961 56.1837 91.1716C56.7227 91.347 57.3046 91.0536 57.4801 90.5146C68.045 58.2736 65.5354 21.7 35.1074 1.80701C34.634 1.49614 33.9974 1.62994 33.6855 2.1057C33.3746 2.57911 33.5084 3.21566 33.9842 3.52762Z" fill="#797773"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M56.6967 89.6063C56.3425 87.8356 55.9224 85.6084 55.8674 85.357C54.3759 78.5454 51.9076 72.3302 48.4457 66.2606C48.1653 65.7676 47.5359 65.596 47.0429 65.8764C46.5499 66.1568 46.3784 66.7862 46.6587 67.2791C50.0177 73.1638 52.4131 79.1908 53.859 85.7984C53.9436 86.1835 54.8847 91.1908 55.1511 92.189C55.2584 92.5989 55.4466 92.7975 55.4954 92.8402C55.7461 93.0764 56.0063 93.1256 56.2128 93.1241C56.446 93.1206 56.8295 93.0211 57.1757 92.6441C57.5364 92.2482 58.08 91.2479 58.2377 91.0065C60.6258 87.3707 62.9744 83.1048 65.9446 79.6072C68.7769 76.2716 72.1786 73.6316 76.8038 73.0707C77.3669 73.0029 77.7682 72.4886 77.7004 71.9254C77.6327 71.3623 77.1183 70.9609 76.5552 71.0287C71.3843 71.6568 67.5431 74.5479 64.3779 78.2752C61.4256 81.7525 59.0674 85.9653 56.6967 89.6063Z" fill="#797773"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_7_692">
                    <rect width="74.4193" height="74.4193" fill="white" transform="translate(0.63916 67.5209) rotate(-65.1354)"/>
                    </clipPath>
                    </defs>
                  </svg>
                </h2>
              </div>
            </div>
            <div class="content w-3/4 border-l-[1.5px] border-gris lg:mt-8 -mt-12 text-left lg:pl-8 pl-4 text-gris lg:text-lg text-sm lg:font-semibold flex flex-col">
              <p>Currently a 2nd year student in coding & web development at IIM Digital School Paris. <br> I am passionate about creating websites and applications.</p>
            </div>
            <div class="cta -my-8">
              <Button titre="my projects" href="projects"/>
            </div>
            <div class="arrow">
              <a href="#ref">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Arrow Down Circle</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M176 262.62L256 342l80-79.38M256 330.97V170"/><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="5"/></svg>
              </a>
            </div>
          </div>
          <div class="img fade-in lg:w-2/3 w-full lg:flex hidden flex-col justify-end items-end h-[80vh] relative">
            <div class="logo w-[15vh] h-[15vh] lg:flex hidden absolute top-8 left-[32vh] -rotate-12">
              <img loading="lazy" class="absolute w-[15vh] h-[15vh]" src="images/logo-centre.svg" alt="logo"> 
              <img loading="lazy" class="logo-t-p absolute w-[15vh] h-[15vh]" src="images/logo-contour.svg" alt="logo"> 
              <div class="fond w-[15vh] h-[15vh] bg-white rounded-full"></div>
            </div>
            <div class="card lg:w-[55vh] border-[1.5px] border-noir h-full text-noir">
            <div class="image items-center flex flex-col relative justify-end h-[65vh]">
              <img loading="lazy" class="border-b-[1px] border-noir w-11/12 grayscale hover:grayscale-0 hover:scale-105 transition-all" width="400" height="auto" src="images/mwa.png" alt="moi">
              <div class="flou absolute bg-white bg-opacity-50 backdrop-blur-md w-10/12 bottom-8 h-[13vh] py-3 pl-6 flex flex-row items-start justify-between">
                <div class="titre w-11/12 mx-auto flex flex-col justify-between h-full">
                  <h3 class="text-lg font-bold">See my projects</h3>
                  <h3 class="text-base">( Work in progress )</h3>
                  <!-- <p>lorem ipsum</p> -->
                </div>
                <div class="bas w-11/12 mx-auto flex items-center justify-center mt-6">
                  <router-link to="/"><button><img class="w-10 h-10 border-[1px] border-noir" src="images/fleche.svg" alt="fleche"></button></router-link>
                </div>
              </div>
            </div>
            <div class="desc flex flex-row w-10/12 mx-auto justify-between h-[8vh] pt-6">
              <div class="gauche flex flex-col items-start">
                <h3 class="uppercase text-sm font-bold">stay tuned</h3>
                <p class="text-gris text-base">for new projects</p>
              </div>
              <div class="droite">
                <router-link to="/contact"><button class="uppercase text-white bg-noir px-6 py-3">SEE MORE</button></router-link>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div class="projet lg:h-[90vh] flex lg:flex-row flex-col lg:mt-[10vh]">
          <div class="gauche fade-in-left lg:w-[30%] flex flex-col justify-end h-full">
            <div class="flex flex-col w-full justify-end h-5/6">
              <div class="flex flex-col w-full justify-between h-full">
                <Card url="/images/site_axe_haut.webp" filename="mwa.webp" titre="home page" desc="services"/>
                <div class="cta w-11/12  mt-8 lg:mt-0">
                  <Button href="maquettes/site_axe_maquette.xd" titre="download the model"/>
                </div>
              </div>
            </div>
          </div>
          <div class="centre fade-in-bottom lg:w-[30%] flex flex-col lg:mt-0 mt-20">
            <div class="front flex flex-col w-11/12 items-end relative justify-between h-full">
              <div class="titre flex flex-col w-12/12 mx-auto lg:absolute lg:-top-52 -mt-12 mb-12 lg:mb-0 lg:-mt-0 text-noir">
                <h1 class="lg:text-6xl uppercase font-extrabold text-4xl" id="output">front end</h1>
                <p class=" lg:text-6xl font-semibold font-voyage text-primary text-4xl" id="projet"> <span></span> developer</p>
              </div>
              <div class="content flex items-start text-right border-r-[1px] border-noir pr-4 w-4/5 text-lg mb-8 lg:mb-0">
                <p class="text-gris lg:font-semibold">Realization of an Asian food website, including several pages, such as the home page, a blog or even a page on the history of the brand.</p>
              </div>
            </div>
            <Card url="/images/site_axe_center.webp" filename="mwa.webp" titre="home page" desc="products"/>
          </div>
          <div class="droite mt-8 lg:0 lg:w-[40%] mx-auto flex flex-col justify-center">
            <div class="w-full mx-auto h-3/4 flex flex-col justify-around">
              <div class="titre fade-in-right text-left text-3xl lg:text-5xl text-noir w-11/12 mx-auto flex flex-col">
                <h1 class="font-staff uppercase">marketing</h1>
                <h1 class="font-voyage text-primary">Web Development </h1>
                <h1 class="font-staff uppercase mt-2">design creation</h1>
              </div>
              <div class="content fade-in-right w-11/12  mt-8 lg:mt-0 mx-auto flex flex-col text-left text-gris font-semibold">
                <p class="w-3/4">Realization of the model, graphic charter, marketing strategy, and the entire site, front-end and back-end.</p>
              </div>
              <router-link to="/">
                <div class="cta flex flex-row relative hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="302.089" height="42.668" viewBox="0 0 302.089 42.668">
                    <g id="arrow" transform="translate(1.5 2.119)">
                      <path id="arrow-forward-outline" d="M346.387,142.268,364,161.483m0,0H65.534" transform="translate(-65.534 -142.268)" fill="none" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                      <path id="arrow-forward-outline-2" data-name="arrow-forward-outline" d="M346.387,161.483,364,142.268m0,0H65.534" transform="translate(-65.534 -123.053)" fill="none" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </g>
                  </svg>
                  <div class="cercle w-32 absolute right-0">
                    <img src="images/logo-contour.svg" alt="logo">
                    <div class="inner bg-pink-500 rounded-full w-32 h-32"></div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <div class="skll mt-[10vh] lg:h-[85vh] flex flex-col justify-between">
          <div class="w-11/12 mx-auto flex flex-col h-full">
            <div class="titre fade-in-top text-left mb-[5vh]">
              <h2 class="text-6xl uppercase text-noir font-bold">my <span class="font-voyage capitalize font-normal">skills</span></h2>
            </div>
            <div class="content h-full">
              <div class="fade-in-left h-full justify-between flex flex-col">
                <div class="skills h-full justify-between flex flex-col">
                  <div class="first lg:h-[20vh] mb-[10vh] flex flex-col lg:flex-row">
                    <div class="skills grid lg:grid-cols-4 gap-4 grid-cols-2 lg:w-3/5 justify-between">
                      <Skill titre="html" href="https://developer.mozilla.org/fr/docs/Web/HTML" url="/images/html-logo.svg" skill="html"/>
                      <Skill titre="sass" href="https://sass-lang.com/documentation/" url="/images/sass-logo.svg" skill="sass"/>
                      <Skill titre="tailwind" href="https://v2.tailwindcss.com/docs" url="/images/tailwind-logo.png" skill="tailwind"/>
                      <Skill titre="js" href="https://developer.mozilla.org/fr/docs/Web/JavaScript" url="/images/js-logo.svg" skill="js"/>
                    </div>
                    <div class="lg:w-2/5 flex flex-row items-center lg:my-0 my-8">
                      <p class="border-l-[1px] border-noir pl-6 w-11/12 text-left">Thanks to school and my personal investment, I have developed skills in certain areas of web development, such as certain languages and front-end software, such as html, css, js, sass, Vue.js, or even tailwind;</p>
                    </div>
                  </div>
                  <div class="second lg:h-[20vh] mb-[10vh] flex flex-col lg:flex-row">
                    <div class="lg:w-2/5 flex flex-row items-center lg:mb-0 mb-8">
                      <p class="border-r-[1px] border-noir pr-6 w-11/12 text-right">Or even adobe frameworks like illustrator, photoshop and xd, and finally figma, very useful for working on the creation of website models.</p>
                    </div>
                    <div class="skills grid lg:grid-cols-4 gap-4 grid-cols-2 lg:w-3/5 justify-between">
                      <Skill titre="figma" href="https://help.figma.com/hc/fr" url="/images/figma-logo.svg" skill="figma"/>
                      <Skill titre="Xd" href="https://helpx.adobe.com/fr/xd/help/cloud-documents.html" url="/images/xd-logo.svg" skill="Xd"/>
                      <Skill titre="Illustrator" href="https://helpx.adobe.com/fr/illustrator/user-guide.html" url="/images/ai-logo.png" skill="Illustrator"/>
                      <Skill titre="framer" href="https://www.framer.com/motion/" url="/images/framer-logo.png" skill="framer"/>
                    </div>
                  </div>
                  <div class="third lg:h-[20vh] mb-[10vh] flex flex-col lg:flex-row">
                    <div class="skills grid lg:grid-cols-4 gap-4 grid-cols-2 lg:w-3/5 justify-between">
                      <Skill titre="vue" href="https://vuejs.org/guide/introduction.html" url="/images/vue-logo.png" skill="vue"/>
                      <Skill titre="php" href="https://www.php.net/docs.php" url="/images/php-logo.svg" skill="php"/>
                      <Skill titre="MySQL" href="https://dev.mysql.com/doc/" url="/images/MySQL-logo.png" skill="MySQL"/>
                      <Skill titre="git" href="https://git-scm.com/docæ" url="/images/Git-logo.png" skill="git"/>
                    </div>
                    <div class="lg:w-2/5 flex flex-row items-center lg:my-0 my-8">
                      <p class="border-l-[1px] border-noir pl-6 w-11/12 text-left">Or backend languages and software, such as php and sql.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<style>

  .logo-t-p {
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

  circle {
    fill: none;
    stroke: black;
    stroke-width: 2px;
    animation: circle 5s forwards;
    stroke-dasharray: 472;
    stroke-dashoffset: 472;
  }

  @keyframes circle {
    100%{
      stroke-dashoffset: 0;
    }
  }

</style>

<script>
  import Card from '@/components/Card.vue'
  import Skill from '@/components/Skill.vue'
  import Footer from '@/components/Footer.vue'
  import Button from '@/components/Button.vue'
  import ScrollBar from '@/components/ScrollBar.vue'
  import Header from '@/components/Header.vue'

  export default {

    name: 'HomeView',

    components: {
      Card,
      Skill,
      Footer,
      Button,
      ScrollBar,
      Header
    },

    mounted(){
      let skll = document.querySelector('.skll')
      skll.classList.add("fade-in");

      (window).scroll(function() {

        if ((this).scrollTop() > 50){  
            ('#content').addClass("content_fixed");
        }
        else{
            ('#content').removeClass("content_fixed");
        }
      }); 
    }
  }
</script>
