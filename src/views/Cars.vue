<template>
  <NavBar />
  <main class="min-h-screen flex flex-col pt-16">
    <div class="flex-1 bg-gray-100 py-24">
      <div class="container grid grid-cols-1 md:gap-x-20 md:grid-cols-6">
        <aside class="col-span-2">
          <form class="grid sm:grid-cols-2 sm:gap-x-7 md:grid-cols-1">
            <label>
              <p class="text-lg font-medium mb-1">Make</p>
              <select
                class="w-full mb-6 bg-gray-200 border-none rounded-sm text-sm"
              >
                <option>--All--</option>
                <option>Toyota</option>
                <option>Lexus</option>
                <option>Ridwan</option>
              </select>
            </label>
            <label>
              <p class="text-lg font-medium mb-2">Vehicle Type</p>
              <select
                class="w-full mb-6 bg-gray-200 border-none rounded-sm text-sm"
              >
                <option>--All--</option>
                <option>Toyota</option>
                <option>Lexus</option>
                <option>Ridwan</option>
              </select>
            </label>
            <label>
              <p class="text-lg font-medium mb-2">Model</p>
              <select
                class="w-full mb-6 bg-gray-200 border-none rounded-sm text-sm"
              >
                <option>--All--</option>
                <option>Toyota</option>
                <option>Lexus</option>
                <option>Ridwan</option>
              </select>
            </label>
          </form>
        </aside>
        <section class="col-span-4">
          <div class="grid sm:grid-cols-2 gap-x-7 gap-y-16">
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
          </div>
          <Pagination />
        </section>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script>
import { Footer, Car, Pagination } from "@/components";
export default {
  name: "Home",
  components: {
    Car,
    Pagination,
    Footer,
  },
};
</script>
