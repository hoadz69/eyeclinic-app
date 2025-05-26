<template>
    <div class="relative group">
        <button class="font-medium hover:text-green-600 flex items-center gap-1">
            Về Chúng tôi
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div
            class="absolute z-10 bg-white rounded shadow-lg mt-2 py-2 min-w-[210px] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-150">
            <router-link v-for="item in aboutLinks" :key="item.label" :to="item.to"
                class="block px-4 py-2 hover:bg-green-50 text-gray-800">
                {{ item.label }}
            </router-link>
        </div>
    </div>
</template>

<script setup>
const aboutLinks = [
    { label: "Giới thiệu chung", to: "/about/intro" },
    { label: "Thông tin bệnh viện", to: "/about/info" },
    { label: "Đội ngũ bác sĩ", to: "/about/team" },
    { label: "Trang thiết bị", to: "/about/equipment" },
    { label: "Tin tức", to: "/about/news" },
    { label: "Tuyển dụng", to: "/about/career" },
    { label: "Chính sách quyền riêng tư", to: "/about/privacy" },
]
</script>