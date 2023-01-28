<template >
  <div class="w-full mt-[15vh]">
    
  <main>
    <div class="haut">
      <div class="titre fade-in-top">
        <h1>contact <span>me</span></h1>
      </div>
      <div class="content">
        <div class="gauche fade-in-left">
          <div class="card">
              <div class="titre">
                <!-- <h3>lorem ipsum</h3> -->
              </div>
              <div class="image">
                <img loading="lazy" width="500px" src="images/desk.webp" alt="project">
              </div>
              <div class="desc">
                <div class="left">
                  <!-- <p>lorem ipsum</p> -->
                  <!-- <h3>lorem ipsum</h3> -->
                </div>
              </div>
          </div>
        </div>
        <div class="droite fade-in-right">
          <div class="titre">
            <h3>turn your</h3>
            <p><span></span>ideas<span></span></p>
            <h3>into reality</h3>
          </div>
          <div class="cta">
            <button>creative ideas</button>
            <button>clean design</button>
          </div>
          <div class="txt">
            <p>
              J'étudie le front-end depuis 2 ans.
              D'abord attirée par la Création et l'Art, c'est pendant le lycée que je me suis découverte une passion pour le développement web.
              Grâce à la spécialité N.S.I, j'ai découvert la magie du dévelopement web, et mon amour pour le front-end et la réalisation de belles interfaces.
              Depuis, je prend de plus en plus de plaisir à coder et développer des sites. 
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="form fade-in-bottom">
      <div class="titre">
        <h3>love to hear from you,</h3>
        <h3>get in touch <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M94.6785 31.4698C75.9099 66.3698 38.4175 80.5585 3.59528 60.9107C2.43603 60.2565 0.965988 60.6655 0.311743 61.8104C-0.342503 62.9758 0.0664445 64.4478 1.22569 65.1021C38.5504 86.181 78.8049 71.1539 98.9229 33.7597C99.5526 32.5943 99.1131 31.1221 97.9416 30.4883C96.7701 29.8749 95.3082 30.3045 94.6785 31.4698Z" fill="black"/>
          <path d="M32.8988 45.9428C36.7758 45.9428 39.9187 42.7999 39.9187 38.9229C39.9187 35.0459 36.7758 31.9031 32.8988 31.9031C29.0218 31.9031 25.8789 35.0459 25.8789 38.9229C25.8789 42.7999 29.0218 45.9428 32.8988 45.9428Z" fill="black"/>
          <path d="M61.9608 38.4754C65.762 38.4754 68.8436 35.394 68.8436 31.5927C68.8436 27.7915 65.762 24.7101 61.9608 24.7101C58.1596 24.7101 55.0781 27.7915 55.0781 31.5927C55.0781 35.394 58.1596 38.4754 61.9608 38.4754Z" fill="black"/>
          </svg>
           </h3>
      </div>
      <form action="">
        <section>
          <div class="gauche">
            <div>
              <label for="name">your name</label>
              <input placeholder="- your name -" type="text" name="name" id="name" required>
            </div>
            <div>
              <label for="mail">your mail</label>
              <input placeholder="- email@example.com -" type="email" name="mail" id="mail" required>
            </div>
          </div>
          <div class="droite">
            <div>
              <label for="project"> your project </label>
              <input placeholder="- type of project -" type="text" name="project" id="project" required>
            </div>
            <div>
              <label for="budget">your budget</label>
              <select name="budget" id="budget">
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
      </form>
    </div>
  </main>
  </div>
</template>

<script>

  export default {
    name: 'ContactView',
  }

</script>