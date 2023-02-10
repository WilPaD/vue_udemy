<template>
    <h1>Lista de Tareas de Thanos</h1>
    <h4>Tareas: {{ $store.state.todo.length }}</h4>
    <!-- <h4>Pendientes: {{ $store.state.todo.filter(t => !t.completed).length }}</h4> -->
    <h4>Pendientes usando Getters: {{ pendding.length }}</h4>

    <hr>
    <button 
        :class="{ 'active': currentTab === 'all'}"
        @click="currentTab = 'all'">
        Todos
    </button> 

    <button 
        :class="{ 'active': currentTab === 'pendding'}"
        @click="currentTab ='pendding'">
        Pendientes
    </button>

    <button 
        :class="{ 'active': currentTab === 'completed'}"
        @click="currentTab ='completed'">
        Completados
    </button> 

    <div>
        <ul>
            <li v-for="todo in getTodoByTab" :key="todo.id"
                :class="{ 'completed' : todo.completed }"
                @dblclick="tooggleTodo(todo.id)">
                {{ todo.text }}
            </li>
        </ul>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex';

    export default {
       setup(){
        //Composables al inicio orden: (Los de terceros primero, los mios al final)
        const store = useStore()


        const currentTab = ref('all')


        const pendding = computed( () => store.getters['pendingTodos'] )        
        const all = computed(() => store.getters['allTodos'] )
        const completed = computed(() => store.getters['completedTodos'])
       
        //A la función getTodosByTab hay que enviarle valor pues lo que está regresando es una función y no un objeto como tal
        const getTodoByTab = computed( ()=> store.getters['getTodosByTab'](currentTab.value) )
        
        return{
            currentTab,
            all,
            completed,
            pendding,

            getTodoByTab,
            tooggleTodo: ( id ) => store.commit('toggleTodo', id)
        }

       } 
    }
</script>

<style scoped>
div{
    display: flex;
    justify-content: center;
    text-align: center;
}

ul{
    width: 300px;
    text-align: left;
}

li{
    cursor: pointer;
}

.active{
    background-color: #2c3e50;
    color: white;
}

.completed{
    text-decoration: line-through;
}
</style>