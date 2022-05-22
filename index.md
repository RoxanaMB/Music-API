# ÍNDICE
- [ÍNDICE](#índice)
- [INTRODUCCIÓN <a name="id1"></a>](#introducción-)
- [ESQUEMAS Y MODELOS <a name="id2"></a>](#esquemas-y-modelos-)
- [API REST <a name="id3"></a>](#api-rest-)
  - [POST <a name="id4"></a>](#post-)
  - [GET <a name="id5"></a>](#get-)
  - [UPDATE <a name="id6"></a>](#update-)
  - [DELETE <a name="id7"></a>](#delete-)
- [FUNCIONAMIENTO <a name="id8"></a>](#funcionamiento-)
  - [POST <a name="id9"></a>](#post-)
  - [GET <a name="id10"></a>](#get-)
  - [PATCH <a name="id11"></a>](#patch-)
  - [DELETE <a name="id12"></a>](#delete-)
- [CONCLUSIÓN <a name="id13"></a>](#conclusión-)
- [INTEGRANTES <a name="id14"></a>](#integrantes-)

# INTRODUCCIÓN <a name="id1"></a>

En esta práctica se tendrá que crear un **API REST**, haciendo uso de **Node** y **Express**, que permita almacenar una biblioteca de músical.

El sistema de información deberá permitir la gestión de las canciones, los artistas y las playlists. Además, el sistema deberá permitir que el usuario interactúe con la API para realizar las operaciones **CRUD** con cada uno de los elementos nombrados anteriormente: 

  * **Creación**: Crear una nueva canción, artista o playlist - **[C]reate**.
  * **Lectura**: Leer una canción, artista o playlist - **[R]ead**.
  * **Modificación**: Modificar una canción, artista o playlist - **[U]pdate**.
  * **Borrado**: Borrar una canción, artista o playlist - **[D]elete**.

Además, en esta práctica, para reemplazar el uso del paquete **LowDB** y hacer persistente la información guardada, se hará uso de **MongoDB Atlas** como sistema de base de datos no relacional y de Mongoose, para poder gestionar la base de datos comentada anteriormente desde **Node.js**.

El código fuente de la práctica se organizará en distintos directorios dentro de la carpeta ```/src```, donde se encontrarán todos los ficheros que contendrán las configuraciones y funcionalidades necesarias para crear nuestro sistema de datos. Dentro de este directorio podremos encontrar otros tres subdirectorios:

  * ```/db```: Contiene las configuraciones de la base de datos MongoDB Atlas.
  * ```/models```: Contiene las clases de los modelos que se utilizarán en la aplicación.
  * ```/routers```: Contiene las rutas de la API REST.

Por otro lado, se realizará un despliegue del API en **Heroku**, para poder acceder a la API desde cualquier lugar. Además, se realizarán distintas pruebas de la API, para poder comprobar que todo funciona correctamente y que, en caso de fallo, se pueda detectar.

También se creará la documentación, de forma automática, de todos los ejercicios que hayamos realizado haciendo uso de TypeDoc. Podremos consultar la documentación pulsando sobre el siguiente [_enlace_](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct12-music-api-grupo_g/tree/main/docs) que le llevará al directorio correspondiente o accediendo de forma manual al directorio ```/docs```.

Para acceder a la página web del informe podrá hacer pulsando sobre este [_enlace_](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct12-music-api-grupo_g/).

# ESQUEMAS Y MODELOS <a name="id2"></a>
Dana

# API REST <a name="id3"></a>
Dana
## POST <a name="id4"></a>
Dana
## GET <a name="id5"></a>
Dana
## UPDATE <a name="id6"></a>
Dana
## DELETE <a name="id7"></a>
Dana
# FUNCIONAMIENTO <a name="id8"></a>
En cuánto al funcionamiento de la API, es necesario que se pueda realizar una serie de pruebas para comprobar que todo funciona correctamente. Para ello hacemos uso de la herramienta [Thunder Clients](https://thunder-clients.herokuapp.com/), que nos permite realizar las pruebas de la API. 

![tests general](https://user-images.githubusercontent.com/72470014/169672653-e9fd8eb3-1aa6-41a3-8bb3-3fac8353ad96.png)

En la imagen anterior se puede observar que por cada operación que realizamos, se realiza una petición a la API, y se comprueba que la respuesta es la esperada en base al estado de la operación (2xx, 4xx, 5xx). Se necesita la URL conectada con **Heroku**, para poder realizar las pruebas.

## POST <a name="id9"></a>

Empezando por la operaciones de **POST**, se realizaron pruebas con body para poder crear artistas, canciones y playlists.

![testPost](https://user-images.githubusercontent.com/72470014/169672664-2cb059d7-71b4-4bd5-9adf-ebeac9a9638d.png)

Tomando como ejemplo correcto la creación de un artista, en este caso Rad Museum, se realiza una petición POST a la API, con el siguiente body:

```JSON
{
    "name": "Rad Museum",
    "genre": ["RB", "Hip hop"],
    "songs": ["Over The Fence", "Dancing In The Rain", "Off-Line", "Tiny Little Boy"],
    "monthlyListeners": 543012
}
```

En este caso la petición se realiza correctamente ya que la base de datos nos devuelve un status 200 y todos los requisitos necesarios para poder crear un artista son cumplidos. Se obtiene un resultado en el cual se muestra el nombre del artista, el género, las canciones y el número de años de escucha. Además, se muestra el id del artista, ya que se ha creado en la base de datos.

```JSON
{
  "genre": [
    "RB",
    "Hip hop"
  ],
  "songs": [
    "Over The Fence",
    "Dancing In The Rain",
    "Off-Line",
    "Tiny Little Boy"
  ],
  "monthlyListeners": 543012,
  "_id": "6289673fd9fd4f0016f60fef",
  "name": "Rad Museum",
  "__v": 0
}

```

Un ejemplo incorrecto, tomando como ejemplo una canción como **Over the fence** sería insertar un body como el siguiente:

```JSON
{
    "author": "6288f13e11e5e100166d2dad",
    "duration": "3:23",
    "single": true,
    "reproductions": 17291555
}
```

En este caso el body sería incorrecto ya que no cumple con los requisitos para poder crear una canción. Por ejemplo, no se puede insertar una canción sin nombre, ya que es un campo obligatorio. El status de la petición sería 400, ya que no se ha cumplido con los requisitos. El resultado sería un error de la API, ya que no se ha podido crear la canción.

```JSON
{
  "errors": {
    "genre": {
      "name": "ValidatorError",
      "message": "Path `genre` is required.",
      "properties": {
        "message": "Path `genre` is required.",
        "type": "required",
        "path": "genre"
      },
      "kind": "required",
      "path": "genre"
    },
    "title": {
      "name": "ValidatorError",
      "message": "Path `title` is required.",
      "properties": {
        "message": "Path `title` is required.",
        "type": "required",
        "path": "title"
      },
      "kind": "required",
      "path": "title"
    }
  },
  "_message": "Song validation failed",
  "name": "ValidationError",
  "message": "Song validation failed: genre: Path `genre` is required., title: Path `title` is required."
}

```
## GET <a name="id10"></a>

Pasamos a realizar una petición **GET** a la API, para comprobar que la base de datos está funcionando correctamente. Para este tipo de operaciones se realiza según: query o id.

Un ejemplo correcto para una canción como se puede observar en la siguiente imagen, es hacer uso del id de **Smooth Criminal**:

![testGetSmoothCriminal](https://user-images.githubusercontent.com/72470014/169672678-49cdf738-1e86-4434-8812-3cc1a3118628.png)

En este caso es un uso correcto porque se ha realizado una petición GET a la API, con el id de la canción **Smooth Criminal** creada. Se obtiene un resultado en el cual se muestra el nombre de la canción, el nombre del artista, la duración, si es un single o no, el número de reproducciones y el id de la canción.

```JSON
{
  "reproductions": 81928292,
  "_id": "6288fab811e5e100166d3006",
  "title": "Smooth Criminal",
  "author": {
    "genre": [
      "Pop",
      "RB",
      "Soul"
    ],
    "songs": [
      "Smooth Criminal"
    ],
    "monthlyListeners": 28761197,
    "_id": "6288db739921fb00163ca142",
    "name": "Michael Jackson",
    "__v": 0
  },
  "duration": "5:12",
  "genre": "Pop",
  "single": true,
  "__v": 0
}

```

Por otro lado, un ejemplo incorrecto para una canción como se puede observar en la siguiente imagen, es hacer uso del id de **Smooth Criminal** poniendo la ruta equivocada, por lo que devolverá un error 500.

![testGetSmoothCriminalidEquivocado](https://user-images.githubusercontent.com/72470014/169672703-e8f38da4-e64a-4281-b89a-c9bbe45a12ea.png)


Un uso correcto de la operación **GET** con query, es hacer uso de la ruta '/artist', '/song', '/playlist'  y añadir parametros según lo que se quiera obtener en la pestaña 'Query'.

![testGetQuerycorrecto](https://user-images.githubusercontent.com/72470014/169672724-10fa545a-3709-44da-81b5-3c179c038451.png)

Un uso incorrecto sería no rellanar algún parámetro, por lo que devolverá un error 400.

![testQueryIncorrecto](https://user-images.githubusercontent.com/72470014/169672753-0cdcb7d7-e8c5-4b2e-8173-19102c16ea53.png)

## PATCH <a name="id8"></a>

En cuánto al uso de la operación **PATCH**, igual que la operación **GET**, se realiza según: query o id.

Un ejemplo correcto para un artista según el ID de **Michael Jackson**, es hacer uso de la ruta '/artist' y añadir el id de **Michael Jackson**:

![testPatchMichaelJackson](https://user-images.githubusercontent.com/72470014/169672790-60c3b0f6-6ac1-46e2-911d-aabd8479bc44.png)

En este caso el uso es correcto, ya que todos los datos modificados son correctos. Se obtiene un resultado en el cual se muestra el nombre del artista, el género, las canciones y el número de años de escucha. Además, se muestra el id del artista, ya que se ha modificado en la base de datos. En este caso, se cambia el nombre a **Mike Jake**.

```JSON
{
  "genre": [
    "Pop",
    "RB",
    "Soul"
  ],
  "songs": [
    "Smooth Criminal"
  ],
  "monthlyListeners": 28761197,
  "_id": "6288db739921fb00163ca142",
  "name": "Micky Jake",
  "__v": 0
}

```

Y un ejemplo incorrecto sería intentar cambiar el género de **Michael Jackson**, por lo que devolverá un error 500.

```JSON
{
  "error": "Update is not permitted"
}
```

En el caso de hacer la petición con query de una playlist, por ejemplo, se hace uso de la ruta '/playlist' y sin añadir el id de la playlist:

![testPatchPlaylist](https://user-images.githubusercontent.com/72470014/169672802-bfd38404-927b-4a3b-aa24-29ef987621d0.png)

Mientras que en el body tedríamos lo siguiente:

```JSON
{
    "name": "Canciones"
}
```

La petición sería correcta ya que se ha modificado el nombre de la playlist, lo cual es un dato modificable. Se devolverá un status 200 y el resultado sería el siguiente:

```JSON
{
  "songs": [
    "62881b471186320016173f02",
    "62881ace1186320016173eff"
  ],
  "genre": [
    "Pop"
  ],
  "_id": "6288db769921fb00163ca14b",
  "name": "Canciones",
  "duration": "10:14",
  "__v": 0
}
```

Un incorrecto uso de la petición sería intentar modificar la duración de la playlist o no rellenar el campo **duration**.

![queryIncorrectoPlaylist](https://user-images.githubusercontent.com/72470014/169672814-145eada7-9ed6-471d-a2f1-86e7f02ec36a.png)

## DELETE <a name="id12"></a>

Finalmente pasando a la operación **DELETE**, se realiza según: query o id.
Tal y como explicado para las operaciones anteriores, se realiza un ejemplo correcto insertando en la ruta '/artist', '/song', '/playlist' y añadiendo el id de lo que se quiere eliminar. Obviamente, según el id, será incorrecto insertar un id inexistente.

![testDeletecorrecto](https://user-images.githubusercontent.com/72470014/169672861-fa360ee4-62d3-4524-82c3-a013389523f7.png)

Por otra parte, un ejemplo correcto para eliminar según query sería rellenar el campo con el nombre correcto de un artista, playlist o canción existente. Un ejemplo incorrecto vería una petición con el nombre inexistente o directamente un campo sin rellenar, por lo que devolvería un error 404.

![testDeleteincorrecto](https://user-images.githubusercontent.com/72470014/169672883-59b348df-b1ef-418d-addf-e44b99291e79.png)

Cabe destacar que para las varias operaciones, no se explicó cada test, sino que se explicó el caso de uso correcto y el caso de uso incorrecto de cada tipo y, tomando como ejemplo una playlist, un artista o una canción.


# CONCLUSIÓN <a name="id13"></a>

En conclusión, se puede comentar en este último proyecto grupal hemos podido emplear todas las técnicas y herramientas que se han ido aprendiendo a lo largo del curso en esta asignatura, algunas que se podrían destacar son:

- Uso de interfaces.
- Uso de TypeDoc para la documentación automática.
- Uso de Mongoose y MongoDB Atlas.
- Uso de Node.js.
- Uso de Express.
- Uso de Heroku.
- Uso de funciones síncronas y asíncronas.
- Testing.

Además de haber trabajado con lo que ya habíamos aprendido, es interesante destacar que también hemos podido mejorar nuestra base de datos haciendo uso de MongoDB Atlas, y de Mongoose, para poder realizar las operaciones CRUD y gestionar la nueva base de datos que se emplea en nuestro programa y emplear recursos para que un usuario pueda iteractuar con el programa.

Por otro lado, también se ha hecho uso de la herramienta Heroku para poder acceder a nuestra API en cualquier momento y desde cualquier lugar sin preocuparnos de si está en funcionamiento o no ya que la plataforma será la que se encargue de toda la infraestructura necesaria para que la API funcione mientras que nosotros solo tendremos que desarrollar la aplicación y configurarla.

# INTEGRANTES <a name="id10"></a>

- **Gabriel Alberto Luis Freitas:** alu0101348421
- **Dana Belen Choque Zárate:** alu0101328348
- **Daniele Vitale:** alu0101329017
- **Roxana Mihaela Baba:** alu0101339887
