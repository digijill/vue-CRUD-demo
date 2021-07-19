<template>
  <div class="grid-container">
    <app-header class="header-title" :title="title"></app-header>
    <app-navigation class="navigation-links"></app-navigation>
    <app-content class="content-data"></app-content>
    <app-footer class="footer" :footerMessage="footerMessage"></app-footer>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'
import { ref } from '@vue/reactivity'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-navigation': Navigation,
    'app-content': Content,
    'app-footer': Footer
  },
  setup () {
    const title = ref('Vue CRUD Demo')
    const footerMessage = ref('A Vue 3 Story')

    return { title, footerMessage }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .header-title {
    grid-area: header
  }

  .navigation-links {
    grid-area: links
  }

  .content-data {
    grid-area: data
  }

  .footer {
    grid-area: footer
  }

  .grid-container {
    display: grid;
    grid-template-columns: 33.3vw auto 10vw;
    grid-auto-rows: minmax(50px, auto);
    grid-gap: 10px;
    grid-template-areas:
      "header header header"
      "links links links"
      "data data data"
      "footer footer footer"
  }

  @media screen and (min-width: 1000px) {
    .grid-container {
      grid-template-areas:
        "header links links"
        "data data data"
        "footer footer footer"
    }
  }
</style>
