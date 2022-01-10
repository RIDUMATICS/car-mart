<template>
  <AuthLayout>
    <p class="text-center text-3xl">
      Wel<span class="text-primary">come.</span>
    </p>
    <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
      <div class="flex flex-col pt-4">
        <label for="email" class="text-lg text-primary">Email</label>
        <input
          type="email"
          id="email"
          placeholder="your@email.com"
          class="inputBox focus:inputBox"
        />
      </div>

      <div class="flex flex-col pt-4">
        <label for="password" class="text-lg text-primary">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          class="inputBox focus:inputBox"
        />
      </div>

      <input
        type="submit"
        value="Log In"
        class="bg-primary cursor-pointer text-white font-semibold text-lg p-2 mt-8"
      />
    </form>
    <div class="text-center pt-12 pb-12">
      <p>
        Don't have an account?
        <router-link
          to="/register"
          class="underline font-semibold text-primary"
        >
          Register here.
        </router-link>
      </p>
    </div>
  </AuthLayout>
</template>
<script>
import { AuthLayout } from "@/components";
export default {
  components: {
    AuthLayout,
  },
};
</script>
