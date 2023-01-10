<template>
  <div
    class="w-full h-full absolute top-0 z-30 flex justify-center items-center"
  >
    <Transition>
      <div
        v-if="$route.params.id === 'contact'"
        class="w-[80vh] h-[80vh] hover:scale-[1.02] transition ease-in-out duration-1000 bg-[#a4b4c6] font-[ramona] bg-opacity-30 rounded-full p-3 flex flex-col justify-around items-center"
      >
        <div
          class="text-3xl text-white w-full font-[cali] text-center hover:scale-[1.06] transition ease-in-out duration-1000"
          style="text-shadow: 2px 1px #675638"
        >
          BOOKING ~ CONTACT ~ INQUIRIES
        </div>
        <form
          ref="form"
          @submit.prevent="sendEmail"
          class="flex flex-col w-4/5"
        >
          <div class="m-2">
            <label for="name" class="block text-base text-white lowercase"
              >Name</label
            >
            <input
              type="text"
              name="user_name"
              class="block w-full rounded-md shadow-sm sm:text-sm p-1"
              placeholder="crockett"
            />
          </div>
          <div class="m-2">
            <label for="email" class="block text-base text-white lowercase"
              >Email</label
            >
            <input
              type="email"
              name="user_email"
              class="block w-full rounded-md shadow-sm sm:text-sm p-1"
              placeholder="you@example.com"
            />
          </div>
          <div class="m-2">
            <label for="message" class="block text-base text-white lowercase"
              >Message</label
            >
            <textarea
              rows="10"
              name="user_message"
              id="message"
              class="block w-full rounded-md shadow-sm sm:text-sm p-1"
            ></textarea>
          </div>
          <div
            class="w-full text-center text-white text-lg"
            v-if="notification"
          >
            {{ notification }}
          </div>
        </form>
        <button
          class="p-2 font-[rajdhani] bg-orange-300 w-44 hover:scale-[1.1] transition ease-in-out duration-1000 hover:bg-blue-400 rounded-md text-white flex items-center justify-center"
          type="submit"
          @click="sendEmail"
        >
          <img
            v-show="sending"
            src="../assets/images/yingyang.png"
            class="h-4 w-4 animate spin animate-spin relative right-2"
            alt=""
          />
          SEND
          <img
            v-show="sending"
            src="../assets/images/yingyang.png"
            class="h-4 w-4 animate spin animate-spin relative left-2"
            alt=""
          />
        </button>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      notification: null,
      sending: false,
    };
  },
  methods: {
    sendEmail() {
      this.$refs.sending = true;

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
            this.$refs.notification =
              "Success!  Your message was sent.  Rattlesnake Milk will be in touch soon.";
            this.$refs.sending = false;
          },
          (error) => {
            console.log("FAILED...", error.text);
            this.$refs.notification =
              "Success!  Your message was sent.  Rattlesnake Milk will be in touch soon.";
            this.$refs.sending = false;
          }
        );
      setTimeout(() => {
        this.$refs.notification = null;
      }, 4000);
    },
  },
};
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
