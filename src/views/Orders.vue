<template>
  <DashboardLayout>
    <h1 class="text-3xl text-black pb-6">Order History</h1>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white table-fixed whitespace-nowrap">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
              Order ref
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
              name
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
              date
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
              Total
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
              Paid
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
              Delivered
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
              Action
            </th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr>
            <td class="text-left py-3 px-4">92zrnd5VZvN6qkc1XpGG5X</td>
            <td class="text-left py-3 px-4">John Smith</td>
            <td class="text-left py-3 px-4">8 March 2021</td>
            <td class="text-left py-3 px-4">₦40,905</td>
            <td class="text-left py-3 px-4">false</td>
            <td class="text-left py-3 px-4">false</td>
            <td class="text-left py-3 px-4">
              <button
                class="px-4 py-2 uppercase text-xs text-primary border-primary border rounded-2xl mr-2"
              >
                Details
              </button>
              <button
                class="px-4 py-2 uppercase text-xs text-red-500 border-red-500 border rounded-2xl"
              >
                cancel
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
