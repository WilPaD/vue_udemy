import { computed, ref } from 'vue'
import { useStore } from 'vuex';

const useTodo = () => {


    const isOpen = ref(false)
    const textTodo = ref('')

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
     
    //llamamos la mutation del vuex y limpia el input del form
    const onSubmit = (text) => {
        store.commit('createTodo', text)
        isOpen.value = false
        textTodo.value = ''
    } 

    return{
        isOpen,
        textTodo,
        currentTab,
        pendding,

        getTodoByTab,
        tooggleTodo: ( id ) => store.commit('toggleTodo', id),
        onSubmit,
    }

}

export default useTodo