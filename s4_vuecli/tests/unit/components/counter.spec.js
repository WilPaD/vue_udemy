import {shallowMount, mount} from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Componente Counter', () => {
    //Crea la instancia del componente montado
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount( Counter )
    })

    /*
        test('Debe hacer match con el snapshot', () => {
        
        const wrapper = shallowMount( Counter )
            
        expect( wrapper.html() ).toMatchSnapshot()
    })
    */
    test('h2 debe mostrar el valor por defecto "Counter"', () => {

        //Con este expect verificamos que la etiqueta h10 exista, para luego darle un valor con toBeTruthy
        //Esto sirve como condición para continuar con la prueba si es false, terminará y no continuará con la prueba
        expect( wrapper.find('h2').exists() ).toBeTruthy()
        
        const h2 = wrapper.find('h2')

        expect( h2.text() ).toBe('Counter')

    })

    test('El valor por defecto debe ser 100 en etiqueta p',() => {
        //pTags
        //const pTags = wrapper.findAll('p').at(1) 

        //Aquí encontramos la etiqueta mediante el indicador que le asignamos a la etiqueta p a probar
        const pTags = wrapper.find('[data-testid="counter"]')

        //Expect
        expect( pTags.text() ).toBe('10')

    })

    test('Probando el botón incrementar', async() => {
        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        //Tarea probar 2 clicks en Decrease
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const pTags = wrapper.find('[data-testid="counter"]').text()

        expect( pTags ).toBe('9')
    })

    //leer props del component.vue
    test('Debe establecer valor por defecto', () => {
        //Obteniendo propiedad start del componente counter
        const { start } = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( Number(value) ).toBe( start )
    })

    test('Debe mostrar la prop title', () => {
        //Declaramos el valor para menos código en props
        const title = 'Hola Mundo'

        const wrapper = shallowMount( Counter, { 
            //Aquí mandamos los propiedades en el componente
            props: {
                title
            }
         } )

         //En el toBe ponemos el title porque además de ser el valor que mandamos, es el esperado 
         expect( wrapper.find('h2').text()).toBe(title)


    })
})