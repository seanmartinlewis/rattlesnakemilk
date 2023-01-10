<template>
  <div
    class="w-full h-full absolute top-0 z-30 flex justify-center items-center"
  >
    <div
      class="w-[40vw] h-[50vh] bg-teal-300 bg-opacity-90 rounded-lg p-3 flex flex-col justify-around"
    >
      <div class="text-3xl text-white font-[cali] w-full text-center">
        Contact
      </div>
      <form ref="form" @submit.prevent="sendEmail" class="flex flex-col">
        <div class="mx-2">
          <label for="name" class="block text-lg text-white font-medium"
            >Name</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="user_name"
              class="block w-full rounded-md shadow-sm sm:text-sm p-1"
              placeholder="crockett"
            />
          </div>
        </div>
        <div class="mx-2">
          <label for="email" class="block text-lg text-white font-medium"
            >Email</label
          >
          <div class="mt-1">
            <input
              type="email"
              name="user_email"
              class="block w-full rounded-md shadow-sm sm:text-sm p-1"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div class="mx-2">
          <label for="message" class="block text-lg text-white font-medium"
            >Message</label
          >
          <div class="mt-1">
            <textarea
              rows="10"
              name="user_message"
              id="message"
              class="block w-full rounded-md shadow-sm sm:text-sm p-1"
            ></textarea>
          </div>
        </div>
        <input type="submit" value="Send" />
      </form>
      <button
        class="p-2 bg-teal-700 hover:bg-teal-600 rounded-md text-white"
        type="submit"
        @click="sendEmail"
      >
        SEND
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_0shh71l",
          "template_84c0frl",
          this.$refs.form as HTMLFormElement,
          "D3eKZUDrPpbhaRj2a"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
