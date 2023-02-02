import Indecision from '@/components/Indecision'
import { shallowMount, mount } from '@vue/test-utils'

describe('Componente Indecision', () => {

    let wrapper,
        clgSpy;
    beforeEach(() => {
        wrapper = shallowMount( Indecision )

        clgSpy = jest.spyOn( console, 'log' )
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
        expect( clgSpy ).toHaveBeenCalled(1)
        //Verificamos que la función getAnswer no fué llamada
        expect( getAnswerSpy ).toHaveBeenCalled(0)

    })

    test('Escribir el simbolo "?" debe disparar el fetch', () => {

    })

    test('Pruebas en getAnswer', () => {

    })

    test('pruebas en getAnswer - Fallo en el API', () => {

    })


})