import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage"
import { pokemons } from "../mocks/pokemons.mock";

describe('PokemonPage Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    
    test('Debe hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
    

    test('debe de llamar el mixPokemonArray al montar', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        wrapper = shallowMount( PokemonPage )

        expect( mixPokemonArraySpy ).toHaveBeenCalled()
    })

    test('debe hacer match con el snapshot cuando salgan los pokemons', () => {
        //El mount crea el componente y monta todo el componente
        //El shallowMount monta sutilmente el componente sin todo el ciclo de vida
        const wrapper = shallowMount( PokemonPage, {
            data(){
                return{
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })


    test('Debe de mostrar los componentes PokemonPicture y PokemonOptions', () => {

        /** Deben existir
         * PokemonPicture
         * PokemonOption
         */

        //PokemonPicture attribute pokemonId === 1
        //PokemonOptions attribute pokemons toBe true
        const wrapper = shallowMount( PokemonPage, {
            data(){
                return{
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')

        expect( picture.exists() ).toBeTruthy()
        expect( options.exists() ).toBeTruthy()

        
        expect( picture.attributes('pokemonid') ).toBe('1')
        expect( options.attributes('pokemons') ).toBeTruthy()
    })

    test('pruebas para checkAnserw', async() => {
        const wrapper = shallowMount( PokemonPage, {
            data(){
                return{
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        //Si enviamos un dato a una función dentro del componente
        // teenemos que esperar a que renderice el componente de nuevo
        // Por lo tanto esto se vuelve asincrono
        await wrapper.vm.checkAnswer(1)

        //Verificamos que el h2 se haya montado luego de ejecutar la función
        // checkAnswer
        expect(wrapper.find('h2').exists()).toBeTruthy()

        expect(wrapper.vm.showPokemon).toBeTruthy()

        expect( wrapper.find('h2').text() ).toBe(`Correcto, ${ pokemons[0].name }`)
        

        await wrapper.vm.checkAnswer(6)

        expect(wrapper.vm.message).toBe(`Oops, era ${ pokemons[0].name }`)
        //const fnd = wrapper.find('h2')
        
        //expect()

        //expect( wrapper.find('h2').text() ).toBe(`Oops, era ${ this.pokemon[0].name }`)

    })

})