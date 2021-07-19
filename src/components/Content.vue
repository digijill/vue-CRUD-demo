<template>
    <div class="content-container">
        <h1>{{ message }} </h1>
        <app-list-cast v-bind:cast="cast"></app-list-cast>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import ListCast from './ListCast.vue'

export default {
  name: 'Content',
  components: {
    'app-list-cast': ListCast
  },
  setup () {
    const message = ref('Cast of The French Dispatch')
    const cast = ref([
      {
        id: 1,
        name: 'Bill Murray',
        username: 'ahowitzerjr',
        email: 'ahowitzerjr@gmail.com'
      },
      {
        id: 2,
        name: 'Frances McDormond',
        username: 'lkrementz',
        email: 'lkrementz@gmail.com'
      },
      {
        id: 3,
        name: 'Tilda Swinton',
        username: 'jberensen',
        email: 'jberensen@gmail.com'
      }
    ])

    return { message, cast }
  }
}
</script>

<style scoped>
    .content-container {
        padding: 1rem;
        min-width: 500px;
        margin: auto;
    }

</style>
