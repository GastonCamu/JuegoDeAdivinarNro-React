
# Juego de Adivina el Número

## Enlaces

-   **Repositorio:** [GitHub - Juego de Adivina el Número](https://github.com/GastonCamu/JuegoDeAdivinarNro-React)

-   **Despliegue:** [Juego de Adivina el Número](https://juego-de-adivinar-react.vercel.app/)

## Instrucciones de Uso

1.  **Inicio del Juego:** Al ingresar al juego, se te solicitará un nombre de usuario. Si el nombre ya ha sido utilizado, no podrás seleccionarlo nuevamente.
    
2.  **Dinámica del Juego:** Una vez dentro del juego, deberás adivinar un número. Ya sea que ganes o pierdas, el sistema guardará tu puntuación en una tabla. Si decides reintentar, tendrás la oportunidad de mejorar tu puntaje. En caso de obtener un puntaje menor al anterior, se conservará el puntaje más alto alcanzado.
    
3.  **Tabla de Puntuaciones:** En la sección de tablas, se muestran todos los nombres de los jugadores junto con sus puntajes, ordenados de mayor a menor. Al presionar el botón de "Volver" en la tabla de puntuaciones:
    
    -   Si aún no ingresaste un nombre (es decir, te encuentras en la pantalla de inicio), serás redirigido nuevamente a la pantalla de inicio para ingresar un nombre.

    -   Si ya estás dentro del juego, el botón de "Volver" reiniciará automáticamente el juego con el nombre del usuario que se cargó anteriormente.
4.  **Animación de Estrellas:** El juego incluye una animación de estrellas generada mediante `spans`, que se posicionan de manera aleatoria y tienen un efecto de titilado. Esta implementación fue creada como una prueba de generación de código en React.
    
5.  **Responsividad:** Aunque el juego no es completamente responsive, se han utilizado medidas dinámicas para que se adapte ligeramente a pantallas grandes.