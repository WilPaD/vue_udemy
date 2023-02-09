<template>
    <h1>Buscar Pokemon: {{ pokemonId }}</h1>
    <form @submit.prevent="onSumbmit">
        <input type="number"
            placeholder="Número del pokemon"
            v-model="pokemonId"
            ref="txtSearchId"
            >
    </form>
    <br>
    <span>Presiona enter para buscar</span>
</template>

<script>
import { ref, onActivated } from "vue";
import { useRouter } from "vue-router";

export default {
    setup(){
        const router = useRouter()

        const pokemonId = ref(1)
        const txtSearchId = ref()

        onActivated(() => {
            txtSearchId.value.select()
        })

        return{
            pokemonId,
            txtSearchId,

            onSumbmit: () => {
                console.log('Pokemon a buscar: ', pokemonId.value)
                router.push({name: 'pokemon-id', params: { id: pokemonId.value }})
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>