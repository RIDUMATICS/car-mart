<template>
  <NavBar />
  <main class="pt-24 pb-10 bg-gray-200 min-h-screen">
    <div class="container">
      <section class="grid grid-cols-12 bg-white shadow-2xl">
        <div class="col-span-7">
          <img
            src="https://buy.cars45.com/image/cache/catalog/Hyundai-Accent-2018_9d38be79-ff04-4f2c-b013-0b71cc5a1fff/rightPhoto-600x400.jpg?v=0"
          />
        </div>
        <div class="col-span-5 p-5 text-gray-700">
          <div class="pb-4 border-b px-2">
            <h1 class="uppercase tracking-wide text-2xl font-semibold mb-2">
              2017 Toyota Land Cruiser Prado
            </h1>
            <p><span class="text-gray-400">Make:</span> Toyota</p>
            <p><span class="text-gray-400">Model:</span> Land Cruiser Prado</p>
            <p><span class="text-gray-400">Transmission:</span> Automatic</p>
          </div>
          <div class="py-3 border-b px-2">
            <p class="text-3xl text-primary">$750,000</p>
          </div>
          <div class="py-3 border-b px-2 flex items-center">
            <p class="mr-2 flex items-center">Quantity</p>
            <div class="inline-flex border">
              <button class="w-10 border-r">-</button>
              <input
                type="number"
                :value="1"
                class="border-0 bg-gray-100 text-center w-20"
              />
              <button class="w-10 border-l">+</button>
            </div>
          </div>
          <div class="py-3 px-2">
            <button
              class="border border-primary w-full uppercase text-lg text-primary rounded-2xl py-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <section class="my-10 bg-white">
        <h2 class="text-2xl text-center">Car Details</h2>
        <p><span>Make</span> <span>Toyota</span></p>
        <p><span>Make</span> <span>Toyota</span></p>
        <p><span>Make</span> <span>Toyota</span></p>
      </section>
    </div>
  </main>
</template>
