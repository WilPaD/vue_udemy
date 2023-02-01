<template>
    <h2>Counter</h2>
    <p> {{ counter }}<sup>2</sup> = {{ counter*counter }} </p>

    <div>
        <button @click="increase"> +1 </button>
    
        <button @click="decrease"> -1 </button>
    </div>
</template>

<script>
export default {
    name: 'Contador',
    data(){
        return {
            counter: 5
        }
    },
    methods: {
        getSquareValue(){
            console.log("Se lanzó en methods")
            return this.counter * this.counter
        },
        increase(){
            console.log('Increase')
            this.counter += 1
        },
        decrease(){
            console.log('Decrease')
            this.counter -= 1
        }
    },
    computed:{
        squareCounter(){
            console.log('Se lanzó en computed')
            return this.counter * this.counter
        }
    }
}
</script>

<style>

button{
    background-color: #64B887;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 03s ease-in-out;
}

button:hover{
    background-color: #5aa67b;
    transition: 0.3s ease-in-out
}

</style>