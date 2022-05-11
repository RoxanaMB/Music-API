<br>

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/actions/workflows/tests.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/actions/workflows/tests.yml)
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g?branch=main)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g)


# ÍNDICE

- [INTRODUCCIÓN](#id1).
- [CLASES](#id2).
  - [SIMPLES](#id3).
    - [Clase Album](#id4).
    - [Clase Artist](#id5).
    - [Clase Group](#id6).
    - [Clase MusicalGenres](#id7).
    - [Clase Playlist](#id8).
    - [Clase Song](#id9).
  - [INTERFAZ DE USUARIO](#id10).
    - [Clase Manager](#id11).
    - [Clase UI](#id12).
- [INTERFACES](#id13).
    - [Interfaz AlbumManage](#id14).
    - [Interfaz ArtistManage](#id15).
    - [Interfaz GroupManage](#id16).
    - [Interfaz MusicalGenresManage](#id17).
    - [Interfaz Nameable](#id18).
    - [Interfaz PlaylistManage](#id19).
    - [Interfaz SongManage](#id20).
- [BASE DE DATOS](#id21).
- [CONCLUSIÓN](#id22).
- [INTEGRANTES](#id23).

# INTRODUCCIÓN<a name="id1"></a>

En esta práctica se tendrá que crear un modelo de datos de un sistema de información que permita almacenar una biblioteca de música. El sistema de información deberá permitir la gestión de las canciones, los artistas, los álbumes, los grupos, las playlists y los géneros. Además, el sistema deberá permitir que el usuario interactúe con la base de datos para realizar las siguientes operaciones: 

  * Crear nuevas playlists
  * Añadir canciones a una playlist
  * Eliminar canciones de una playlist
  * Guardar y/o eliminar una playlist
  * Realizar búsquedas
  * Mostrar la información de una canción, artistas, etc.

El código fuente de la práctica se organizará en distintos directorios dentro de la carpeta ```/src```, donde se encontrarán las clases que implementan las funcionalidades del sistema. También se creará la documentación, de forma automática, de todos los ejercicios que hayamos realizado haciendo uso de TypeDoc. Podremos consultar la documentación pulsando sobre el siguiente [_enlace_](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/tree/main/docs) que le llevará al fichero o accediendo manualmente al directorio ```/docs```.

Por otro lado, comentar que se seguirá un control continuo haciendo uso de **git** y de algunas **Git Actions**, para que el código se pueda mantener en un estado consistente y que se pueda realizar un seguimiento de los cambios que se hagan en el código. Además, se hará uso de otras herramientas como por ejemplo:

  * Coveralls
  * Istanbul
  * Sonar Cloud
  * LowDB
  * TypeDoc
  * Inquirer

Para acceder a la página web del informe podrá hacer pulsando sobre este [_enlace_](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/).

# CLASES<a name="id2"></a>

## SIMPLES<a name="id3"></a>

### **Clase Album**<a name="id4"></a>
Se define la clase **Album**, definida en el fichero [**_Album.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/Album/Album.ts), para el almacenamiento de información de un disco:

- **Nombre del álbum**: ```string```
- **Autor del álbum**: ```Artist``` o ```Group```
- **Año de creación del álbum**: ```number```
- **Géneros al que pertenece el álbum**: ```MusicalGenres[]```
- **Canciones del álbum**: ```Song[]```

A continuación se muestra el código desarrollado del constructor la clase en cuestión.

```typescript
export class Album implements Manage {
  constructor(private name: string,
              private author: Artist | Group,
              private year: number,
              private genre: MusicalGenres[],
              private songs: Song[]) {}
  // code goes here ...
}
```

En la clase **Album** se ha implementado los métodos necesarios:

* **Obtener y modificar los atributos**
  * *Nombre*
    - _getName_: Retorna el nombre del álbum.

    ```typescript
    getName(): string { return this.name; }
    ```

    - _setName_: Modifica el nombre del álbum.

    ```typescript
    setName(name: string): void { this.name = name; }
    ```

  * *Autor*
    - _getAuthor_: Retorna un objeto de tipo artista (Artist) o grupo (Group). Este método indica que el álbum fue publicado por un artista o grupo.

    ```typescript
    getAuthor(): Artists | Groups { return this.author; }
    ```

    - _setAuthor_: Modifica el tipo de objeto del autor que publica el álbum.

    ```typescript
    setAuthor(artistsGroups: (Artists | Groups)): void { this.author = artistsGroup; }
    ```

  * *Año*
    - _getYear_: Retorna el año de publicación del álbum.

    ```typescript
    getYear(): number { return this.year; }
    ```

    - _setYear_: Modifica el año de publicación.

    ```typescript
    setYear(newYear: number): void { this.year = newYear; }
    ```

  * *Género musicales*
    - _getGenres_: Retorna una lista de los géneros que está relaciona el álbum.

    ```typescript
    getGenres(): MusicalGenres[] { return this.genre; }
    ```

    - _setGenres_: Modifica la lista de géneros del álbum.

    ```typescript
    setGenres(newGenre: MusicalGenres[]): void { this.genre = newGenre; }
    ```

  * *Canciones*
    - _getSongs_: Retorna la lista de canciones que contiene el álbum.

    ```typescript
    getSongs(): Song[] { return this.songs; }
    ```

    - _setSongs_: Modifica la lista actual de canciones por otra nueva.

    ```typescript
    setSongs(newSong: Song[]): void { this.songs = newSong; }
    ```

* **Añadir y eliminar**
  * *Género musicales*
    - _addGenre_: Añade un género pasado por parámetro a la lista de géneros.

    ```typescript
    addGenre(newGenre: MusicalGenres): void { this.genre.push(newGenre); }
    ```

    - _removeGenre_: Elimina un género en específico de la lista de géneros.

    ```typescript
    removeGenre(genre: string): void {
      for (let i = 0; i < this.genre.length; i++) {
        if (this.genre[i].getName() === genre) {
          this.genre.splice(i, 1);
          break;
        }
      }
    }
    ```

  * *Canciones*
    - _addSong_: Añade una canción a la lista de canciones.

    ```typescript
    addSong(newSong: Song): void { this.songs.push(newSong); }
    ```

    - _removeSong_: Elimina una canción del álbum.

    ```typescript
    removeSong(songs: string): void {
      for (let i = 0; i < this.songs.length; i++) {
        if (this.songs[i].getName() === songs) {
          this.songs.splice(i, 1);
          break;
        }
      }
    }
    ```

### **Clase Artist**<a name="id5"></a>

La clase **Artist**, definida en el fichero [_**Artist.ts**_](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/Artist/Artist.ts), se encargará de almacenar toda la información de cada uno de los artistas:

  - **Nombre del artista**: ```string```
  - **Grupos a los que pertenece el artista**: ```Group[]```
  - **Géneros al que pertenece el artista**: ```MusicalGenres[]```
  - **Discos del artista**: ```Album[]```
  - **Canciones del artista**: ```Song[]```
  - **Número de oyentes mensuales del artista**: ```number```

A continuación se muestra el código desarrollado del constructor la clase en cuestión.

``` typescript
export class Artist implements Manage {
  constructor(private name: string,
              private groups: Group[],
              private genres: MusicalGenres[],
              private albums: Album[],
              private songs: Song[],
              private numFollowers: number) {}
  // code goes here ...
}
```

Para poder manejar la información de los artistas, se tendrá que crear un conjunto de métodos que permitan realizar acciones como las siguientes:

  * **Obtener y modificar los atributos**
    * *Nombre*
      - *getName*: devuelve el nombre del género musical.

      ```typescript
        getName(): string { return this.name; }
      ```

      - *setName*: recibe como parámetro un nombre de tipo ```string``` y modifica el nombre del género musical.

      ```typescript
        setName(name: string): void { this.name = name; }
      ``` 

    * *Número de oyentes*
      - *getNumFollowers*: devuelve el número de oyentes que tenga el grupo.
       
        ``` typescript
        getNumFollowers(): number {
          for (const group of this.groups) {
            this.numFollowers += group.getNumFollowers();
          }
          return this.numFollowers;
        }
        ```

      - *setNumFollowers*: asigna al grupo un nuevo número de oyentes.

        ``` typescript
        setNumFollowers(numFollowers: number): void { this.numFollowers = numFollowers; }
        ```

        >> Como se puede observar, el número de oyentes de un artista dependerá de sus propios oyentes además de los oyentes de los grupos a los que pertenece. 

    * *Grupos* 
      - *getGroups*: devuelve los grupos a los que pertenece el artista.

        ``` typescript
        getGroups(): Group[] { return this.groups; }
        ```

      - *setGroups*: asigna los grupos a los que pertenece el artista.
      
        ```typescript
        setGroups(groups: Group[]): void { this.groups = groups; }
        ```

    * *Géneros musicales*
      - *getGenres*: devuelve los géneros musicales del grupo.
        
        ``` typescript
        getGenres(): MusicalGenres[] { return this.genres; }
        ```

      - *setGenres*: asigna los géneros musicales al grupo.

        ``` typescript
        setGenres(genres: MusicalGenres[]): void { this.genres = genres; }
        ```
        
    * *Álbumes*
      - *getAlbums*: devuelve los álbumes del grupo.
          
        ``` typescript
        getAlbums(): Album[] { return this.albums; }
        ```

      - *setAlbums*: asigna álbumes al grupo.

        ``` typescript
        setAlbums(albums: Album[]): void { this.albums = albums; }
        ```

    * *Canciones*
      - *getSongs*: devuelve las canciones del grupo.
          
        ``` typescript
        getSongs(): Song[] { return this.songs; }
        ```

      - *setSongs*: asigna canciones al grupo.

        ``` typescript
        setSongs(songs: Song[]): void { this.songs = songs; }
        ```

  * **Añadir y eliminar** 
    * *Grupos* 
      - *addGroup*: añade un nuevo grupo al que pertenece el artista.
      
        ``` typescript
        addGroup(group: Group): void { this.groups.push(group); }
        ```

      - *removeGroup*: elimina uno de los grupos al que pertenece el artista.

        ```typescript
        removeGroup(group: string): void {
          for (let i = 0; i < this.groups.length; i++) {
            if (this.groups[i].getName() === group) {
              this.groups.splice(i, 1);
              break;
            }
          }
        }
        ```

    * *Géneros musicales*
      - *addGenre*: añade al grupo un nuevo género.
        
        ``` typescript
        addGenre(genre: MusicalGenres): void { this.genres.push(genre); }
        ```

      - *removeGenre*: elimina del grupo un género musical.

        ``` typescript
        removeGenre(genre: string): void {
          for (let i = 0; i < this.genres.length; i++) {
            if (this.genres[i].getName() === genre) {
              this.genres.splice(i, 1);
              break;
            }
          }
        }
        ```
        
    * *Álbumes* 
      - *addAlbum*: añade al grupo un nuevo género.
          
        ``` typescript
        addAlbum(album: Album): void { this.albums.push(album); }
        ```

      - *removeAlbum*: elimina del grupo un nuevo género.

        ```typescript
        removeAlbum(album: string): void {
          for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].getName() === album) {
              this.albums.splice(i, 1);
              break;
            }
          }
        }
        ```

    * *Canciones*
      - *addSong*: añade al grupo una nueva canción.
          
        ``` typescript
        addSong(song: Song): void { this.songs.push(song); }
        ```

      - *removeSong*: elimina del grupo una canción.

        ```typescript
        removeSong(song: string): void {
          for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getName() === song) {
              this.songs.splice(i, 1);
              break;
            }
          }
        }
        ```

### **Clase Group**<a name="id6"></a>

La clase **Group**, definida en el fichero [_**Group.ts**_](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/Group/Group.ts), se encargará de almacenar toda la información de cada uno de los grupos:

  - **Nombre del grupo**: ```string```
  - **Integrantes del grupo**: ```Artist[]```
  - **Año de creación del grupo**: ```number```
  - **Géneros al que pertenece el grupo**: ```MusicalGenres[]```
  - **Discos del grupo**: ```Album[]```
  - **Número de oyentes mensuales del grupo**: ```number```

A continuación se muestra el código desarrollado del constructor la clase en cuestión.

``` typescript
export class Group implements Manage {
  constructor(private name: string,
              private artists: Artist[],
              private creationYear: number,
              private genres: MusicalGenres[],
              private albums: Album[],
              private numFollowers: number) {}
  // code goes here ...
}
```

Al igual que en las clases anteriores, para poder manejar la información de los grupos, se tendrá que crear un conjunto de métodos que permitan realizar ciertas acciones como por ejemplo: 

  * **Obtener y modificar los atributos**
    * *Nombre*
      - *getName*: devuelve el nombre del género musical.

      ```typescript
        getName(): string { return this.name; }
      ```

      - *setName*: recibe como parámetro un nombre de tipo ```string``` y modifica el nombre del género musical.

      ```typescript
        setName(name: string): void { this.name = name; }
      ``` 

    * *Número de oyentes*
      - *getNumFollowers*: devuelve el número de oyentes que tenga el grupo.
       
        ``` typescript
        getNumFollowers(): number { return this.numFollowers; }
        ```

      - *setNumFollowers*: asigna al grupo un nuevo número de oyentes.

        ``` typescript
        setNumFollowers(numFollowers: number): void { this.numFollowers = numFollowers; }
        ```
        
    * *Año de creación* 
      - *getCreationYear*: devuelve el año de creación del grupo.

        ``` typescript
        getCreationYear(): number { return this.creationYear; }
        ```

      - *setCreationYear*: asigna al grupo un nuevo año de creación de este.

        ``` typescript
        setCreationYear(creationYear: number): void { this.creationYear = creationYear; }
        ```

    * *Artistas*
      - *getArtists*: devuelve los artistas que componen el grupo.
      
        ``` typescript
        getArtists(): Artist[] { return this.artists; }
        ```

      - *setArtists*: asigna al grupo nuevos integrantes.

        ``` typescript
        setArtists(artists: Artist[]): void { this.artists = artists; }
        ```

    * *Géneros musicales*
      - *getGenres*: devuelve los géneros musicales del grupo.
        
        ``` typescript
        getGenres(): MusicalGenres[] { return this.genres; }
        ```

      - *setGenres*: asigna los géneros musicales al grupo.

        ``` typescript
        setGenres(genres: MusicalGenres[]): void { this.genres = genres; }
        ```
        
    * *Álbumes*
      - *getAlbums*: devuelve los álbumes del grupo.
          
        ``` typescript
        getAlbums(): Album[] { return this.albums; }
        ```

      - *setAlbums*: asigna álbumes al grupo.

        ``` typescript
        setAlbums(albums: Album[]): void { this.albums = albums; }
        ```

    * *Canciones*
      - *getSongs*: devuelve las canciones del grupo.
          
        ``` typescript
        getSongs(): Song[] { return this.songs; }
        ```

      - *setSongs*: asigna canciones al grupo.

        ``` typescript
        setSongs(songs: Song[]): void { this.songs = songs; }
        ```

  * **Añadir y eliminar** 
    * *Artistas*
      - *addArtist*: añade al grupo nuevos integrantes.
      
        ``` typescript
        addArtist(artist: Artist): void { this.artists.push(artist); }
        ```

      - *removeArtist*: elimina integrantes del grupo.

        ``` typescript
        removeArtist(artist: string): void {
          for (let i = 0; i < this.artists.length; i++) {
            if (this.artists[i].getName() === artist) {
              this.artists.splice(i, 1);
              break;
            }
          }
        }
        ```

    * *Géneros musicales*
      - *addGenre*: añade al grupo un nuevo género.
        
        ``` typescript
        addGenre(genre: MusicalGenres): void { this.genres.push(genre); }
        ```

      - *removeGenre*: elimina del grupo un género musical.

        ``` typescript
        removeGenre(genre: string): void {
          for (let i = 0; i < this.genres.length; i++) {
            if (this.genres[i].getName() === genre) {
              this.genres.splice(i, 1);
              break;
            }
          }
        }
        ```
  
    * *Álbumes* 
      - *addAlbum*: añade al grupo un nuevo género.
          
        ``` typescript
        addAlbum(album: Album): void { this.albums.push(album); }
        ```

      - *removeAlbum*: elimina del grupo un nuevo género.

        ```typescript
        removeAlbum(album: string): void {
          for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].getName() === album) {
              this.albums.splice(i, 1);
              break;
            }
          }
        }
        ```

    * *Canciones*
      - *addSong*: añade al grupo una nueva canción.
          
        ``` typescript
        addSong(song: Song): void { this.songs.push(song); }
        ```

      - *removeSong*: elimina del grupo una canción.

        ```typescript
        removeSong(song: string): void {
          for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getName() === song) {
              this.songs.splice(i, 1);
              break;
            }
          }
        }
  ```

### **Clase MusicalGenres**<a name="id7"></a>

La clase *MusicalGenres*, definida en el fichero [**_MusicalGenres.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/MusicalGenres/MusicalGenres.ts), representa un grupo musical y se encarga de almacenar la siguiente información:

  - **Nombre del género musical**: ```string```  
  - **Artistas que producen música de ese género**: ```Artist[]```
  - **Grupos que producen música de ese género**: ```Group[]```
  - **Álbumes que hay dentro de la biblioteca relacionados con este género**: ```Album[]```
  - **Canciones que hay dentro de la biblioteca de ese género**: ```Song[]```

A continuación se muestra el código desarrollado del constructor la clase en cuestión.

```typescript
export class MusicalGenres implements Manage {
  constructor(private name: string,
              private artists: Artists[],
              private groups: Groups[],
              private albums: Album[],
              private song: Song[]) {}
  
  // code goes here...
}
```
Para poder crear la clase **_MusicalGenres*_**, necesitamos crear una clase que represente a los artistas, grupos y albums (se explicará con más detalles la creación de cada uno de ellos en los apartados posteriores).

Los métodos desarrollados en la clase **_MusicalGenres_** se encargan de realizar las operaciones necesarias para manipular la clase tal y como se propone en el enunciado:

* **Obtener y modificar los atributos**
  * *Nombre*
    - *getName*: devuelve el nombre del género musical.

    ```typescript
      getName(): string { return this.name; }
    ```

    - *setName*: recibe como parámetro un nombre de tipo ```string``` y modifica el nombre del género musical.

    ```typescript
      setName(name: string): void { this.name = name; }
    ```

  * *Artistas*
    - *getArtists*: devuelve los artistas del género musical en cuestión.

    ```typescript
      getArtists(): Artists[] { return this.artists; }
    ```

    - *setArtists*: recibe como parámetro un array de tipo ```Artists``` y modifica los artistas del género musical.

    ```typescript
      setArtists(artists: Artists[]): void { this.artists = artists; }
    ```

  * *Grupos*
    - *getGroups*: devuelve los grupos del género musical.

    ```typescript
      getGroups(): Groups[] { return this.groups; }
    ```

    - *setGroups*: recibe como parámetro un array de tipo ```Artists``` modifica los grupos del género musical.
    
    ```typescript
      setGroups(groups: Groups[]): void { this.groups = groups; }
    ```

  * *Álbumes*
    - *getAlbums*: devuelve los albums del género musical.
    
    ```typescript
      getAlbums(): Album[] { return this.albums; }
    ```

    - *setAlbums*: modifica los albums del género musical.
    
    ```typescript
      setAlbums(albums: Album[]): void { this.albums = albums; }
    ```

  * *Canciones*
    - *getSongs*: devuelve las canciones del género musical.
    
    ```typescript
      getSongs(): Song[] { return this.song; }
    ```

    - *setSongs*: modifica las canciones del género musical recibiendo como parámetro una variable de tipo ```Song```.
    
    ```typescript
      setSongs(song: Song[]): void { this.song = song; }
    ```

* **Añadir y eliminar**
  * *Artistas*
    - *addArtist*: recibe como parámetro una variable de tipo ```Artists``` y añade un artista al género musical.
    
    ```typescript
      addArtist(artist: Artists): void { this.artists.push(artist); }
    ```

    - *removeArtist*: recibe como parámetro una variable de tipo ```string``` que representaría el nombre del artista y lo elimina del género musical.
    
    ```typescript
      removeArtist(artist: string): void {
        for (let i = 0; i < this.artists.length; i++) {
          if (this.artists[i].getName() === artist) {
            this.artists.splice(i, 1);
            break;
          }
        }
      }
    ```

  * *Grupos*
    - *addGroup*: recibe como parámetro una variable de tipo ```Groups``` y añade un grupo al género musical.
    
    ```typescript
      addGroup(group: Groups): void { this.groups.push(group); }
    ```

    - *removeGroup*: recibe como parámetro una variable de tipo ```string``` que representaría el nombre del Grupo y lo elimina del género musical.
    
    ```typescript
      removeGroup(group: string): void {
        for (let i = 0; i < this.groups.length; i++) {
          if (this.groups[i].getName() === group) {
            this.groups.splice(i, 1);
            break;
          }
        }
      }
    ```

  * *Álbumes*
    - *addAlbum*: recibe como parámetro una variable de tipo ```Album``` y añade un album al género musical.
    
    ```typescript
      addAlbum(album: Album): void { this.albums.push(album); }
    ```

    - *removeAlbum*: elimina un album del género musical recibiendo el nombre del album como parámetro.
    
    ```typescript
      removeAlbum(album: string): void {
        for (let i = 0; i < this.albums.length; i++) {
          if (this.albums[i].getName() === album) {
            this.albums.splice(i, 1);
            break;
          }
        }
      }
    ```

  * *Canciones*
    - *addSong*: recibe como parámetro una variable de tipo ```Song``` y añade una canción al género musical.
    
    ```typescript
      addSong(song: Song): void { this.song.push(song); }
    ```

    - *removeSong*: elimina una canción del género musical recibiendo como parámetro una variable de tipo ```string``` que representaría el nombre de la canción.
    
    ```typescript
      removeSong(song: string): void {
        for (let i = 0; i < this.song.length; i++) {
          if (this.song[i].getName() === song) {
            this.song.splice(i, 1);
            break;
          }
        }
      }
    ```

### **Clase Playlist**<a name="id8"></a>

La clase **Playlist**, definida en el fichero [**_Playlist.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/Playlist/Playlist.ts), funcionará como una lista de reproducción de música que contendrá ña siguiente información:

  - **Nombre de la playlist**: ```string```
  - **Canciones de la playlist**: ```Song[]```
  - **Duración de la playlist**: ```string```
  - **Géneros a los que pertenece la playlist**: ```MusicalGenres[]```

A continuación se muestra el código desarrollado del constructor la clase en cuestión.

``` typescript
export class Playlist implements Manage {
  constructor(private name: string,
              private songs: Song[],
              private duration: string,
              private genres: MusicalGenres[]) {}
  // code goes here ...
}
```

Para poder manejar la información de las playlists, se tendrá que crear un conjunto de métodos que permitan realizar acciones como las siguientes:

* **Obtener y modificar los atributos**
  * *Nombre*
    - _getName_: Retorna el nombre de la playlist.

      ```typescript
      getName(): string { return this.name; }
      ```

    - _setName_: Modifica el nombre actual de la lista de reproducción por uno nuevo.

      ```typescript
      setName(newName: string): void { this.name = newName; }
      ```

  * *Canciones*
    -  _getSongs_: Devuelve la lista de canciones almacenadas en la playlist.

      ```typescript
      getSongs(): Song[] { return this.songs; }
      ```

    - _setSongs_: Cambia la lista de canciones por una nueva lista pasada por parámetro.

      ```typescript
      setSongs(newSongs: Song[]): void { this.songs = newSongs; }
      ```

  * *Duración*
    - _getDuration_: Retorna la duración de la playlist.

      ```typescript
      getDuration(): string { return this.duration; }
      ```

    - _setDuration_: Modifica la duración de la lista de reproducción.

      ```typescript
      setDuration(newDuration: string): void { this.duration = newDuration; }
      ```

  * *Géneros musicales*
    - _getGenres_: Devuelve la lista de géneros musicales que pertenece la playlist.

      ```typescript
      getGenres(): MusicalGenres[] { return this.genres; }
      ```

    - _setGenres_: Cambia la lista actual de géneros musicales por uno nuevo.

      ```typescript
      setGenres(newGenres: MusicalGenres[]): void { this.genres = newGenres; }
      ```

* **Añadir y eliminar** 
  * *Géneros musicales*
    - _addGenre_: Añade un género musical a la lista de géneros musicales.

      ```typescript
      addGenre(newGenre: MusicalGenres): void { this.genres.push(newGenre); }
      ```

    - _removeGenre_: Elimina un género musical de la lista de géneros musicales al que pertenece la playlist.

      ```typescript
      removeGenre(genre: string): void {
        for (let i = 0; i < this.genres.length; i++) {
          if (this.genres[i].getName() === genre) {
            this.genres.splice(i, 1);
            break;
          }
        }
      }
      ```

  * *Canciones*
    - _addSong_: Añade una canción a la lista de canciones.

      ```typescript
      addSong(newSong: Song): void { this.songs.push(newSong); }
      ```

    - _removeSong_: Elimina una canción específica de la lista de canciones.

      ```typescript
      removeSongs(songs: string): void {
        for (let i = 0; i < this.songs.length; i++) {
          if (this.songs[i].getName() === songs) {
            this.songs.splice(i, 1);
            break;
          }
        }
      }
      ```

### **Clase Song** <a name="id9"></a>

La clase *Song*, definida en el fichero [**_Song.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/Song/Song.ts), representa a las canciones de la biblioteca y tiene la función de almacenar la siguiente información:

- **Nombre de la canción**: ```string```
- **Autor de la canción**: ```Artist``` o ```Group```
- **Duración en minutos y segundos**: ```string```
- **Género al que pertenece**: ```MusicalGenres[]```
- **Single**: tipo ```boolean``` *(determina si la canción fue lanzada como un single o no)*
- **Número de reproducciones**: ```number```

A continuación se muestra el código desarrollado de la clase en cuestión.

```typescript
export class Song implements Manage {
  constructor(private name: string,
              private author: Artists | Groups,
              private duration: string,
              private genre: MusicalGenres[],
              private single: boolean,
              private numRep: number) {}
  
  // code goes here ...
}
```
Los métodos de la clase **Song** necesarios para manipular la clase son los siguientes:

* **Obtener y modificar los atributos**
  * *Nombre*
    - *getName*: devuelve el nombre de la canción.

    ```typescript
      getName(): string { return this.name; }
    ```

    - *setName*: modifica el nombre de la canción recibiendo como parámetro una variable de tipo ```string```.

    ```typescript
      setName(name: string): void { this.name = name; }
    ```

  * *Author*
    - *getArtist*: devuelve el author de la canción.

    ```typescript
      getAuthor(): Artist | Group { return this.author; }
    ```

    - *setArtist*: modifica el artista de la canción recibiendo como parámetro una variable de tipo ```Artists```.

    ```typescript
      setAuthor(author: Artists): void { this.author = author; }
    ```

  * *Duración*
    - *getDuration*: devuelve la duración de la canción.

    ```typescript
      getDuration(): string { return this.duration; }
    ```

    - *setDuration*: modifica la duración de la canción recibiendo como parámetro una variable de tipo ```string```.

    ```typescript
      setDuration(duration: string): void { this.duration = duration; }
    ```

  * *Género*
    - *getGenres*: devuelve el género de la canción.

    ```typescript
      getGenres(): MusicalGenres[] { return this.genre; }
    ```
    - *setGenres*: modifica el género de la canción recibiendo como parámetro una variable de tipo ```MusicalGenres[]```.

    ```typescript
      setGenres(genre: MusicalGenres[]): void { this.genre = genre; }
    ```

  * *Single*
    - *isSingle*: devuelve si la canción es un single o no.

    ```typescript
      isSingle(): boolean { return this.single; }
    ```

    - *setSingle*: modifica si la canción es un single o no recibiendo como parámetro una variable de tipo ```boolean```.

    ```typescript
      setSingle(single: boolean): void { this.single = single; }
    ```

  * *Reproducción*
    - *getNumRep*: devuelve el número de veces que la canción ha sido reproducida.

    ```typescript
      getNumRep(): number { return this.numRep; }
    ```

    - *setNumRep*: modifica el número de veces que la canción ha sido reproducida recibiendo como parámetro una variable de tipo ```number```.

    ```typescript
      setNumRep(numRep: number): void { this.numRep = numRep; }
    ```

* **Añadir y eliminar**
  * *Género*
    - *addGenre*: añade un género a la canción recibiendo como parámetro una variable de tipo ```MusicalGenres```.

    ```typescript
      addGenre(genre: MusicalGenres): void { this.genre.push(genre); }
    ```

    - *removeGenre*: elimina un género de la canción recibiendo como parámetro una variable de tipo ```string```.

    ```typescript
      removeGenre(genre: string): void {
        for (let i = 0; i < this.genre.length; i++) {
          if (this.genre[i].getName() === genre) {
            this.genre.splice(i, 1);
            break;
          }
        }
      }
    ```
    
## **Interfaz de usuario** <a name="id10"></a>

### **Clase Manager**<a name="id11"></a>
La clase *Manager*, definida en el fichero [**_Manager.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/Manager/Manager.ts), representa el administrador de la aplicación y se encarga de almacenar la siguiente información:

  - **DataBase**: ```DB```
  - **inquirer**: ```inquirer```
  - **Username**: ```string```
  - **Playlist**: ```{name: string, songs: Song[], duration: string, genre: string[], creator: string}[]```

A continuación se muestra el código desarrollado del constructor la clase en cuestión.

  ```typescript
    export class Manager {
      private DB: DB;
      private inquirer: inquirer;
      private username: string;
      private playlist: {name: string, songs: Song[], duration: string, genre: string[], creator: string}[];

      constructor() {
        this.db = DB.getInstance();
        this.inquirer = Inquirer;
        this.username = '';
        this.playlists = [];
      }

      // code goes here ...*
    }
  ```

Para poder crear la clase *_Manager_* se ha creado una clase *_DB_* que se encarga de manejar la base de datos.

Los métodos desarrollados en la clase *_Manager_* se encargan de realizar las operaciones necesarias para manipular la clase tal y como se propone en el enunciado:

- **start**: inicia la aplicación, solicita el nombre de usuario y sigue al menú principal.
- 
```typescript
  public async start(): Promise<void> {
      process.stdout.write('\x1Bc');
      const menu = await this.inquirer.prompt([
        {
          type: 'Input',
          name: 'username',
          message: 'What is your username?'
        }
      ]);
      console.log(`Welcome ${menu.username}`);
      this.username = menu.username;
      this.showMenu();
    }
```

* **Mostrar**
  
  * **Mostrar Menú**
    - **showMenu**: muestra el menú principal con las opciones de gestor.

    ```typescript
      public async showMenu(): Promise<void> {
        process.stdout.write('\x1Bc');
        const menu = await this.inquirer.prompt([
          {
            type: 'list',
            name: 'menu',
            message: 'What do you want to do?',
            choices: [
              'Preview all the playlists in the database',
              'Add a new playlist',
              'Remove a playlist',
              'Save a playlist',
              'Sign out',
              'Exit'
            ]
          }
        ]);

        switch (menu.menu) {
          case 'Preview all the playlists in the database':
            this.showPlaylists();
            break;
          case 'Add a new playlist':
            this.addPlaylist();
            break;
          case 'Remove a playlist':
            this.removePlaylist();
            break;
          case 'Save a playlist':
            this.savePlaylist();
            break;
          case 'Sign out':
            this.start();
            break;
          case 'Exit':
            break;
        }
      }
    ```
  * **Mostrar Playlists**

    - **showPlaylists**: muestra todas las playlists almacenadas en la base de datos y en la memoria de la ejecución.

    ```typescript
      public async showPlaylists(): Promise<void> {
        process.stdout.write('\x1Bc');
        const playlists = await this.db.getPlaylists();
        console.log(`Playlists in the database:`);
        playlists.forEach((playlist: {name: string, songs: string[], duration: string, genres: string[]}) => {
          console.log('\x1b[032m' + `${playlist.name}` + '\x1b[0m');
          playlist.songs.forEach((song: string) => {
            console.log(`\t${song}`);
          }
          );
          console.log('\x1b[032m' + '\tDuration:' + '\x1b[0m' + `${playlist.duration}`);
          console.log('\x1b[032m' + '\tGenres:' + '\x1b[0m' + `${playlist.genres}\n`);
        });
        console.log('\x1b[032m' + '\nPlaylists not saved yet:' + '\x1b[0m');
        this.playlists.forEach((playlist: {name: string, songs: string[], duration: string, genres: string[]}) => {
          console.log('\x1b[032m' + `${playlist.name}` + '\x1b[0m');
          playlist.songs.forEach((song: string) => {
            console.log(`\t${song}`);
          }
          );
          console.log('\x1b[032m' + '\tDuration:' + '\x1b[0m' + `${playlist.duration}`);
          console.log('\x1b[032m' + '\tGenres:' + '\x1b[0m' + `${playlist.genres}\n`);
        });
        await this.inquirer.prompt([
          {
            type: 'input',
            name: 'continue',
            message: 'Press enter to continue'
          }
        ]);
        this.showMenu();
      }
    
    ```

* **Añadir, eliminar y guardar playlist**

  * **Añadir Playlist**

    - **addPlaylist**: añade una nueva playlist a la memoria de la ejecución.

    ```typescript
      public async addPlaylist(): Promise<void> {
        process.stdout.write('\x1Bc');
        const name = await this.inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What is the name of the playlist?'
          }
        ]);
        const allSongs = this.db.getSongs();
        const songsNames = allSongs.map((song: {name: string, duration: string, genres: string[]}) => {
          return song.name;
        });
        const songs = await this.inquirer.prompt([
          {
            type: 'checkbox',
            name: 'songs',
            message: 'What songs do you want to add?',
            choices: songsNames
          }
        ]);

        const songsDuration = allSongs.filter((song: {name: string, duration: string, genres: string[]}) => {
          return songs.songs.includes(song.name);
        });
        const durationStrings = songsDuration.map((song: {name: string, duration: string, genres: string[]}) => {
          return song.duration;
        });
        let seconds = durationStrings.reduce((acc: number, curr: string) => {
          const [min, sec] = curr.split(':');
          return acc + parseInt(min, 10) * 60 + parseInt(sec, 10);
        }, 0);
        let minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        const hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
        const duration = `${hours}:${minutes}:${seconds}`;

        let genres = allSongs.filter((song: {name: string, duration: string, genres: string[]}) => {
          return songs.songs.includes(song.name);
        }).reduce((acc: string[], song: {name: string, duration: string, genres: string[]}) => {
          return acc.concat(song.genres);
        }, []);
        genres = genres.filter((genre: string, index: number, self: string[]) => {
          return self.indexOf(genre) === index;
        });

        console.log(`\x1b[032m\n'${name.name}'\x1b[0m`);
        songs.songs.forEach((song: string) => {
          console.log(`\t${song}`);
        });
        console.log('\x1b[032m' + '\tDuration:' + '\x1b[0m' + `${duration}`);
        console.log('\x1b[032m' + '\tGenres:' + '\x1b[0m' + `${genres}\n`);
        console.log('\x1b[032m' + '\tCreator:' + '\x1b[0m' + `${this.username}\n`);

        const JSON = {
          name: name.name,
          songs: songs.songs,
          duration: duration,
          genres: genres,
          creator: this.username
        };
        this.playlists.push(JSON);

        await this.inquirer.prompt([
          {
            type: 'input',
            name: 'continue',
            message: 'Press enter to continue'
          }
        ]);
        this.showMenu();
      }
    ```

  * **Guardar Playlist en la base de datos**

    - **savePlaylist**: guarda una playlist que estuviera en la memoria en la base de datos.

    ```typescript
      private async savePlaylist(): Promise<void> {
        process.stdout.write('\x1Bc');
        const availablePlaylists = this.playlists.filter((playlist: {name: string, songs: string[], duration: string, genres: string[], creator: string}) => {
          return playlist.creator === this.username;
        });

        const choices = await this.inquirer.prompt([
          {
            type: 'checkbox',
            name: 'playlists',
            message: 'Which playlists do you want to save?',
            choices: availablePlaylists.map((playlist: {name: string, songs: string[], duration: string, genres: string[], creator: string}) => {
              return playlist.name;
            })
          }
        ]);

        const playlists = availablePlaylists.filter((playlist: {name: string, songs: string[], duration: string, genres: string[], creator: string}) => {
          return choices.playlists.includes(playlist.name);
        });

        const JSON = playlists.map((playlist: {name: string, songs: string[], duration: string, genres: string[], creator: string}) => {
          return {
            name: playlist.name,
            songs: playlist.songs,
            duration: playlist.duration,
            genres: playlist.genres,
            creator: playlist.creator
          };
        });

        for (const playlist of JSON) {
          await this.db.addPlaylist(playlist);
        }

        for (const playlist of this.playlists) {
          if (playlist.creator === this.username) {
            this.playlists.splice(this.playlists.indexOf(playlist), 1);
          }
        }

        await this.inquirer.prompt([
          {
            type: 'input',
            name: 'continue',
            message: 'Press enter to continue'
          }
        ]);
        this.showMenu();
      }
    ```
  
  * **Remover una playlist**

    - **removePlaylist**: elimina una playlist, tanto de la memoria como de la base de datos, solo si el creador es el usuario que desea eliminarla.

    ```typescript
      private async removePlaylist(): Promise<void> {
        const availablePlaylists = this.playlists.filter((playlist: {name: string, songs: string[], duration: string, genres: string[], creator: string}) => {
          return playlist.creator === this.username;
        });
        const dbPlaylists = await this.db.getPlaylists();
        for (const playlist of dbPlaylists) {
          if (playlist.creator === this.username) {
            availablePlaylists.push(playlist);
          }
        }

        const choices = await this.inquirer.prompt([
          {
            type: 'checkbox',
            name: 'playlists',
            message: 'Which playlists do you want to remove?',
            choices: availablePlaylists.map((playlist: {name: string, songs: string[], duration: string, genres: string[], creator: string}) => {
              return playlist.name;
            })
          }
        ]);

        const playlists = availablePlaylists.filter((playlist: {name: string, songs: string[], duration: string, genres: string[], creator: string}) => {
          return choices.playlists.includes(playlist.name);
        });

        for (const playlist of playlists) {
          if (this.playlists.indexOf(playlist) === -1) {
            await this.db.removePlaylist(playlist.name);
          } else {
            this.playlists.splice(this.playlists.indexOf(playlist), 1);
          }
        }

        await this.inquirer.prompt([
          {
            type: 'input',
            name: 'continue',
            message: 'Press enter to continue'
          }
        ]);
        this.showMenu();
      }
    ```


### **Clase UI**<a name="id12"></a>
La clase UI (Interfaz de Usuario), definida en el fichero [**_UI.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/UI/UI.ts), se encargará del control del usuario con las opciones de manejo con la playlist. La información almacenada en la clase serán:
- **Base de datos**: `DB`
- **Lectura por consola**: `Inquirer.Inquirer`

A continuación se muestra el código desarrollado del constructor la clase mencionada.

```typescript
export class UI {
  constructor() {
    this.db = DB.getInstance();
    this.inquirer = Inquirer;
  }
  // code goes here ...
}
```

Los métodos de la clase **UI** necesarios para el manejo del usuario:

* showMenu: Muestra las opciones explicadas más adelante, y se recoge la opción del usuario por entrada. Dependiendo de la elección, se ejecutará el método correspondiente.
 
```typescript
  public async showMenu(): Promise<void> {
    process.stdout.write('\x1Bc');
    const menu = await this.inquirer.prompt([
      {
        type: 'list',
        name: 'menu',
        message: 'What do you want to do?',
        choices: [
          'Show songs alphabetically',
          'Show albums alphabetically',
          'Show playlists alphabetically',
          'Show albums by year',
          'Show songs by number of plays',
          'Show only singles',
          'Exit'
        ]
      }
    ]);

    switch (menu.menu) {
      case 'Show songs alphabetically':
        this.showSongsAlphabetically();
        break;
      case 'Show albums alphabetically':
        this.showAlbumsAlphabetically();
        break;
      case 'Show playlists alphabetically':
        this.showPlaylistsAlphabetically();
        break;
      case 'Show albums by year':
        this.showAlbumsByYear();
        break;
      case 'Show songs by number of plays':
        this.showSongsByNumberOfPlays();
        break;
      case 'Show only singles':
        this.showSingles();
        break;
      case 'Exit':
        break;
    }
  }
  ```

* Orden alfabético
  * showSongsAlphabetically: Muestra las canciones en orden ascendente o descendente, dependiendo de la elección del usuario.
  
  ```typescript
  private async showSongsAlphabetically(): Promise<void> {
      const ascendent = await this.inquirer.prompt([
        {
          type: 'list',
          name: 'ascendent',
          message: 'Do you want to show songs in ascendent order?',
          choices: ['Yes', 'No']
        }
      ]);

      const songs = this.db.getSongs();
      if (ascendent.ascendent === 'Yes') {
        songs.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        songs.sort((a, b) => b.name.localeCompare(a.name));
      }

      console.log();
      songs.map((song: any) => console.log('\x1b[032m' + song.name + '\x1b[0m'));
      console.log();

      await this.inquirer.prompt([
        {
          type: 'input',
          name: 'enter',
          message: 'Press enter to continue'
        }
      ]);

      this.showMenu();
    }

  ```

  * showAlbumsAlphabetically: Muestra los albums en orden ascendente o descendente según sea la elección del usuario.
  
  ```typescript
    private async showAlbumsAlphabetically(): Promise<void> {
      const ascendent = await this.inquirer.prompt([
        {
          type: 'list',
          name: 'ascendent',
          message: 'Do you want to show albums in ascendent order?',
          choices: ['Yes', 'No']
        }
      ]);

      const albums = this.db.getAlbums();
      if (ascendent.ascendent === 'Yes') {
        albums.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        albums.sort((a, b) => b.name.localeCompare(a.name));
      }

      console.log();
      albums.map((album: any) => console.log('\x1b[032m' + album.name + '\x1b[0m'));
      console.log();

      await this.inquirer.prompt([
        {
          type: 'input',
          name: 'enter',
          message: 'Press enter to continue'
        }
      ]);

      this.showMenu();
    }
  ```
  * showPlaylistsAlphabetically: Muestra las playlists en orden ascendente y descendente.
  
  ```typescript
    private async showPlaylistsAlphabetically(): Promise<void> {
      const ascendent = await this.inquirer.prompt([
        {
          type: 'list',
          name: 'ascendent',
          message: 'Do you want to show playlists in ascendent order?',
          choices: ['Yes', 'No']
        }
      ]);

      const playlists = this.db.getPlaylists();
      if (ascendent.ascendent === 'Yes') {
        playlists.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        playlists.sort((a, b) => b.name.localeCompare(a.name));
      }

      console.log();
      playlists.map((playlist: any) => console.log('\x1b[032m' + playlist.name + '\x1b[0m'));
      console.log();

      await this.inquirer.prompt([
        {
          type: 'input',
          name: 'enter',
          message: 'Press enter to continue'
        }
      ]);

      this.showMenu();
    }
  
  ```

* Orden por año de lanzamiento
  * showAlbumsByYear: Muestra los álbumes por año de lanzamiento.
  
  ```typescript
  private async showAlbumsByYear(): Promise<void> {
      const albums = this.db.getAlbums();
      albums.sort((a, b) => a.year - b.year);
      console.log();
      albums.map((album: any) => console.log('\x1b[32m' + album.name + '\x1b[36m' + ('.'.repeat(80 - album.name.length - album.year.toString().length)) + '\x1b[32m' + album.year + '\x1b[0m'));
      console.log();

      await this.inquirer.prompt([
        {
          type: 'input',
          name: 'enter',
          message: 'Press enter to continue'
        }
      ]);

      this.showMenu();
    }
  
  ```

* Orden por el número de reproducciones
  * showSongsByNumberOfPlays: Muestra las canciones por número de reproducciones.
  
  ```typescript
  private async showSongsByNumberOfPlays(): Promise<void> {
      const songs = this.db.getSongs();
      songs.sort((a, b) => b.numRep - a.numRep);

      console.log();
      songs.map((song: any) => console.log('\x1b[32m' + song.name + '\x1b[36m' + ('.'.repeat(80 - song.name.length - song.numRep.toString().length)) + '\x1b[32m' + song.numRep + '\x1b[0m'));
      console.log();

      await this.inquirer.prompt([
        {
          type: 'input',
          name: 'enter',
          message: 'Press enter to continue'
        }
      ]);

      this.showMenu();
    }

  ```

* Orden por singles lanzados
  
  * showSingles: Muestra los singles lanzados.
  
  ```typescript
  private async showSingles(): Promise<void> {
      const singles = this.db.getSongs().filter((song: any) => song.isSingle);

      console.log();
      singles.forEach((song: any) => console.log('\x1b[32m' + song.name + '\x1b[0m'));
      console.log();

      await this.inquirer.prompt([
        {
          type: 'input',
          name: 'enter',
          message: 'Press enter to continue'
        }
      ]);

      this.showMenu();
    }
  ```

# INTERFACES<a name="id13"></a>

A la hora de realizar la definición de las clases, tal y como se ha podido observar el los puntos explicados anteriormente,  se ha implementado la interfaz **Manage** que contiene los métodos necesarios para manipular la clase. Es importante comentar que cada una de las clases tendrá su interfaz **Manage** correspondiente ubicada en la misma carpeta que la clase. 

```typescript
  export interface Manage extends ... {}
```

Además, cada una de estas interfaces extenderán de otras interfaces según el caso de cada clase y que se ubicarán en la misma carpeta que la clase correspondiente. 

## **Interfaz AlbumManage**<a name="id14"></a>

[**_AlbumManage.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/Album/AlbumManage.ts)

```typescript
  export interface AlbumManage {
    getAlbums(): Album[];
    setAlbums(albums: Album[]): void;
    addAlbum(album: Album): void;
    removeAlbum(album: string): void;
  }
```

## **Interfaz ArtistManage**<a name="id15"></a>

[**_ArtistManage.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/Artist/ArtistManage.ts)

```typescript
  export interface ArtistManage {
    getArtists(): Artist[];
    setArtists(Artists: Artist[]): void;
    addArtist(Artist: Artist): void;
    removeArtist(Artist: string): void;
  }
```

## **Interfaz GroupManage**<a name="id16"></a>

[**_GroupManage.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/Group/GroupManage.ts)

```typescript
  export interface GroupManage {
    getGroups(): Group[];
    setGroups(Groups: Group[]): void;
    addGroup(Group: Group): void;
    removeGroup(Group: string): void;
  }
```

## **Interfaz MusicalGenresManage**<a name="id17"></a>

[**_MusicalGenresManage.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/MusicalGenres/MusicalGenresManage.ts)

```typescript
  export interface MusicalGenresManage {
    getGenres(): MusicalGenres[];
    setGenres(MusicalGenress: MusicalGenres[]): void;
    addGenre(MusicalGenres: MusicalGenres): void;
    removeGenre(MusicalGenres: string): void;
  }
```

## **Interfaz Nameable**<a name="id18"></a>

[**_Nameable.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/Nameable/Nameable.ts)

```typescript
  export interface Nameable {
    getName(): string;
    setName(name: string): void;
  }
```

## **Interfaz Playlist**<a name="id19"></a>

[**_PlaylistManage.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/Playlist/PlaylistManage.ts)

```typescript
export interface PlaylistManage {
  getPlaylists(): Playlist[];
  setPlaylists(Playlists: Playlist[]): void;
  addPlaylist(Playlist: Playlist): void;
  removePlaylist(Playlist: string): void;
}
```

## **Interfaz SongManage**<a name="id20"></a>

[**_SongManage.ts_**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/Song/SongManage.ts)

```typescript
export interface SongManage {
  getSongs(): Song[];
  setSongs(Songs: Song[]): void;
  addSong(Song: Song): void;
  removeSong(Song: string): void;
}
```

# BASE DE DATOS<a name="id21"></a>
Para la persistencia de los datos se ha implementado una base de datos mediante la herramienta **LowDB**.

**LowDB** nos permite crear bases de datos sencillas capaces de almacenarse en un fichero typo JSON, fácil de manipular.

Lo primero que se ha realizado es establecer ciertas canciones, artistas, grupos etc. sobre los que poder trabajar (src/models/db.json).

Una vez hecho esto, se define la clase **DB**, definida en el fichero [**_DB.ts**](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_g/blob/main/src/DB/DB.ts). Esta clase sigue la estrategia singleton, por lo que constructor y getInstance se definen de la siguiente manera:

```typescript
export class DB {
  private static instance: DB;
  private constructor() {
    db.defaults({
      artists: [],
      groups: [],
      genres: [],
      albums: [],
      songs: [],
      playlists: []
    }).write();
  }

  public static getInstance(): DB {
    if (!DB.instance) {
      DB.instance = new DB();
    }
    return DB.instance;
  }

  // code goes here ...
}
```

Los métodos de la clase **DB** son los siguientes:

* **Obtener elementos de la database**
  * *Base de datos*
    - _getDB_: Retorna la base de datos.

    ```typescript
    public getDB(): any {
      return db;
    }
    ```
  * *Artistas*
    - _getArtists_: Retorna un array con todos los artistas.

    ```typescript
    public getArtists(): [{name: string, groups: string[], genres: string[], albums: string[], songs: string[], numFollowers: number}] {
      return db.get('artists').value();
    }
    ```
  * *Grupos*
    - _getGroups_: Retorna un array con todos los grupos.

    ```typescript
    public getGroups(): [{name: string, artists: string[], creationYear: number, genres: string[], albums: string[], numFollowers: number}] {
      return db.get('groups').value();
    }
    ```
  * *Géneros musicales*
    - _getGenres_: Retorna un array con todos los géneros musicales.

    ```typescript
    public getGenres(): [{name: string, artists: string[], groups: string[], albums: string[], songs: string[]}] {
      return db.get('genres').value();
    }
    ```
  * *Álbumes*
    - _getAlbums_: Retorna un array con todos los álbumes.

    ```typescript
    public getAlbums(): [{name: string, author: string, year: number, genres: string[], songs: string[]}] {
        return db.get('albums').value();
    }
    ```
  * *Canciones*
    - _getSongs_: Retorna un array con todas las canciones.

    ```typescript
    public getSongs(): [{name: string, author: string, duration: string, genres: string[], isSingle: boolean, numRep: number}] {
      return db.get('songs').value();
    }
    ```
  * *Playlists*
    - _getPlaylists_: Retorna un array con todas las playlists.

    ```typescript
    public getPlaylists(): [{name: string, songs: string[], duration: string, genres: string[], creator: string}] {
      return db.get('playlists').value();
    }
    ```
* **Añadir elementos a la database**
  * *addArtist*
    - _addArtist_: Añade un artista a la base de datos.

    ```typescript
    public addArtist(artist: Artist): void {
      const JSON = {
        name: artist.getName(),
        groups: artist.getGroups().map((group: Group) => group.getName()),
        genres: artist.getGenres().map((genre: MusicalGenres) => genre.getName()),
        albums: artist.getAlbums().map((album: Album) => album.getName()),
        songs: artist.getSongs().map((song: Song) => song.getName()),
        numFollowers: artist.getNumFollowers()
      };
      db.get('artists').push(JSON).write();
    }
    ```
  * *addGroup*
    - _addGroup_: Añade un grupo a la base de datos.

    ```typescript
    public addGroup(group: Group): void {
      const JSON = {
        name: group.getName(),
        artists: group.getArtists().map((artist: Artist) => artist.getName()),
        creationYear: group.getCreationYear(),
        genres: group.getGenres().map((genre: MusicalGenres) => genre.getName()),
        albums: group.getAlbums().map((album: Album) => album.getName()),
        numFollowers: group.getNumFollowers()
      };
      db.get('groups').push(JSON).write();
    }
    ```
  * *addGenre*
    - _addGenre_: Añade un género musical a la base de datos.

    ```typescript
    public addGenre(genre: MusicalGenres): void {
      const JSON = {
        name: genre.getName(),
        artists: genre.getArtists().map((artist: Artist) => artist.getName()),
        groups: genre.getGroups().map((group: Group) => group.getName()),
        albums: genre.getAlbums().map((album: Album) => album.getName()),
        songs: genre.getSongs().map((song: Song) => song.getName())
      };
      db.get('genres').push(JSON).write();
    }
    ```
  * *addAlbum*
    - _addAlbum_: Añade un álbum a la base de datos.

    ```typescript
    public addAlbum(album: Album): void {
      const JSON = {
        name: album.getName(),
        author: album.getAuthor().getName(),
        year: album.getYear(),
        genres: album.getGenres().map((genre: MusicalGenres) => genre.getName()),
        songs: album.getSongs().map((song: Song) => song.getName())
      };
      db.get('albums').push(JSON).write();
    }
    ```
  * *addSong*
    - _addSong_: Añade una canción a la base de datos.

    ```typescript
    public addSong(song: Song): void {
      const JSON = {
        name: song.getName(),
        author: song.getAuthor().getName(),
        duration: song.getDuration(),
        genres: song.getGenres().map((genre: MusicalGenres) => genre.getName()),
        isSingle: song.isSingle(),
        numRep: song.getNumRep(),
      };
      db.get('songs').push(JSON).write();
    }
    ```
  * *addPlaylist*
    - _addPlaylist_: Añade una playlist a la base de datos.

    ```typescript
    public addPlaylist(playlist: Playlist | any): void {
      if (playlist instanceof Playlist) {
        const JSON = {
          name: playlist.getName(),
          songs: playlist.getSongs().map((song: Song) => song.getName()),
          duration: playlist.getDuration(),
          genres: playlist.getGenres().map((genre: MusicalGenres) => genre.getName())
        };
        db.get('playlists').push(JSON).write();
      } else {
        const JSON = {
          name: playlist.name,
          songs: playlist.songs,
          duration: playlist.duration,
          genres: playlist.genres,
          creator: playlist.creator
        };
        db.get('playlists').push(JSON).write();
      }
    }
    ```
* **Eliminar elementos de la database**
  * *removePlaylist*
    - _removePlaylist_: Elimina una playlist de la base de datos.

    ```typescript
    public removePlaylist(playlist: Playlist): void {
      db.get('playlists').remove({name: playlist.getName()}).write();
    }
    ```

# CONCLUSIÓN<a name="id22"></a>

En conclusión, se puede comentar que en este primer proyecto grupal hemos podido emplear todas las técnicas y herramientas que se han ido aprendiendo a lo largo del curso en esta asignatura, algunas que se podrían destacar son:

- Uso de interfaces.
- Uso de clases.
- Uso de guardianes de tipo.
- Testing.
- Cubrimiento del código.
- GitHub Actions.

Además de haber trabajado con lo que ya habíamos aprendido, también hemos podido trabajar usando una base de datos que se emplea en nuestro programa y emplear recursos para que un usuario pueda iteractuar con el programa. 

Por otro lado, también se ha hecho uso de la herramienta SonarCloud para poder analizar constantemente la calidad de nuestro código a medida que vamos trabajando en él.

## INTEGRANTES<a name="id23"></a>

- **Gabriel Alberto Luis Freitas:** alu0101348421
- **Dana Belen Choque Zárate:** alu0101328348
- **Daniele Vitale:** alu0101329017
- **Roxana Mihaela Baba:** alu0101339887