<template>
  <header class="relative pt-16">
    <NavBar />
    <Hero />
  </header>
  <main class="home">
    <About />
    <Featured />
    <Contact />
    <section id="mobile-app">
      <div
        class="container flex flex-col justify-center items-center md:flex-row py-16 md:py-0 md:pt-16"
      >
        <!-- image -->
        <img
          src="@/assets/images/mobile-app.png"
          alt="background"
          class="hidden md:block"
        />
        <!-- content -->
        <div class="md:ml-10 text-white flex-1">
          <h5 class="uppercase mb-2">Download our app</h5>
          <h3 class="mb-2 uppercase text-2xl font-extrabold">
            Get our app for your mobile
          </h3>
          <ul class="text-sm">
            <li>Find nearby cars in your network with scholar</li>
            <li>Find nearby cars in your network with scholar</li>
            <li>Find nearby cars in your network with scholar</li>
            <li>Find nearby cars in your network with scholar</li>
          </ul>
          <button
            class="my-3 border-primary text-primary text-base font-medium border rounded-3xl py-2 px-5"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
import { Hero, About, Featured, Contact, Footer } from "@/components";
export default {
  name: "Home",
  components: {
    Hero,
    About,
    Featured,
    Contact,
    Footer,
  },
  setup() {},
};
</script>
<style>
.heading-panel h2::before,
.heading-panel h2::after {
  background-color: #242424;
  content: "";
  height: 1px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
}

.heading-panel h2::before {
  width: 130px;
  bottom: 6px;
}

.heading-panel h2::after {
  width: 100px;
  bottom: 0;
}

#mobile-app {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("~@/assets/images/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
