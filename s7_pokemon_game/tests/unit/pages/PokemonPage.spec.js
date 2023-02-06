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










})