<template>
  <div
    class="w-full h-full absolute top-0 z-30 flex justify-center flex-row items-center"
  >
    <Transition>
      <a
        href="https://open.spotify.com/album/33Fto6rNNiO5hqGTEUL3SG?si=wAJmG1TWSFeoxPSby7gDxA"
        target="_blank"
        v-show="route.params.id === 'listen'"
        class="hover:scale-[1.1] transition ease-in-out duration-1000"
      >
        <img
          class="w-[20vw] m-5"
          src="../assets/images/album-covers/snake-rattle-and-roll.png"
          alt=""
        />
      </a>
    </Transition>
    <Transition>
      <a
        href="https://open.spotify.com/album/1Xg9ZB1s3zv4Zr6Qzp99f8?si=CTd87s6mSP-QJkyPe25rJw"
        target="_blank"
        v-show="route.params.id === 'listen'"
        class="hover:scale-[1.1] transition ease-in-out duration-1000"
      >
        <img
          class="w-[20vw] m-5"
          src="../assets/images/album-covers/chicken-fried-snake.png"
          alt=""
        />
      </a>
    </Transition>
    <Transition>
      <a
        href="https://open.spotify.com/album/3UrUNyumXYfBUynAvcyMC9?si=xYlBsWwQTui9GAInh5fo8A"
        target="_blank"
        v-show="route.params.id === 'listen'"
        class="hover:scale-[1.1] transition ease-in-out duration-1000"
      >
        <img
          class="w-[20vw] m-5"
          src="../assets/images/album-covers/self-titled.png"
          alt=""
        />
      </a>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<style scoped lang="css">
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
