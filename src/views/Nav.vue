<template>
  <div
    class="flex justify-center items-center z-[1000] relative top-0 flex-col lowercase font-[cardo] text-white text-2xl w-full h-[75px]"
    style="text-shadow: 2px 1px #675638"
  >
    <div>
      <!-- <router-link
        class="p-3 mt-3 hover:text-teal-200 text-3xl font-[london] text-3xl capitalize"
        to="/"
        >Rattlesnake Milk</router-link
      > -->
    </div>
    <div>
      <a
        class="px-10 hover:text-teal-300"
        @click="routeReplace('shows')"
        :class="
          route.params.id === 'shows'
            ? 'underline animate-pulse underline-offset-2'
            : ''
        "
        href="#"
        >Shows</a
      >
      <a
        class="px-10 hover:text-teal-300"
        :class="
          route.params.id === 'listen'
            ? 'underline animate-pulse underline-offset-2'
            : ''
        "
        @click="routeReplace('listen')"
        href="#"
        >Listen</a
      >
      <a
        class="px-10 hover:text-teal-300"
        :class="
          route.params.id === 'watch'
            ? 'underline animate-pulse underline-offset-2'
            : ''
        "
        @click="routeReplace('watch')"
        href="#"
        >Watch</a
      >
      <a
        class="px-10 hover:text-teal-300"
        :class="
          route.params.id === 'contact'
            ? 'underline animate-pulse underline-offset-2'
            : ''
        "
        @click="routeReplace('contact')"
        href="#"
        >Contact</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

function routeReplace(path: string) {
  router.replace({ name: "home", params: { id: path } });
}
</script>
