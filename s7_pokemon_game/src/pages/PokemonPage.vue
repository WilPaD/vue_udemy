<template>
    <h1>¿ Quién es este Pokemon ?</h1>
    <!-- Imagen Pokemon -->
    <PokemonPicture :pokemonId="4" :showPokemon="true" />

    <!-- Opciones Pokemon -->
    <PokemonOptions />
    
</template>

<script>

    import PokemonOptions from '@/components/PokemonOptions.vue';
    import PokemonPicture from '@/components/PokemonPicture.vue';
    
    import getPokemonOptions from '@/helpers/getPokemonOptions'

    export default {
        components:{    
            PokemonPicture,
            PokemonOptions
        }
        
    }

</script>

<style>

</style>
