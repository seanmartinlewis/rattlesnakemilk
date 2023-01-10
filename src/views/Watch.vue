<template>
  <div
    class="w-full h-full absolute top-0 z-20 flex flex-col justify-center items-center overflow-scroll"
  >
    <div class="flex flex-row">
      <Transition>
        <div class="m-10" v-show="route.params.id === 'watch'">
          <iframe
            width="450"
            height="240"
            class="rounded"
            src="https://www.youtube.com/embed/gDemcvb7670"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Transition>
      <Transition>
        <div class="m-10" v-show="route.params.id === 'watch'">
          <iframe
            width="450"
            height="240"
            class="rounded"
            src="https://www.youtube.com/embed/x8cJb8Gqzaw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Transition>
    </div>
    <div class="flex flex-row">
      <Transition>
        <div class="m-10" v-show="route.params.id === 'watch'">
          <iframe
            width="450"
            height="240"
            class="rounded"
            src="https://www.youtube.com/embed/RaivZ9Jlmeo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Transition>
      <Transition>
        <div class="m-10" v-show="route.params.id === 'watch'">
          <iframe
            width="450"
            height="240"
            class="rounded"
            src="https://www.youtube.com/embed/Q0eNWIQA2oA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<style scoped lang="css">
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
