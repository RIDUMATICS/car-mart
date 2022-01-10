<template>
  <DashboardLayout>
    <h1 class="text-3xl pb-6">Profile</h1>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
        <div class="leading-loose">
          <form class="p-10 bg-white rounded shadow-xl">
            <p class="text-lg text-gray-800 font-medium pb-4">
              Customer information
            </p>
            <div class="mb-3">
              <label for="name">Name</label>
              <input id="name" type="text" />
            </div>
            <div class="mb-3">
              <label for="email">Email</label>
              <input id="email" type="email" />
            </div>
            <div class="mb-3">
              <label for="phone">Phone Number</label>
              <input id="phone" type="tel" />
            </div>
            <div class="mt-6">
              <button
                class="px-4 py-1 text-white font-light tracking-wider bg-primary-600 rounded"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
        <div class="leading-loose">
          <form class="p-10 bg-white rounded shadow-xl">
            <p class="text-lg text-gray-800 font-medium pb-4">
              Shipping Information
            </p>
            <div class="mt-2">
              <label for="address">Address</label>
              <input id="address" type="text" placeholder="Street" />
            </div>
            <div class="mt-2">
              <label for="city">City</label>
              <input id="city" placeholder="City" type="text" />
            </div>
            <div class="inline-block mt-2 w-1/2 pr-1">
              <label for="country">Country</label>
              <input id="country" type="text" placeholder="Country" />
            </div>
            <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
              <label for="zip">Zip</label>
              <input id="zip" type="text" placeholder="Zip" />
            </div>
            <div class="mt-6">
              <button
                class="px-4 py-1 text-white font-light tracking-wider bg-primary-600 rounded"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>
<script>
import { DashboardLayout } from "@/components";
import { ref } from "vue";
export default {
  components: {
    DashboardLayout,
  },
  setup() {
    const user = ref({
      name: "Onikoyi Ridwan",
      email: "onikoyiridwan@gmail.com",
    });

    return {
      user,
    };
  },
};
</script>
<style scoped>
label {
  @apply text-primary;
  @apply block;
  @apply text-sm;
}
input {
  @apply bg-white;
  @apply w-full;
  @apply px-5;
  @apply py-1;
  @apply rounded;
}

input:focus {
  @apply border-primary-500;
  @apply outline-none;
  @apply ring-0;
}
</style>
