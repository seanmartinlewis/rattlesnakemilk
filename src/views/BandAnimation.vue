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
        class="h-[80vh] text absolute top-0 z-0"
        src="../assets/images/text.png"
        alt=""
      />
      <img
        class="h-[50vh] absolute z-10"
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
  animation: spin-reverse 15s linear infinite, grow 10s linear infinite;
}

.text {
  animation: spin 30s linear infinite, grow2 20s linear infinite;
}

@keyframes grow {
  0%,
  100% {
    scale: 1;
  }
  50% {
    scale: 0.8;
  }
}

@keyframes grow2 {
  0%,
  100% {
    scale: 0.8;
  }
  50% {
    scale: 0.6;
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
