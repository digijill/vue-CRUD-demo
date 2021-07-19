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
            context.emit('create-member', member.value)

            member.value.name = ''
            member.value.username = ''
            member.value.email = ''
        }

        return { member, addNewMember }
    }
}

</script>

<style scoped>

</style>