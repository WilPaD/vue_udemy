import Indecision from '@/components/Indecision'
import { shallowMount, mount } from '@vue/test-utils'

describe('Componente Indecision', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount( Indecision )
    })

    test('Debe hacer match con snapshot', () => {

        expect( wrapper.html ).toMatchSnapshot()

    })

})