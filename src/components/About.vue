<template>
  <section class="container py-10 md:py-16">
    <div
      class="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6"
    >
      <div class="w-full md:w-1/2">
        <div class="max-w-lg">
          <h1
            class="text-2xl font-medium tracking-wide text-gray-800 md:text-4xl"
          >
            Find your premium new car exported from Germany
          </h1>
          <p class="mt-2 text-gray-600">
            We work with the best remunated car dealers in Germany to find your
            new car.
          </p>
          <div class="grid gap-6 mt-8 sm:grid-cols-2">
            <div class="flex items-center space-x-6 text-gray-800">
              <CheckIcon class="w-5 h-5 text-primary" />
              <span>Premium selection</span>
            </div>
            <div class="flex items-center space-x-6 text-gray-800">
              <CheckIcon class="w-5 h-5 text-primary" />
              <span>Insurance</span>
            </div>
            <div class="flex items-center space-x-6 text-gray-800">
              <CheckIcon class="w-5 h-5 text-primary" />
              <span>All legal documents</span>
            </div>
            <div class="flex items-center space-x-6 text-gray-800">
              <CheckIcon class="w-5 h-5 text-primary" />
              <span>From German car dealers</span>
            </div>
            <div class="flex items-center space-x-6 text-gray-800">
              <CheckIcon class="w-5 h-5 text-primary" />
              <span>Payment Security</span>
            </div>
            <div class="flex items-center space-x-6 text-gray-800">
              <CheckIcon class="w-5 h-5 text-primary" />
              <span>Fast shipping (+ Express)</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center w-full md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
          alt="car photo"
          class="w-full h-full max-w-2xl rounded"
        />
      </div>
    </div>
  </section>
</template>
<script>
import { CheckIcon } from "@heroicons/vue/outline";
export default {
  components: {
    CheckIcon,
  },
};
</script>
