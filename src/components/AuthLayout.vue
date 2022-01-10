<template>
  <main>
    <div class="w-full min-h-screen flex flex-wrap">
      <!-- Register Section -->
      <div class="relative w-full md:w-1/2 flex flex-col bg-gray-100 pt-5">
        <button class="absolute top-5 right-5 flex items-center font-medium">
          <ArrowNarrowLeftIcon class="w-7 h-7 mr-3" /> Back
        </button>
        <div
          class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
        >
          <slot></slot>
        </div>
      </div>

      <!-- Image Section -->
      <div class="w-1/2 shadow-2xl relative hidden md:block">
        <img class="object-cover w-full h-full" src="@/assets/images/car.jpg" />
        <div class="absolute inset-0 bg-primary bg-opacity-25"></div>
      </div>
    </div>
  </main>
</template>
<script>
import { ArrowNarrowLeftIcon } from "@heroicons/vue/outline";
export default {
  components: {
    ArrowNarrowLeftIcon,
  },
};
</script>
<style>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  box-shadow: 0 0 0 30px white inset !important;
}
</style>
