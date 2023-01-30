const app = Vue.createApp({
    /*
    template: `
    <h1> Hola Mundo </h1>
    <!-- si pones {{ }} se hará una expresión de JavaScript válida, ciclos,if no son válidos (Un ternario si funciona) -->
    <p> Desde app.js </p> 
    `
    */

    data(){
        return{
            quote: 'Soy Batman',
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote() {
            console.log('Hola Mundo de nuevo ')
            this.author = 'Wilbert José'

            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }

})

app.mount("#myApp")
