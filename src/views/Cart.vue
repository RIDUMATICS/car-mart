<template>
  <main class="min-h-screen">
    <NavBar />
    <section class="pt-28">
      <div class="container grid grid-cols-12 gap-y-10 md:gap-x-5">
        <div class="col-span-12 md:col-span-8 overflow-x-auto">
          <table class="w-full text-sm lg:text-base border" cellspacing="0">
            <thead class="bg-gray-100 px-2">
              <tr class="h-12 uppercase text-center md:text-left">
                <th class="hidden md:table-cell"></th>
                <th class="text-left">Product</th>
                <th class="text-right pr-4">Total price</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr>
                <td class="hidden p-4 md:table-cell">
                  <a href="#">
                    <img
                      src="@/assets/images/product-1.jpg"
                      class="w-20 rounded"
                      alt="Thumbnail"
                    />
                  </a>
                </td>
                <td>
                  <a href="#">
                    <p class="mb-2 md:ml-4">Earphone</p>
                    <form action="" method="POST">
                      <button type="submit" class="text-gray-700 md:ml-4">
                        <small>(Remove item)</small>
                      </button>
                    </form>
                  </a>
                </td>
                <td class="text-right p-4">
                  <span class="text-sm lg:text-base font-medium"> 20.00€ </span>
                </td>
              </tr>
              <tr>
                <td class="hidden p-4 md:table-cell">
                  <a href="#">
                    <img
                      src="@/assets/images/product-1.jpg"
                      class="w-20 rounded"
                      alt="Thumbnail"
                    />
                  </a>
                </td>
                <td>
                  <a href="#">
                    <p class="mb-2 md:ml-4">Earphone</p>
                    <form action="" method="POST">
                      <button type="submit" class="text-gray-700 md:ml-4">
                        <small>(Remove item)</small>
                      </button>
                    </form>
                  </a>
                </td>
                <td class="text-right p-4">
                  <span class="text-sm lg:text-base font-medium"> 20.00€ </span>
                </td>
              </tr>
              <tr>
                <td class="hidden p-4 md:table-cell">
                  <a href="#">
                    <img
                      src="@/assets/images/product-1.jpg"
                      class="w-20 rounded"
                      alt="Thumbnail"
                    />
                  </a>
                </td>
                <td>
                  <a href="#">
                    <p class="mb-2 md:ml-4">Earphone</p>
                    <form action="" method="POST">
                      <button type="submit" class="text-gray-700 md:ml-4">
                        <small>(Remove item)</small>
                      </button>
                    </form>
                  </a>
                </td>
                <td class="text-right p-4">
                  <span class="text-sm lg:text-base font-medium"> 20.00€ </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-span-12 md:col-span-4">
          <div class="border p-6">
            <h2 class="uppercase text-2xl font-bold mb-5">Cart totals</h2>
            <div class="divide-y">
              <p class="flex justify-between py-1">
                <label>Subtotal:</label> <span>₦15,000,000</span>
              </p>
              <p class="flex justify-between py-1">
                <label>Shipping Fee:</label> <span>₦50,000</span>
              </p>
              <div class="py-2">
                <h3 class="uppercase text-base font-medium mb-3">
                  calculate shipping
                </h3>
                <select class="w-full h-8 my-2"></select>
                <input
                  type="text"
                  class="w-full h-8 my-2"
                  placeholder="Address"
                />
                <select class="w-full h-8 my-2"></select>
                <input
                  type="text"
                  class="w-full h-8 my-2"
                  placeholder="Postal Code / Zip"
                />
              </div>
              <div>
                <p class="flex justify-between py-1">
                  <label>Total:</label> <span>₦15,000</span>
                </p>
                <button>proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
