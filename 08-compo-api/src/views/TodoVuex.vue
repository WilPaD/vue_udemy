<template>
    <h1>Lista de Tareas de Thanos</h1>
    <h4>Tareas: {{ $store.state.todo.length }}</h4>
    <!-- <h4>Pendientes: {{ $store.state.todo.filter(t => !t.completed).length }}</h4> -->
    <h4>Pendientes usando Getters: {{ pendding.length }}</h4>

    <hr>
    <button :class="{ 'active': currentTab === 'all' }" @click="currentTab = 'all'">
        Todos
    </button>

    <button :class="{ 'active': currentTab === 'pendding' }" @click="currentTab = 'pendding'">
        Pendientes
    </button>

    <button :class="{ 'active': currentTab === 'completed' }" @click="currentTab = 'completed'">
        Completados
    </button>

    <div>
        <ul>
            <li v-for="todo in getTodoByTab" :key="todo.id" :class="{ 'completed': todo.completed }"
                @dblclick="tooggleTodo(todo.id)">
                {{ todo.text }}
            </li>
        </ul>
    </div>
</template>

<script>

import useTodo from '@/composables/useTodos'

export default {
    setup() {

        const { pendding, currentTab, getTodoByTab, tooggleTodo } = useTodo()

        return {
            pendding,
            currentTab,

            getTodoByTab,
            tooggleTodo
        }
    }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 300px;
    text-align: left;
}

li {
    cursor: pointer;
}

.active {
    background-color: #2c3e50;
    color: white;
}

.completed {
    text-decoration: line-through;
}
</style>