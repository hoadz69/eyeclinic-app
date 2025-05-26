<script setup>
import { defineProps } from 'vue'
const props = defineProps({ title: String })
</script>

<template>
  <div class="max-w-2xl mx-auto py-16 text-center">
    <h1 class="text-2xl font-bold text-primary mb-4">{{ props.title }}</h1>
    <p class="text-gray-500">Đang cập nhật nội dung...</p>
  </div>
</template>
