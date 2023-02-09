<template>
    <h1>Counter Vue</h1>
    <h2>{{ counter }}</h2>

    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
</template>
<script>
import { ref } from 'vue';

export default {
    name: 'Counter',
    props:{},
    emits:{},
    setup(){
        const counter = ref(5)

        /**
         * Lo ideal es que las funciones se creen dentro del setup()
         * si se necesia de la referencia a la misma, de lo contrario
         * puede hacerse a cómo se dejó en el return pues sólo hace 
         * un incremento o decremento
        const increase = () => {
            counter.value++
        }

        const decrease = () => {
            counter.value--
        }
         */

         //Aquí va todo lo que vamos a usar en el template
        return{
            //Objetos reactivos
            counter,

            //Métodos
            increase: () => counter.value++,
            decrease: () => counter.value--,
        }
    }
}
</script>
<style>
    
</style>