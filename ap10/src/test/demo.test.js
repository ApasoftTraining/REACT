import hola from './Hola.js';


test('prueba2',()=>{

    const texto='Hola Alberto';

    const texto1=hola();

    expect(texto1).toBe(texto);
})