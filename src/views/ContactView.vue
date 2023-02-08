<template >
  <ScrollBar/>
  <div class="w-11/12 mx-auto mt-[15vh]">
    <div class="top flex lg:flex-row flex-col lg:h-[70vh]">
      <div class="left lg:w-1/2 h-[60vh]">
        <div class="titre">
          <h1 class="uppercase font-bold font-staff tracking-wider lg:text-6xl text-3xl">contact <span class=" font-voyage lowercase text-primary">me</span></h1>
        </div>
        <div class="flex items-center justify-center w-11/12 h-full lg:py-24 lg:pb-0 pb-12 sm:py-8 px-4">
          <div class="w-full relative flex items-center justify-center">
              <button aria-label="slide backward" class="absolute z-[90] left-0 ml-5 focus:outline-none" id="prev">
                  <svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
              </button>
              <div class="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <div id="slider" class="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                    <CardSlider desc="functionnal pokedex" href="images/pkmn-side.png" titre="pokedex"/>
                    <CardSlider desc="journey model integration" href="images/jadoo-side.png" titre="jadoo"/>
                    <CardSlider desc="avenue de camoëns" href="images/sass-side.png" titre="scss project"/>
                    <CardSlider desc="streaming website" href="images/devlab-side.png" titre="devlab"/>
                    <CardSlider desc="website presentation" href="images/bap-side.png" titre="ecologica"/>
                    <CardSlider desc="functionnal pokedex" href="images/pkmn-side.png" titre="pokedex"/>
                    <CardSlider desc="journey model integration" href="images/jadoo-side.png" titre="jadoo"/>
                    <CardSlider desc="avenue de camoëns" href="images/sass-side.png" titre="scss project"/>
                  </div>
              </div>
              <button aria-label="slide forward" class="absolute z-[90] right-0 mr-5 focus:outline-none" id="next">
                  <svg class="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
              </button>
          </div>
        </div>
      </div>
      <div class="right lg:h-[60vh] fade-in-right lg:w-1/2 items-center justify-between flex flex-col">
        <div class="titre flex flex-col items-center">
          <h3 class="uppercase text-3xl lg:text-5xl">turn your</h3>
          <p class="flex flex-row items-center font-voyage text-4xl lg:text-5xl text-primary"><span class="w-6 h-[1px] bg-noir flex mx-4"></span>ideas<span class=" mx-4 w-6 h-[1px] bg-noir flex"></span></p>
          <h3 class="uppercase text-3xl lg:text-5xl">into reality</h3>
        </div>
        <div class="cta justify-between lg:w-7/12 w-11/12 mx-auto mt-8 lg:mt-0 flex flex-row">
          <AnimBtnContact titre="creative ideas"/>
          <AnimBtnContact titre="clean design"/>
        </div>
        <div class="txt lg:w-8/12 w-11/12 mx-auto mt-8 lg:mt-0 flex">
          <p class="lg:text-base text-sm">
             Student in Front-End for 2 years, I was first attracted by Creation and Art, but in high school I discovered a passion for web development. I was drawn to the magic of web development, and since then my love for the front-end and creating beautiful interfaces has only grown. I now take more and more pleasure in coding and developing sites.
          </p>
        </div>
      </div>
    </div>

    <div class="form fade-in-bottom relative ">
      <div class="titre mb-[10vh] lg:mt-0 mt-12">
        <h3 class="uppercase text-3xl lg:text-5xl">love to hear from you,</h3>
        <h3 class="font-voyage text-4xl lg:text-5xl text-primary">get in touch</h3>
      </div>
      <div class="absolute hidden justify-end w-7/12 flex top-[10vh]">
        <svg class="rotate-[50deg]" width="200" height="200" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0948 80.449C24.4487 79.3153 24.7479 78.3369 24.9033 77.819C25.8413 74.6653 29.1217 67.1149 29.6137 61.0952C29.9907 56.5028 28.7505 52.7851 24.5177 51.7434C20.6706 50.7967 16.786 53.1361 13.3445 57.3516C5.93792 66.4243 0.321149 84.0804 0.00175015 89.8526C-0.0327794 90.4827 0.447754 91.0208 1.07792 91.0553C1.70521 91.0899 2.24327 90.6093 2.2778 89.9792C2.58569 84.44 8.00111 67.5033 15.1113 58.7932C17.891 55.3892 20.8662 53.1937 23.9739 53.9591C27.0412 54.713 27.6139 57.5789 27.3406 60.9081C26.8629 66.7666 23.6315 74.0984 22.7164 77.1687C22.1438 79.0937 19.7527 86.3737 19.698 87.047C19.6289 87.8901 20.2303 88.1721 20.4346 88.2498C20.5929 88.3102 21.4014 88.5606 21.905 87.6542C29.0929 74.7343 49.0654 59.8838 70.3414 53.9648C91.4303 48.0977 113.866 51.0471 126.262 73.8165C126.564 74.3689 127.258 74.5732 127.81 74.2739C128.363 73.9718 128.567 73.2784 128.265 72.7259C115.276 48.8688 91.8245 45.6201 69.7313 51.7664C51.1112 56.9458 33.5041 68.8298 24.0948 80.449Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M126.459 72.1762C123.97 71.1575 121.524 70.0641 118.955 69.2383C112.109 67.037 104.53 66.1996 97.4257 67.4657C96.8042 67.5779 96.3926 68.1707 96.502 68.7894C96.6142 69.4109 97.207 69.8224 97.8256 69.713C104.568 68.5074 111.761 69.3217 118.256 71.4107C121.196 72.3574 123.976 73.6609 126.845 74.7917C126.989 74.8464 128.22 75.3759 128.511 75.4162C129.187 75.514 129.53 75.1227 129.665 74.9213C129.78 74.7544 129.878 74.527 129.886 74.222C129.892 73.9717 129.791 73.494 129.521 72.884C128.661 70.9273 125.999 66.6514 125.636 65.9033C121.478 57.3284 119.05 48.6529 116.264 39.5831C116.077 38.9817 115.439 38.6421 114.837 38.8263C114.236 39.0105 113.899 39.6493 114.083 40.2507C116.903 49.4356 119.375 58.2176 123.585 66.896C123.832 67.4111 125.36 70.1878 126.459 72.1762Z" fill="black"/>
        </svg>
      </div>
      <!-- <form action="">
        <section class="flex flex-row justify-between w-full">
          <div class="gauche flex flex-col w-1/3">
            <InputForm label="your name" for="name" placeholder="- your name -" type="text" name="name" id="name"/>
            <InputForm label="your mail" for="mail" placeholder="- email@example.com -" type="email" name="mail" id="mail"/>
          </div>
          <div class="droite flex flex-col w-2/3 ml-16">
            <InputForm label="your project" for="project" placeholder="- type of project -" type="text" name="project" id="project"/>
            <div class="flex flex-col">
              <label class="capitalize" for="budget">your budget</label>
              <select class="bg-[#F2EFEF] rounded-2xl px-4 py-2 capitalize my-4 focus:outline-none w-full" name="budget" id="budget">
                <option value="">- Please choose a budget -</option>
                <option value="">jsp</option>
                <option value="">la non plus</option>
                <option value="">encore moins</option>
              </select>
            
            </div>
          </div>
        </section>
        <div class="bas">
          <div>
            <label for="message">your message</label>
            <textarea placeholder="type your message here..." name="message" id="message" cols="30" rows="10" required></textarea>
          </div>
        </div>
        <div class="cta">
          <button>send request</button>
        </div>
      </form> -->
    </div>
  </div>
  <Footer/>
</template>

<script>
import CardSlider from "@/components/CardSlider.vue";
import Footer from "@/components/Footer.vue";
import AnimBtnContact from "@/components/AnimBtnContact.vue";
import ScrollBar from "@/components/ScrollBar.vue";

  export default {
    name: 'ContactView',

    mounted(){
      let defaultTransform = 0;
      const next = document.getElementById("next");
      const prev = document.getElementById("prev");

      function goNext() {
        defaultTransform = defaultTransform - 500;
        var slider = document.getElementById("slider");
        if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
        slider.style.transform = "translateX(" + defaultTransform + "px)";
      }

      next.addEventListener("click", goNext);
      function goPrev() {
        var slider = document.getElementById("slider");
        if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
        else defaultTransform = defaultTransform + 500;
        slider.style.transform = "translateX(" + defaultTransform + "px)";
      }

      prev.addEventListener("click", goPrev);

    },

    components : {
      CardSlider,
      Footer,
      AnimBtnContact,
      ScrollBar,
}
  }

</script>