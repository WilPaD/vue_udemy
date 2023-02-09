<template>
  <div class="home">
   <h1>Reactive vs Ref</h1>
   <h3>{{ ironman }}</h3>
   <h3>{{ hulk }}</h3>
    
    <button @click="changeIronman">Cambiar Ironman</button>
    <button @click="changeHulk">Cambiar Hulk</button>

    <h3>IronMan: {{ ironmanIsAlive }}</h3>
    <h3>Hulk: {{ hulkIsAlive }}</h3>

    <button @click="changeStatus">Change Status</button>

  </div>
</template>

<script>
import { ref } from 'vue'

// @ is an alias to /src
import { Ref, reactive } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    
    //Ref funciona con todo tipo de datos, mientras que reactive solo con objetos
    const ironman = ref({name: 'Tony', age: 45})
    const hulk = reactive({name: 'Bruce', age: 43})


    const ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)


    const changeStatus = () =>{
      hulkIsAlive.value = !hulkIsAlive.value
      //ironmanIsAlive = reactive(!ironmanIsAlive)
    }

    return{
      ironman,
      hulk,

      ironmanIsAlive,
      hulkIsAlive,

      changeStatus,

      changeIronman: () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 48
      },

      changeHulk: () => {
        hulk.name = 'Bruce Banner'
        hulk.age = 45
      }
    }

  }
}
</script>
