<template>
    <div>
        <RouterLink :to="{ name: 'home' }">Pokemon List</RouterLink>
        <RouterLink :to="{ name: 'pokemon-id', params: { id: 10 }}">Pokemon ID</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
    </div>
</template>

<style scoped>

div {
    padding: 0 30px;
}

div a{
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}

a.router-link-exact-active{
    color: #42b983
}

</style>