<template>

    <img v-if="image" :src="image" alt="bg">
    <div class="bg-dark"></div>

    <div class="indecision-container">
        
       <input
          v-model="question"
          type="text"
          placeholder="Hazme una pregunta">
        <P> Recuerda terminar con signo de interrogación (?) </P>
        
        <div v-if="isValidQuestion">                
            <h2>{{ question }}</h2>
            <h1>{{ answer }}</h1>
        </div>

    </div>
    
</template>

<script>
export default {
    data(){
        return{
            question: null,
            answer: null,
            image: null,
            isValidQuestion: false
        }
        
    },
    methods:{
        async getAnswer(){
            const idioma = {
                yes: 'Si!',
                no: 'No!',
                maybe: 'Tal vez...'
            }
            try{
                this.answer = 'Pensando ...'

                const {answer, image} = await fetch('https://yesno.wtf/api').then(r => r.json() )

                this.answer = idioma[answer]
                this.image = image    
            }catch(error){
                console.log('IndecisionComponent: ', error)
                this.answer='No se pudo cargar el API'
                this.image = null
            }
            
        }
    },
    watch:{
        question(value, oldValue){
            this.isValidQuestion = false

            console.log({value})

            if(!value.includes('?')) return
            this.isValidQuestion = true

            this.getAnswer()
        }
    }
}
</script>

<style>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>