<template>
  <div
    class="w-full h-full flex flex-col justify-center items-center overflow-scroll"
  >
    <TransitionGroup name="v">
      <div v-if="showImages">
        <div class="flex flex-row">
          <div class="m-5">
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
          <div class="m-5">
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
        </div>
        <div class="flex flex-row">
          <div class="m-5">
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
          <div class="m-5">
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
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";

const showImages = ref(false);

onMounted(() => {
  showImages.value = true;
});
</script>
<style scoped lang="css">
.v-enter-active,
.v-leave-active {
  transition: opacity 3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
