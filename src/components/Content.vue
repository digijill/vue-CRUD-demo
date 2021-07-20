<template>
    <div class="content-container">
        <h1>{{ message }} </h1>
        <app-list-cast v-bind:cast="cast"></app-list-cast>
        <app-add-new-member v-on:create-member="createMember"></app-add-new-member>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import ListCast from './ListCast.vue'
import AddNewCastMember from './AddNewCastMember.vue'
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from '@vue/runtime-core'
import axios from 'axios'

export default {
  name: 'Content',
  components: {
    'app-list-cast': ListCast,
    'app-add-new-member': AddNewCastMember
  },
  setup () {
    const message = ref('Cast of The French Dispatch')

    // Each cast member object should contain the following fields:
    // * id: integer
    // * name: string
    // * username: string
    // * email: string
    const cast = ref([])

    const createMember = (member) => {
      if ((member.name !== '') && (member.username !== '') && (member.email !== '')) {
        var newMember = {
          id: cast.value.length + 1,
          name: member.name,
          username: member.username,
          email: member.email
        }

        cast.value.push(newMember)
      }
    }

    onBeforeMount(() => {
      console.log('App.vue: onBeforeMount called')
    })
    onMounted(() => {
      console.log('App.vue: onMounted called')

      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          console.log('received response: ' + response)
          cast.value = response.data
          console.log('Cast array in success callback: ' + cast.value)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally((response) => {
          console.log('finished!')
        })
    })
    onBeforeUnmount(() => {
      console.log('App.vue: onBeforeUnmount called')
    })
    onUnmounted(() => {
      console.log('App.vue: onUnmounted called')
    })

    return { message, cast, createMember }
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
