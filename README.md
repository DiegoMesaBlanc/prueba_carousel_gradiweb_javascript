# Reto técnico

## Objetivos

- Maquetar por medió de HTML5 - JS - SASS una estructura que nos permita construir una UI similar al recurso provisionado diseño
- Provisionar estilos y garantizar una UX que le permita al usuario interactuar desde diferentes pantallas (diseño responsivo - incluido en el diseño)
- Formular interacciones que permitan navegar por los componentes respetando buenas prácticas de UX
- Analizar la lógica utilizada para renderizar los recursos provisionados vía API - Endpoints
- Atención al detalle (pixel perfect)


## Especificaciones técnicas 

- El carrusel de la sección Discover our ﻿planet-friendly offer, debe ser 100% funcional y respetar el diseño desktop - responsive. Debes consumir el siguiente endpoint. En el API de productos encontrarás la propiedad tags que contiene un número entre sus etiquetas. Las estrellas / reviews del producto deben ser renderizadas con base en la siguiente lógica:
De 0 a 100 = 1 Estrella
De 100 a 200 = 2 Estrellas
De 200 a 300 = 3 Estrellas
De 300 a 400 = 4 Estrellas
De 400 a 500 = 5 estrellas
Si el producto tiene más de una etiqueta numérica, debes hacer uso del promedio
No olvides renderizar el número de la etiqueta

![](https://gradistore-spi.herokuapp.com/products/all)

- Para el newsletter solo debes validar que el dato ingresado sea un correo electrónico y mostrar un mensaje de validación en el evento submit.

- Puedes usar React JS / VUE JS, pero es mejor valorado el uso de Vanilla JS . El uso de jQuery no será válido para la prueba

- Se valorará el uso de buenas prácticas de programación, orden, patrones de diseño de aplicaciones, creatividad, experiencia de usuario y documentación del trabajo.

- Crear un repositorio público, en el cual evidencie buenas prácticas con un sistema de versionamiento y el código fuente del producto final. Si el desarrollo es desplegado en un servidor, será mejor valorado.



## Criterios de evaluación - Lógica

- Manipulación de objetos
- Uso de asincronismo y buenas prácticas para el consumo de API’s - Endpoints
- Uso de condicionales (if-else | switch | operador ternario)
- Uso de bucles (for | for..in | for..of | while)
- Uso de funciones (parámetros | argumentos | valor de retorno)
- Declaración correcta de variables 
- Uso de selectores del DOM.
- Manejo de eventos del DOM.
- Manipulación dinámica del DOM. (appendChild | createElement | createTextNode | innerHTML | textContent | etc.)
- Entendimiento documentación API


## Criterios de evaluación - Habilidades maquetación

- Sintaxis, orden, secuencialidad.
- Uso de HTML semántico.
- Uso de selectores de CSS - SASS


## Criterios de evaluación - Usabilidad

- Crear prototipos para obtener feedback e iterar.
- Aplicar los principios de diseño visual (contraste, alineación, jerarquía)


> [!NOTE]
> Puntos realizados

Lo unico que se me pasó por alto es realizar el seguimiento en github del proceso de creación y manipulación del proyecto y no se realiza despliegue en algún servidor, el cual generaba mayor puntaje dentro de la prueba


✅ Se realizan todos los puntos propuestos dentro de la prueba
✅ El proyecto se realiza un Vanilla Javascript



- Correr el proyecto normal, como un HTML



**Commands**
- run: 
```bash
npm start
```
