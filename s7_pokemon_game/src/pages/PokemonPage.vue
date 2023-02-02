<template>
    <h1>¿ Quién es este Pokemon ?</h1>
    <!-- Imagen Pokemon -->
    <PokemonPicture />

    <!-- Opciones Pokemon -->
    <PokemonOptions />
    
</template>

<script>

    import PokemonOptions from '@/components/PokemonOptions.vue';
    import PokemonPicture from '@/components/PokemonPicture.vue';
    
    export default {
        components:{    
            PokemonPicture,
            PokemonOptions
        }
        
    }

</script>

<style>

</style>
