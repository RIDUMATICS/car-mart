<template>
  <main class="flex bg-gray-200 min-h-screen">
    <aside class="bg-primary-500 h-screen w-80 hidden sm:block shadow-xl">
      <div class="p-6">
        <router-link to="/" class="text-white text-3xl font-semibold">
          CarMart
        </router-link>
        <button
          class="w-full bg-white font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          New Car
        </button>
      </div>
      <nav class="text-white font-semibold pt-3">
        <router-link to="/profile" class="navlink">
          <UserIcon class="h-5 w-5 mr-3" />
          Profile
        </router-link>
        <router-link to="/change-password" class="navlink">
          <LockClosedIcon class="h-5 w-5 mr-3" />
          Change Password
        </router-link>
        <router-link to="user/orders" class="navlink">
          <ClockIcon class="h-5 w-5 mr-3" />
          Order History
        </router-link>
        <router-link to="admin/cars" class="navlink">
          <ClockIcon class="h-5 w-5 mr-3" />
          Cars
        </router-link>
        <router-link to="/logout" class="navlink">
          <LogoutIcon class="h-5 w-5 mr-3" />
          Logout
        </router-link>
      </nav>
    </aside>

    <div class="w-full flex flex-col h-screen overflow-y-hidden">
      <header class="w-full bg-white h-16 hidden sm:block shadow-sm" />

      <!-- Mobile Header & Nav -->
      <header class="w-full bg-primary py-5 px-6 sm:hidden">
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-white text-3xl font-semibold">
            CarMart
          </router-link>
          <button
            @click="isOpen = !isOpen"
            class="text-white text-3xl focus:outline-none"
          >
            <XIcon v-if="isOpen" class="w-8 h-8" />
            <MenuIcon v-else class="w-8 h-8" />
          </button>
        </div>

        <!-- Dropdown Nav -->
        <nav
          :class="isOpen ? 'flex' : 'hidden'"
          class="flex flex-col font-semibold pt-4"
        >
          <router-link to="/profile" class="navlink">
            <UserIcon class="h-5 w-5 mr-3" />
            Profile
          </router-link>
          <router-link to="/change-password" class="navlink">
            <LockClosedIcon class="h-5 w-5 mr-3" />
            Change Password
          </router-link>
          <router-link to="user/orders" class="navlink">
            <ClockIcon class="h-5 w-5 mr-3" />
            Order History
          </router-link>
          <router-link to="admin/cars" class="navlink">
            <ClockIcon class="h-5 w-5 mr-3" />
            Cars
          </router-link>
          <router-link to="/logout" class="navlink">
            <LogoutIcon class="h-5 w-5 mr-3" />
            Logout
          </router-link>
        </nav>
      </header>

      <!-- main section of the page -->
      <div class="w-full overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-6">
          <!-- page slot -->
          <slot></slot>
        </main>
      </div>
    </div>
  </main>
</template>
<script>
import {
  UserIcon,
  LockClosedIcon,
  ClockIcon,
  LogoutIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { ref } from "vue";
export default {
  components: {
    UserIcon,
    LockClosedIcon,
    ClockIcon,
    LogoutIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
};
</script>
<style scoped>
.navlink {
  @apply flex;
  @apply items-center;
  @apply text-white;
  @apply opacity-75;
  @apply py-4;
  @apply pl-6;
}
.navlink.router-link-active,
.navlink:hover {
  @apply bg-primary-700;
  @apply text-white;
  @apply opacity-100;
}
</style>
