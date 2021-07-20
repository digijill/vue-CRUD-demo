<template>
<h1>Add new cast member:</h1>
<div>
    <label for="newName">Name:</label>
    <input type="text" id="newName" v-model='member.name' placeholder="Enter name..." />

    <label for="newUserName">Username:</label>
    <input type="text" id="newUserName" v-model='member.username' placeholder="Enter username..." />

    <label for="newEmail">Email:</label>
    <input type="email" id="newEmail" v-model='member.email' placeholder="Enter email..." />

    <button v-on:click='addNewMember'>Add Cast Member</button>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  name: 'AddNewCastMember',
  emits: ['create-member'],
  setup (props, context) {
    const member = ref({
      name: '',
      username: '',
      email: ''
    })

    const addNewMember = () => {
      if ((member.value.name !== '') && (member.value.username !== '') && (member.value.email !== '')) {
        context.emit('create-member', {
          name: member.value.name,
          username: member.value.username,
          email: member.value.email
        })

        member.value.name = ''
        member.value.username = ''
        member.value.email = ''
      }
    }

    return { member, addNewMember }
  }
}

</script>

<style scoped>
h1 {
  margin-top: 0.5rem;
}

label {
  float: left;
  width: 30vw;
  margin-top: 1rem;
  padding: 0.5rem;
}

input[type=text] {
  margin-left: auto;
}

input {
  float: left;
  width: 60vw;
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: 1.1rem;
}

button:focus {
  border-color:#333;
}

button {
  float: none;
  width: 30vw;
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1.0rem;
  margin: 0.5rem auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.3rem;
}
</style>
