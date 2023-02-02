
//El string describe el nombre del componente
describe('Example Component', () => {
  //El string del test es una descripción de lo que queremos probar en el componente
  //Las test son evaluaciones pequeñas y cada test debe estar dentro del describe del componente
  test('Debe de ser mayor a diez', () => {

    //Arreglar
    let value = 10;

    //Estimulo
    value += 2
    
    //Obtener resultado
    expect( value ).toBeGreaterThan( 10 )

  })

})