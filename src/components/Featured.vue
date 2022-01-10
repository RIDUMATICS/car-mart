<template>
  <section style="background-color: #f8f8f8">
    <div class="container py-20">
      <div class="heading-panel mb-10 md:mb-16">
        <h2 class="text-center text-2xl md:text-4xl font-semibold relative p-3">
          Latest <span class="text-primary">Featured</span> Cars
        </h2>
      </div>
      <div class="grid sm:grid-cols-3 gap-x-7 gap-y-16">
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
      </div>
    </div>
  </section>
</template>
<script>
import Car from "./Car";
export default {
  components: {
    Car,
  },
};
</script>
ri
