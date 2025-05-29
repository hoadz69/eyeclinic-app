<template>
    <nav class="w-full bg-white border-b-2 border-[#F5E3C3] px-0">
        <!-- Top row: Hotline, Search, Booking -->
        <div class="flex justify-center items-center gap-6 py-3">
            <button class="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25M2.25 6.75l9.72 7.28a2.25 2.25 0 002.56 0l9.72-7.28" />
                </svg>
                Hotline: 1900555553
            </button>
            <button class="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
                Tìm bệnh viện
            </button>
            <router-link to="/booking" class="flex items-center gap-2 border border-green-600 text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75v-1.5A2.25 2.25 0 0110.5 3h3a2.25 2.25 0 012.25 2.25v1.5m-7.5 0h7.5m-7.5 0A2.25 2.25 0 003 9v9.75A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V9a2.25 2.25 0 00-2.25-2.25m-7.5 0v1.5m0 0h3m-3 0v1.5m0-1.5h3" />
                </svg>
                Đặt lịch khám
            </router-link>
        </div>
        <!-- Middle row: Logo -->
        <div class="flex justify-center items-center py-2">
            <img src="@/assets/logo/logo_phong_kham.jpg" alt="Logo" class="h-20 object-contain" />
        </div>
        <!-- Bottom row: Menu -->
        <div class="flex justify-center items-center gap-8 py-2">
            <router-link to="/" class="hover:text-green-600 font-medium">Trang chủ</router-link>
            <AboutDropdown />
            <ServicesDropdown />
            <router-link to="/az" class="hover:text-green-600 font-medium">A-Z về mắt</router-link>
            <router-link to="/guide" class="hover:text-green-600 font-medium">Cẩm nang khách hàng</router-link>
        </div>
    </nav>
</template>

<script setup>
import AboutDropdown from './AboutDropdown.vue'
import ServicesDropdown from './ServicesDropdown.vue'
</script>