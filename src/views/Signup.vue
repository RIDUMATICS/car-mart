<template>
  <AuthLayout>
    <p class="text-center text-3xl">
      Join <span class="text-primary">Us.</span>
    </p>
    <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
      <div class="flex flex-col pt-4">
        <label for="name" class="text-primary">Name</label>
        <input
          type="text"
          id="name"
          placeholder="John Smith"
          class="inputBox focus:inputBox"
        />
      </div>

      <div class="flex flex-col pt-4">
        <label for="phone" class="text-primary">Phone</label>
        <input
          type="tel"
          id="phone"
          placeholder="+2348123456789"
          class="inputBox focus:inputBox"
        />
      </div>

      <div class="flex flex-col pt-4">
        <label for="email" class="text-primary">Email</label>
        <input
          type="email"
          id="email"
          placeholder="your@email.com"
          class="inputBox focus:inputBox"
        />
      </div>

      <div class="flex flex-col pt-4">
        <label for="password" class="text-primary"> Password </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          class="inputBox focus:inputBox"
        />
      </div>

      <div class="flex flex-col pt-4">
        <label for="confirm-password" class="text-primary"
          >Confirm Password</label
        >
        <input
          type="password"
          id="confirm-password"
          placeholder="Password"
          class="inputBox focus:inputBox"
        />
      </div>

      <input
        type="submit"
        value="Register"
        class="bg-primary cursor-pointer text-white font-semibold text-lg p-2 mt-8"
      />
    </form>
    <div class="text-center pt-12 pb-12">
      <p>
        Already have an account?
        <router-link to="/login" class="underline font-semibold text-primary">
          Log in here.
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
