<template>

  <router-view/>

</template>

<style>

  ::-webkit-scrollbar {
    width: 0;
  }

  .fade-in {
    -webkit-animation: fadeIn 5s;
            animation: fadeIn 5s;
  }

  .fade-in-left {
    -webkit-animation: fadeInLeft 2s;
            animation: fadeInLeft 2s;
  }

  .fade-in-right {
    -webkit-animation: fadeInRight 2s;
            animation: fadeInRight 2s;
  }

  .fade-in-top {
    -webkit-animation: fadeInTop 2s;
            animation: fadeInTop 2s;
  }

  .fade-in-bottom {
    -webkit-animation: fadeInBottom 2s;
            animation: fadeInBottom 2s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-50%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(50%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInTop {
    from {
      opacity: 0;
      transform: translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInBottom {
    from {
      opacity: 0;
      transform: translateY(50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

</style>