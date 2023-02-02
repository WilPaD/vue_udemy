import {shallowMount, mount} from '@vue/test-utils'
import Counter from '@/components/Counter'


describe('Componente Counter', () => {
    
    test('Debe hacer match con el snapshot', () => {
        
        const wrapper = shallowMount( Counter )
        
        
        
        expect( wrapper.html() ).toMatchSnapshot()
    })

})