<template>
  <Disclosure
    as="nav"
    class="bg-white shadow-xl text-primary fixed z-20 inset-x-0 top-0"
  >
    <div class="container">
      <div class="h-16">
        <div class="flex h-full items-center justify-between sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            @click="toggleMenu"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon
              v-if="!open"
              class="block h-7 w-7 text-primary"
              aria-hidden="true"
            />
            <XIcon
              v-else
              class="block h-7 w-7 text-primary"
              aria-hidden="true"
            />
          </DisclosureButton>

          <router-link to="/" class="flex items-end">
            <img src="@/assets/images/logo.png" class="h-7 w-7 m-1" />
            <h1 class="text-xl font-bold">CarMart</h1>
          </router-link>

          <button>
            <span class="sr-only">View cart</span>
            <ShoppingBagIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div class="hidden h-full sm:flex items-center justify-start">
          <router-link to="/" class="flex items-end">
            <img src="@/assets/images/logo.png" class="h-9 w-9 m-1" />
            <h1 class="font-bold text-3xl">CarMart</h1>
          </router-link>
          <div class="ml-8 flex-1">
            <div class="flex space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/cars">Cars</NavLink>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </div>
          </div>
          <div class="flex items-center">
            <button>
              <ShoppingBagIcon class="h-6 w-6 ml-4" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <DisclosurePanel class="sm:hidden">
      <div class="px-4 pt-2 pb-3 space-y-1 flex flex-col">
        <NavLink to="/" theme="">Home</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/register">Sign Up</NavLink>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
<script>
import NavLink from "./NavLink";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

import { MenuIcon, XIcon, ShoppingBagIcon } from "@heroicons/vue/outline";
import { ref } from "vue";
export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuIcon,
    XIcon,
    ShoppingBagIcon,
    NavLink,
  },
  setup() {
    const open = ref(false);

    const toggleMenu = () => {
      open.value = !open.value;
    };

    return {
      toggleMenu,
      open,
    };
  },
};
</script>
