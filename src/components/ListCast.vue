<template>
<table>
    <tr>
        <th>User ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
    </tr>
    <tr v-for="member in cast" v-bind:key="member.id">
        <td>{{ member.id }}</td>
        <td>{{ member.name }}</td>
        <td>{{ member.username }}</td>
        <td>{{ member.email }}</td>
    </tr>
</table>
</template>

<script>
export default ({
  name: 'ListCast',
  props: {
    cast: Array
  }
})
</script>

<style scoped>
table {
    margin: 2rem auto 4rem;
}
td, th {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
