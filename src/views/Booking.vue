<template>
    <section class="max-w-lg mx-auto p-8 bg-white rounded shadow">
        <h2 class="text-2xl font-bold text-green-700 mb-6">Đặt lịch khám</h2>
        <form class="flex flex-col gap-4">
            <input type="text" placeholder="Họ và tên" class="border rounded px-4 py-2" required />
            <input type="tel" placeholder="Số điện thoại" class="border rounded px-4 py-2" required />
            <input type="date" class="border rounded px-4 py-2" required />
            <select class="border rounded px-4 py-2">
                <option>Chọn dịch vụ</option>
                <option v-for="item in services" :key="item" :value="item">{{ item }}</option>
            </select>
            <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Gửi</button>
        </form>
    </section>
</template>

<script setup>
const services = [
    "Phẫu thuật khúc xạ",
    "Phẫu thuật lão thị Presbymax",
    "Phẫu thuật đục thủy tinh thể",
    "Điều trị bệnh lý mắt trẻ em",
    "Điều trị bệnh lý người cao tuổi",
    "Điều trị tăng nhãn áp",
    "Điều trị lác (lé)",
    "Các gói khám và điều trị khác"
]
</script>