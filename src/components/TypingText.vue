<template>
  <h1 class="lg:text-6xl w-8 h-8 bg-red-500 uppercase font-extrabold text-4xl" id="output "></h1>
</template>

<script>

  export default {
    name : 'TypingText',

    mounted(){
      //make me a typewriter effect on the id output text who will be front end
      const text = 'front end';
      let index = 0;
      const output = document.getElementById('output');
      const typing = () => {
        output.innerHTML += text[index];
        index++;
        if(index > text.length - 1){
          index = 0;
        }
      }
      setInterval(typing, 200);
    },
  }

</script>
