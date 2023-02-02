import Indecision from '@/components/Indecision'
import { shallowMount, mount } from '@vue/test-utils'


describe('Componente Indecision', () => {

    let wrapper,
        clgSpy;


    //Solucionar error del fetch en node js
    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount( Indecision )

        clgSpy = jest.spyOn( console, 'log' )

        jest.clearAllMocks()
    })
    /*
    test('Debe hacer match con snapshot', () => {

        expect( wrapper.html ).toMatchSnapshot()

    })
    */
    test('Escribir en el input no debe disparar nada (console.log)', async() => {

        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')

        //Esperamos que el console log fue llamado 1 vez
        expect( clgSpy ).toHaveBeenCalledTimes(1)
        //Verificamos que la función getAnswer no fué llamada
        expect( getAnswerSpy ).not.toHaveBeenCalled()

    })

    test('Escribir el simbolo "?" debe disparar el getAnswer', async() => {
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')
        await input.setValue('Sere rico?')

        expect( clgSpy ).toHaveBeenCalledTimes(1)
        expect( getAnswerSpy ).toHaveBeenCalledTimes(1)

    })

    test('Pruebas en getAnswer', async() => {
        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeTruthy()
        expect( wrapper.vm.image ).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect( wrapper.vm.answer ).toBe('Si!')
    })

    test('pruebas en getAnswer - Fallo en el API', async() => {
        
        fetch.mockImplementationOnce( () => Promise.reject('API is down'))

        await wrapper.vm.getAnswer()
        //Fallo en el API
        const img = wrapper.find('img')
        
        expect( img.exists() ).toBeFalsy()
        expect( wrapper.vm.answer ).toBe('No se pudo cargar el API')
    })


})