<template>
    <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
</template>

<script>

export default {
  name: 'Navigation'
}
</script>

<style scoped>

    nav ul {
        list-style: none;
    }

    nav li {
        display: inline-block;
        padding-left: 1rem;
        font-size: 2rem;
    }
</style>
