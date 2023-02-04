module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
}
/**Básicamente, jest se ejecuta en el entorno Node.js, por lo que utiliza 
 * módulos que siguen el CommonJS. Si desea utilizar axios de hasta 1.x.x, 
 * debe transpilar el módulo JavaScript del tipo ECMAScript al tipo CommonJS. 
 * Jest ignora /node_modules/ directorio para transformar básicamente. 
 * Por lo cual hay que anular la opción transformIgnorePatterns */