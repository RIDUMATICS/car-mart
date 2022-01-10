<template>
  <div class="header flex flex-col justify-center items-center">
    <!-- content -->
    <div
      class="container flex flex-col bg-gra items-center text-center text-white lg:mx-7"
    >
      <!-- heading caption -->
      <div>
        <h2 class="text-4xl font-extrabold mb-2">
          Find What You Are Looking For
        </h2>
        <p class="mb-4">Over 90,000 Used and New Cars</p>
      </div>
      <!-- search form -->
      <form
        class="flex flex-col sm:flex-row flex-grow w-full bg-black bg-opacity-50 p-5"
      >
        <select class="mb-3 flex-1 sm:mb-0 sm:mr-5">
          <option value="Honda">Honda</option>
          <option value="Toyota">Toyota</option>
          <option value="Benz">Benz</option>
        </select>
        <input
          type="search"
          name=""
          id=""
          class="mb-3 flex-1 sm:mb-0 sm:mr-5"
        />
        <button
          type="submit"
          class="flex-1 flex items-center justify-center bg-primary p-3 text-xl uppercase"
        >
          Search
          <SearchIcon class="h-5 w-5 ml-2" />
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { SearchIcon } from "@heroicons/vue/outline";
export default {
  components: {
    SearchIcon,
  },
};
</script>
<style>
.header {
  min-height: 460px;
  background-image: linear-gradient(
      to left,
      rgba(0, 191, 143, 0.8),
      rgba(0, 21, 16, 0.8)
    ),
    url("~@/assets/images/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
