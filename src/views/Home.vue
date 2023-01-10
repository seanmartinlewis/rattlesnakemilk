<template>
  <div class="h-full w-full mt-[-75px]">
    <Transition>
      <BandAnimation />
    </Transition>
    <Listen v-show="route.params.id === 'listen'" />
    <Watch v-show="route.params.id === 'watch'" />
    <Contact v-show="route.params.id === 'contact'" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import BandAnimation from "./BandAnimation.vue";
import Listen from "./Listen.vue";
import Watch from "./Watch.vue";
import Contact from "./Contact.vue";

const route = useRoute();
onMounted(() => {
  console.log(route.params);
});
</script>

<style scoped lang="css">
.v-enter-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
