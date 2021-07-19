<template>
    <footer>
        <h1>{{ footerMessage }}</h1>
    </footer>
</template>

<script>

export default {
  name: 'Footer',
  props: { footerMessage: String }
}
</script>

<style scoped>

    footer {
        margin: auto
    }

</style>
