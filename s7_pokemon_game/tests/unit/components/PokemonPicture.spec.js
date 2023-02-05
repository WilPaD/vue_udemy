/**
 * @jest-environment jsdom
 */

import { shallowMount } from "@vue/test-utils"
import PokemonPicture from "@/components/PokemonPicture.vue"

describe('Componente PokemonPicture', () => {
    
    test('Debe hacer match con snapshot', () => {
        const wrapper = shallowMount( PokemonPicture, {
            props:{
                pokemonId: 1,
                showPokemon: false
            }
        } )

        expect( wrapper.html() ).toMatchSnapshot()
    })


    test('Debe mostrar imagen oculta y el pokemon 100', () => {
        const wrapper = shallowMount( PokemonPicture, {
            props:{
                pokemonId: 100,
                showPokemon: false
            }
        })

        const [img1, img2] = wrapper.findAll('img')

        //Esperamos que exista la primer etiqueta img (fondo negro)
        expect( img1.exists() ).toBeTruthy()
        
        //Esperamos que la segunda etiqueta no se muestre pues showPokemon = false
        expect( img2 ).toBe(undefined)

        //verificamos que exista la clase hidden pokemon
        expect( img1.classes('hidden-pokemon') ).toBeTruthy()

        //Verificamos que la imagen mostrada es la correspondiente al pokemon 100
        //Aquí usamos la vm debido a que sabiamos que era una propiedad de Vue
        //con esto se carga el componente completo
        const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'
        expect(wrapper.vm.imgSrc).toBe(url)

        //Aquí usamos los atributos de la etiqueta
        //Aquí solo verificamos que la etiqueta cuente con el url sin cargar todo el componente
        expect( img1.attributes('src')).toBe(url)

    })

    test('Debe mostrar la imagen del pokemon si showPokemon = true', () => {
        const wrapper = shallowMount( PokemonPicture, {
            props:{
                pokemonId: 1,
                showPokemon: true
            }
        })

        /** 
         * Solo cargamos una etiqueta img debido a que la propiedad
         * showPokemon es true, lo que elimina la primer etiqueta img que cargará
         * el componente 
         */
        const img1 = wrapper.find('img')

        //Verificamos que la etiqueta se haya cargado
        expect( img1.exists() ).toBeTruthy()

        //Verificamos que no se haya cargado la etiqueta que oculta el pokemon
        expect(img1.classes('hidden-pokemon')).toBeFalsy()

        //Verificamos que la etiqueta cargada sea la que mostró el pokemon
        expect(img1.classes('fade-in')).toBeTruthy()
    })
})