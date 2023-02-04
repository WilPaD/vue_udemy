/**
 * @jest-environment node
 */
 // El comentario de arriba soluciona el error TextEncoder is not defined al momento de las pruebas 
import pokemonApi from "@/api/pokemonApi"

describe('pokemonApi', () => {
    test('Axios debe estar configurado con el API de Pokemon', () => {
        expect(pokemonApi.defaults.baseURL)
            .toBe('https://pokeapi.co/api/v2/pokemon')

    })
})