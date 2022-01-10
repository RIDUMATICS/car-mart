<template>
  <section class="bg-white py-20" id="contact">
    <div class="container text-black flex flex-col items-center">
      <div class="heading-panel mb-16">
        <h2 class="text-center text-4xl font-semibold relative p-3">
          Contact <span class="text-primary">Us</span>
        </h2>
      </div>
      <p class="md:w-2/4 text-center">
        We understand the importance of approaching each work integrally and
        believe in the power of simple and easy communication.
      </p>
    </div>
    <div class="container my-10">
      <form class="flex flex-col md:w-3/4 mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input type="text" placeholder="Name*" />
          <input type="text" placeholder="E-Mail*" />
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Company" />
          <textarea
            rows="6"
            placeholder="Request Details"
            class="md:col-span-2 resize-none"
          />
        </div>
        <button
          class="w-full mx-auto md:max-w-xs bg-transparent border-primary border rounded-3xl text-primary font-medium px-4 py-3 mt-10"
        >
          Send IT
        </button>
      </form>
    </div>
  </section>
</template>
