# Platzom

Platzom es un idioma inventado para el [curso de fundamentos de Javascript](https://platzi.com/clases/fundamentos-javascript) de [Platzi](https://platzi.com/clases/fundamentos-javascript).

## Descripción del idioma

 Crearemos un nuevo lenguaje llamado Platzom.
  	- Regla 1
  	Si la palabra termina en "ar", se le quitan esos dos caracteres
  	- Regla 2
 		Si la palabra inicia con "z", se le añade "pe" al final
  	- Regla 3
 		Si la palabra traducida tiene 10 o más letras, se parte a la mitad
 		y se pone un caracter "-"
  	- Regla 4
 		Si la palabra anterior es un palíndromo,
 		ninguna regla anterior cuenta y se devuelve la misma palabra,
 		intercalando mayúsculas y minúsculas

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom("Programar")
```

## Créditos
-[John Arley](https://twitter.com/johnarleycano)

## Licencia

[MIT](https://opensource.org/licenses/MIT)