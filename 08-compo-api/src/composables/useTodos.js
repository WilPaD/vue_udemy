import { computed, ref } from 'vue'
import { useStore } from 'vuex';

const useTodo = () => {

    //Composables al inicio orden: (Los de terceros primero, los mios al final)
    const store = useStore()


    const currentTab = ref('all')


    const pendding = computed( () => store.getters['pendingTodos'] ) 


    /* Estos no los uso en el template
    const all = computed(() => store.getters['allTodos'] )
    const completed = computed(() => store.getters['completedTodos']) 
    */
        
    //A la función getTodosByTab hay que enviarle valor pues lo que está regresando es una función y no un objeto como tal
    const getTodoByTab = computed( ()=> store.getters['getTodosByTab'](currentTab.value) )
        
    return{
        currentTab,
        pendding,

        getTodoByTab,
        tooggleTodo: ( id ) => store.commit('toggleTodo', id)
    }

}

export default useTodo