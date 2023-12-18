import { defineClientConfig } from '@vuepress/client'
import CustomLayout from './layouts/CustomLayout.vue'

export default defineClientConfig({
  layouts: {
    CustomLayout,
  },
})

app: {
  baseURL: '/static-site/'
}