<template>
  <h2>Espere por favor... </h2>
  <h2> Usuarios </h2>
  <h5> Error en la carga... </h5>

  <div>
    <ul>
      <li>
        <h4> Nombre de la persona </h4>
        <h6> email@email.com </h6>
       </li>
    </ul>
  </div>

  <button>Atras</button>
  <button>Siguiente</button>
  <span> Página: 5 </span>

</template>

<script>
  import { ref } from 'vue'
  import axios from 'axios'

  export default {
    
    setup(){

      const users = ref([])
      const isLoading = ref(true)
      const currentPage = ref(1)
      const errorMessage = ref(1)

      const getUsers = async(page = 1) => {
        
        if(page <= 0) page = 1

        isLoading.value = true

        const resp = await axios.get('https://reqres.in/api/users', {
          params:{ page }
        })

        if( data.data.length > 0 ){
          users.value = data.data
          currentPage.value = page
        }else if(currentPage.value > 0){
          errorMessage.value = 'No hay más usuarios'
        }

      }

      getUsers()  
    }
  }
</script>

<style scoped>

  h2{
    text-align: center;
    width: 100%;
  }

  div{
    display: flex;
    justify-content: center;
    text-align: center;
  }

  ul{
    width: 250px;
  }

</style>