import {shallowMount, mount} from '@vue/test-utils'
import Counter from '@/components/Counter'


describe('Componente Counter', () => {
    /*
        test('Debe hacer match con el snapshot', () => {
        
        const wrapper = shallowMount( Counter )
            
        expect( wrapper.html() ).toMatchSnapshot()
    })
    */
    test('h2 debe mostrar el valor por defecto "Counter"', () => {

        //Crea la instancia del componente montado
        const wrapper = shallowMount( Counter )

        //Con este expect verificamos que la etiqueta h10 exista, para luego darle un valor con toBeTruthy
        //Esto sirve como condición para continuar con la prueba si es false, terminará y no continuará con la prueba
        expect( wrapper.find('h2').exists() ).toBeTruthy()
        
        const h2 = wrapper.find('h2')

        expect( h2.text() ).toBe('Counter')

    })
})