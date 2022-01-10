<template>
  <DashboardLayout>
    <h1 class="text-3xl pb-6">Change Password</h1>
    <div class="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
      <div class="leading-loose">
        <form class="p-10 bg-white rounded shadow-xl">
          <div class="mt-2">
            <label for="address">Old Password</label>
            <input id="address" type="password" placeholder="old password" />
          </div>
          <div class="mt-2">
            <label for="city">New Password</label>
            <input id="city" placeholder="new password" type="password" />
          </div>
          <div class="mt-2">
            <label for="country">Confirm Password</label>
            <input
              id="country"
              type="password"
              placeholder="confirm password"
            />
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
  </DashboardLayout>
</template>
<script>
import { DashboardLayout } from "@/components";
export default {
  components: {
    DashboardLayout,
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
