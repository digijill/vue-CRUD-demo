<template>
    <header>
        <h1>{{ title }}</h1>
    </header>

</template>

<script>

export default {
  name: 'Header',
  props: { title: String }
}

</script>

<style scoped>

    header h1 {
        font-size: 4rem;
    }

</style>
