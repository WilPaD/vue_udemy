<template>
    <h2>Counter!!!</h2>
    <p> {{ counter }}<sup>2</sup> = {{ counter*counter }} </p>

    <p> {{ counter }}<sup>2</sup> = {{ squareCounter }} </p>
    <p> {{ counter }}<sup>2</sup> = {{ squareCounter }} </p>
    <p> {{ counter }}<sup>2</sup> = {{ squareCounter }} </p>
    <p> {{ counter }}<sup>2</sup> = {{ squareCounter }} </p>
    <p> {{ counter }}<sup>2</sup> = {{ squareCounter }} </p>
    <p> {{ counter }}<sup>2</sup> = {{ squareCounter }} </p>
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

</style>