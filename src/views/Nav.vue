<template>
  <div
    class="flex justify-center items-center lowercase font-[chopin] text-white text-4xl w-full h-[75px]"
    style="text-shadow: 2px 1px #675638"
  >
    <a
      class="px-10 hover:animate-pulse hover:text-teal-200"
      @click="routeReplace('shows')"
      href="#"
      >Shows</a
    >
    <a
      class="px-10 hover:animate-pulse hover:text-teal-200"
      @click="routeReplace('listen')"
      href="#"
      >Listen</a
    >
    <img
      src="../assets/images/yingyang.png"
      class="animate-spin-slow h-6 w-6"
      alt=""
    />
    <router-link
      class="p-3 hover:text-teal-200 font-[london] text-5xl font-extrabold capitalize"
      to="/"
      >Rattlesnake Milk</router-link
    >
    <img
      src="../assets/images/yingyang.png"
      class="animate-spin-slow h-6 w-6"
      alt=""
    />
    <a
      class="px-10 hover:animate-pulse hover:text-teal-200"
      @click="routeReplace('watch')"
      href="#"
      >Watch</a
    >
    <a
      class="px-10 hover:animate-pulse hover:text-teal-200"
      @click="routeReplace('contact')"
      href="#"
      >Contact</a
    >
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
const router = useRouter();

function routeReplace(path: string) {
  router.replace({ name: "home", params: { id: path } });
}
</script>
