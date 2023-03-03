# Ejercicio recopilatorio React

Crea una aplicación con React y ve transformandola para que pase por los siguiente estados:

- Estado 1:
    - Un único componente
    - Un  botón que incrementa un número:
        ```jsx
        <h1>0</h1>
        <button>Incrementar</button>
        ```
- Estado 2:
    - Un único componente.
    - Un contador con dos botones: uno incrementa el contador y el otro lo disminuye.
        ```jsx
        <h1>0</h1>
        <button>Incrementar</button>
        <button>Reducir</button>
        ```
- Estado 3:
    - Un único componente.
    - Igual que el anterio, pero cada botón muestra cuantas veces ha sido pulsado.
        ```jsx
        <h1>0</h1>
        <button>Incrementar(0)</button>
        <button>Reducir(0)</button>
        ```
- Estado 4:
    - Dos componentes.
    - Sustituimos los botones por un componente `<Boton/>` propio que cuenta y muestra cuantas veces es pulsado y al que podamos personalizar:
        - El texto que muestra
        - La operación de incremento o decremento
        ```jsx
        <h1>0</h1>
        <Boton texto="Incrementar" operacion={incremento}/>
        <Boton texto="Reducir" operacion={decremento}/>
        ```
- Estado 5:
    - Dos componentes.
    - Añadimos uno de nuestros `<Boton/>` que ponga en marcha el incremento automático del contador, de modo que su valor aumente cada segundo.
        ```jsx
        <h1>0</h1>
        <Boton texto="Incrementar" operacion={incremento}/>
        <Boton texto="Reducir" operacion={decremento}/>
        <Boton texto="Automático" operacion={iniciaAutomatico}/>
        ```