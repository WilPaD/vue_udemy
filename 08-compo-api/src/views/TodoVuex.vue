<template>
    <h1>Lista de Tareas de Thanos</h1>
    <h4>Tareas: {{ $store.state.todo.length }}</h4>
    <!-- <h4>Pendientes: {{ $store.state.todo.filter(t => !t.completed).length }}</h4> -->
    <h4>Pendientes usando Getters: {{ pendding.length }}</h4>


    <h4>Todas las tareas: {{ all.length }}</h4>
    <h4>Tareas Completadas: {{ completed.length }}</h4>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex';

    export default {
       setup(){

        const store = useStore()

        const pendding = computed( () => store.getters['pendingTodos'] )
        
        const all = computed(() => store.getters['allTodos'] )
        const completed = computed(() => store.getters['completedTodos'])
       
        return{
            all,
            completed,
            pendding,
        }

       } 
    }
</script>

<style>

</style>