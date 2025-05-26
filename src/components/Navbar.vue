<template>
    <nav class="flex items-center justify-between px-6 py-2 shadow-md bg-white">
        <!-- Logo -->
        <div class="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" class="w-8 h-8" />
            <span class="font-bold text-green-700 text-lg">Phòng khám mắt </span>
        </div>
        <!-- Menu -->
        <div class="flex items-center gap-4">
            <router-link to="/" class="hover:text-green-600 font-medium">Trang chủ</router-link>
            <!-- Về Mắt Sài Gòn dropdown -->
            <AboutDropdown />
            <!-- Dịch vụ dropdown -->
            <ServicesDropdown />
            <router-link to="/az" class="hover:text-green-600 font-medium">A-Z về mắt</router-link>
            <router-link to="/guide" class="hover:text-green-600 font-medium">Cẩm nang khách hàng</router-link>
            <router-link to="/booking"
                class="ml-3 px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 font-semibold">Đặt lịch
                khám</router-link>
        </div>
    </nav>
</template>

<script setup>
import AboutDropdown from './AboutDropdown.vue'
import ServicesDropdown from './ServicesDropdown.vue'
</script>