<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changeTitle"> Cambiar titulo </button>
    
  </div>
</template>
<script>

import { 
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  onServerPrefetch,
 } from 'vue'

export default{
  setup() {

    const title = ref('About page')

    console.log('Se llamó el setup')

    onMounted( () => {
      console.log('Se llamó onMounted')
    } )

    onUpdated( () => {
      console.log('Se llamó onUpdated')
    })

    onUnmounted( () => {
      console.log('Se llamó onUnmounted')
    })

    onBeforeMount( () => {
      console.log('Se llamó onBeforeMount')
    })

    onBeforeUpdate( () => {
      console.log('Se llamó onBeforeUpdate')
    })

    onBeforeUnmount( () => {
      console.log('Se llamó onBeforeUnmount')
    })

    onErrorCaptured( () => {
      console.log('Se llamó OnErrorCaptured')
    })

    onRenderTracked( () => {
      console.log('Se llamó onRenderTracked')
    })

    onRenderTriggered( () => {
      console.log('Se llamó onRenderTriggered')
    })

    onActivated( () => {
      console.log('Se llamó onActivated')
    })

    onDeactivated( () => {
      console.log('Se llamó onDeactivated')
    })

    onServerPrefetch( () => {
      console.log('Se llamó onServerPrefetch')
    })

    return{
      title,
      changeTitle: () => title.value = 'New About'
    }

  }
}

</script>