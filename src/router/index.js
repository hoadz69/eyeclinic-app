import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Booking from '../views/Booking.vue'
import Placeholder from '../views/Placeholder.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/booking', name: 'Booking', component: Booking },
  // AboutDropdown
  { path: '/about/intro', component: Placeholder, props: { title: "Giới thiệu chung" } },
  { path: '/about/info', component: Placeholder, props: { title: "Thông tin bệnh viện" } },
  { path: '/about/team', component: Placeholder, props: { title: "Đội ngũ bác sĩ" } },
  { path: '/about/equipment', component: Placeholder, props: { title: "Trang thiết bị" } },
  { path: '/about/news', component: Placeholder, props: { title: "Tin tức" } },
  { path: '/about/career', component: Placeholder, props: { title: "Tuyển dụng" } },
  { path: '/about/privacy', component: Placeholder, props: { title: "Chính sách quyền riêng tư" } },
  // ServicesDropdown
  { path: '/service/refractive', component: Placeholder, props: { title: "Phẫu thuật khúc xạ" } },
  { path: '/service/presbymax', component: Placeholder, props: { title: "Phẫu thuật lão thị Presbymax" } },
  { path: '/service/cataract', component: Placeholder, props: { title: "Phẫu thuật đục thủy tinh thể" } },
  { path: '/service/pediatric', component: Placeholder, props: { title: "Điều trị bệnh lý mắt trẻ em" } },
  { path: '/service/elderly', component: Placeholder, props: { title: "Điều trị bệnh lý người cao tuổi" } },
  { path: '/service/glaucoma', component: Placeholder, props: { title: "Điều trị tăng nhãn áp" } },
  { path: '/service/strabismus', component: Placeholder, props: { title: "Điều trị lác (lé)" } },
  { path: '/service/other', component: Placeholder, props: { title: "Các gói khám và điều trị khác" } },
  // Others
  { path: '/az', component: Placeholder, props: { title: "A-Z về mắt" } },
  { path: '/guide', component: Placeholder, props: { title: "Cẩm nang khách hàng" } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
