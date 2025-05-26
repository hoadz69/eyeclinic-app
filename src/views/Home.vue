<template>
    <section class="max-w-4xl mx-auto py-10">
        <BannerSlider />
        <!-- Có thể thêm các khối lợi ích dịch vụ ở đây, hoặc lấy từ ảnh slider -->
        <h2 class="text-xl font-bold text-green-700 mt-4 mb-2">TOP 3 lợi ích xóa cận hóa cá nhân</h2>
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <li class="bg-green-50 p-4 rounded">Đo ni đóng giày cho riêng bạn</li>
            <li class="bg-green-50 p-4 rounded">Phục hồi thị lực nhanh nhất trong 24h</li>
            <li class="bg-green-50 p-4 rounded">Sắc nét, chống chói lóa</li>
        </ul>
    </section>
</template>

<script setup>
import BannerSlider from '../components/BannerSlider.vue'
</script>