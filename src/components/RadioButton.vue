<script lang="ts">
export default {
  props: {
    label: String,
    name: String,
    value: String,
    checked: Boolean
  }
}
</script>
<template>
  <div class="col">
    <div class="flex items-center">
      <input
        type="radio"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        :name
        :value
        :checked
      />
      <label
        for="default-radio-1"
        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >{{ label }}</label
      >
    </div>
  </div>
</template>
