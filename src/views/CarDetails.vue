<template>
  <NavBar />
  <main class="pt-24 pb-10 min-h-screen">
    <div class="container mt-6">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <div>
            <div
              class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex justify-center items-center overflow-hidden"
            >
              <img
                src="@/assets/images/product-1.jpg"
                class="flex-shrink-0 min-w-full min-h-full"
              />
            </div>
          </div>
        </div>
        <div class="md:flex-1 px-4">
          <h2
            class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"
          >
            2017 Toyota Land Cruiser Prado
          </h2>
          <p class="text-gray-500 text-sm">
            By
            <span class="text-gray-900 pr-2 border-r">Toyota</span>
            <span class="pl-2">Land Cruiser Prado</span>
          </p>

          <div class="flex items-center space-x-4 my-4">
            <div>
              <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                <span class="text-primary-600 mr-1 mt-1">₦</span>
                <span class="font-bold text-primary-600 text-3xl"
                  >25,000,000</span
                >
              </div>
            </div>
            <div class="flex-1">
              <p class="text-pirate-gold-500 text-xl font-semibold">Save 12%</p>
              <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
            </div>
          </div>

          <button
            type="button"
            class="h-14 px-6 py-2 font-semibold rounded-xl bg-primary-600 hover:bg-primary-500 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <!-- Car Details -->
    <div class="container mt-10">
      <div style="border-bottom: 2px solid #eaeaea">
        <ul class="flex cursor-pointer">
          <li
            v-for="(menu, index) in ['Car Details', 'Features']"
            :key="menu"
            class="py-2 px-6 text-gray-500 bg-gray-200 rounded-t-lg"
            :class="{ 'active-tab': activeTab === index }"
          >
            <button
              class="inline-block focus:outline-none"
              @click.prevent="changeTab(index)"
            >
              {{ menu }}
            </button>
          </li>
        </ul>
      </div>
      <div v-if="activeTab === 0">
        <h3 class="text-2xl text-gray-900 my-4">General Information</h3>
        <ul class="max-w-md w-full divide-y text-sm text-gray-800">
          <li class="flex justify-between p-2">
            <label>Make</label>
            <span>Lexus</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Model</label>
            <span>GX460</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Year</label>
            <span>2016</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Mileage</label>
            <span>149</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Location</label>
            <span>Germany</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Transmission</label>
            <span>Authomatic</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Selling Condition</label>
            <span>New</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Colour</label>
            <span>White</span>
          </li>
        </ul>
      </div>
      <div v-else-if="activeTab === 1">
        <h3 class="text-2xl text-gray-900 my-4">Features</h3>
        <ul class="max-w-md w-full divide-y text-sm text-gray-800">
          <li class="flex justify-between p-2">
            <label>Cool Box</label>
            <span>No</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Sunroof</label>
            <span>Yes</span>
          </li>
          <li class="flex justify-between p-2">
            <label>DVD System</label>
            <span>Yes</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Remote Key</label>
            <span>Yes</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Car Tracker</label>
            <span>No</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Park Assist</label>
            <span>Yes</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Parking Sensor</label>
            <span>Yes</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Reverse Camera</label>
            <span>Yes</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Navigation System</label>
            <span>Yes</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Adaptive Head Lamps</label>
            <span>Yes</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Bluetooth Hands Free</label>
            <span>Yes</span>
          </li>
          <li class="flex justify-between p-2">
            <label>Touch Screen Audio System</label>
            <span>Yes</span>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const activeTab = ref(0);

    const changeTab = (num) => {
      activeTab.value = num;
    };

    return {
      activeTab,
      changeTab,
    };
  },
};
</script>
<style>
select {
  background-image: none;
}
li.active-tab {
  @apply bg-primary;
  @apply text-white;
}
</style>
