/**
 * @jest-environment jsdom
 */

import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'

describe('PokemonPage Component', () => {
    
    test('debe de hacer match con el snapshot', () => {  
        const wrapper = shallowMount(PokemonPage,{
            
        })      
        expect( wrapper.html() ).toMatchSnapshot()
    })

})