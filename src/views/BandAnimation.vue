<template>
  <div class="h-full w-full flex justify-center items-center">
    <div class="h-[80vh] w-[80vh] relative flex justify-center items-center">
      <img
        class="h-[80vh] animate-spin-slower absolute top-0 z-0"
        src="../assets/images/psych.png"
        alt=""
      />
      <img
        class="h-[80vh] eyes absolute top-0 z-0"
        src="../assets/images/eyes.png"
        alt=""
      />
      <img
        class="h-[50vh] band absolute z-50"
        src="../assets/images/ratmilk-band.png"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.band {
  animation: grow 20s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.eyes {
  animation: spin-reverse 15s linear infinite;
}

@keyframes grow {
  0%,
  100% {
    scale: 1;
  }
  50% {
    scale: 1.4;
  }
}

@keyframes spin-reverse {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>
