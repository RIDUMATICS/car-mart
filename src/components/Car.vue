<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
    <div class="overflow-hidden">
      <img src="@/assets/images/product-1.jpg" alt="" />
    </div>
    <div class="p-4">
      <p class="uppercase tracking-wide text-sm font-bold text-gray-700">
        2016 Ford Escape Cape
      </p>
      <p class="text-gray-700 text-sm mb-2">
        190 hp / Petrol / 2008 / Used vehicle
      </p>
      <p class="text-3xl text-primary">$750,000</p>
    </div>
    <div
      class="flex border-t border-gray-300 text-gray-700 text-sm uppercase divide-x"
    >
      <router-link
        to="/cars/123456"
        class="flex-1 font-medium inline-flex items-center p-4"
      >
        <span
          class="text-pirate-gold-700 inline-block p-2 rounded-full mr-3 bg-pirate-gold-50"
          ><ArrowsExpandIcon class="w-4 h-4"
        /></span>
        View more
      </router-link>
      <div class="flex-1 font-medium inline-flex items-center p-4">
        <span
          class="text-primary-700 inline-block p-2 rounded-full mr-3 bg-primary-50"
          ><PlusIcon class="w-4 h-4"
        /></span>
        Add to cart
      </div>
    </div>
  </div>
</template>
<script>
import { ArrowsExpandIcon, PlusIcon } from "@heroicons/vue/outline";
export default {
  components: {
    ArrowsExpandIcon,
    PlusIcon,
  },
};
</script>
