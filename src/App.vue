<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <main class="pt-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
