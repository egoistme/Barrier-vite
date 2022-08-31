import DefaultTheme from 'vitepress/theme'
import HomeBanner from './components/HomeBanner.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeBanner', HomeBanner)
  }
}