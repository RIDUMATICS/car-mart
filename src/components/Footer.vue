<template>
  <footer class="text-black py-10">
    <div class="container flex flex-col md:flex-row">
      <div class="w-full md:flex-1">
        <ul>
          <li>
            <h3 class="font-semibold text-2xl py-2 md:text-4xl">
              Let's get in <span class="text-primary">touch.</span>
            </h3>
          </li>
          <li class="py-2">
            <p class="flex items-center">
              <ClockIcon class="w-5 h-5 mr-2 text-fresh-eggplant-500" />
              Monday to Sunday: 24/7
            </p>
          </li>
          <li class="py-2">
            <p class="flex items-center">
              <DeviceMobileIcon class="w-5 h-5 mr-2 text-pirate-gold-500" />
              +234 812 268 9423
            </p>
          </li>
          <li class="py-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:support@send-it.com"
              class="flex items-center"
            >
              <MailIcon class="w-5 h-5 text-primary-500 mr-2" />
              support@send-it.com
            </a>
          </li>
        </ul>
      </div>
      <div class="md:mx-10">
        <ul>
          <li
            class="uppercase font-semibold py-2 mt-5 mb-4 border-t border-b md:m-0 md:border-0"
          >
            our pages
          </li>
          <li class="py-2 md:px-2">Home</li>
          <li class="py-2 md:px-2">About</li>
          <li class="py-2 md:px-2">Contact</li>
          <li class="py-2 md:px-2">Profile</li>
        </ul>
      </div>
      <div class="md:ml-10">
        <ul>
          <li
            class="uppercase font-semibold py-2 mt-5 mb-4 border-t border-b md:m-0 md:border-0"
          >
            transparency
          </li>
          <li class="py-2 md:px-2">Help and contact</li>
          <li class="py-2 md:px-2">Privacy Policy</li>
          <li class="py-2 md:px-2">Terms and Conditions</li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
import { ClockIcon, DeviceMobileIcon, MailIcon } from "@heroicons/vue/outline";
export default {
  components: {
    ClockIcon,
    DeviceMobileIcon,
    MailIcon,
  },
};
</script>
<style scoped>
footer {
  background: rgba(0, 0, 0, 0) url("~@/assets/images/footer-banner.png")
    repeat-x scroll center bottom;
}
</style>
