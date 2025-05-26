<template>
    <div class="relative w-full h-60 rounded-lg overflow-hidden shadow mb-8">
        <img :src="banners[current]" class="object-cover w-full h-full transition duration-300" />
        <button @click="prev"
            class="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 rounded-full p-1 shadow hover:bg-white">&lt;</button>
        <button @click="next"
            class="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 rounded-full p-1 shadow hover:bg-white">&gt;</button>
    </div>
</template>

<script setup>
import banner1 from '@/assets/banner1.png'
import banner2 from '@/assets/banner2.png'
import aboutBanner from '@/assets/aboutBanner.png'
import { ref } from 'vue'
const banners = [banner1, banner2, aboutBanner]
const current = ref(0)
function next() { current.value = (current.value + 1) % banners.length }
function prev() { current.value = (current.value - 1 + banners.length) % banners.length }
</script>