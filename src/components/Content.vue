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

export default {
  name: 'Content',
  components: {
    'app-list-cast': ListCast,
    'app-add-new-member': AddNewCastMember
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
