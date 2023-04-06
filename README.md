# NodeJS - Tablas de Multiplicar
Este es un pequeño programa en Node, que permite crear un archivo de texto con la tabla de multiplicar solicitada por consola.

*Ejemplos de uso*
- Crear la tabla del 5, use el comando `node app -b 5`
- Crear la tabla del 2 multiplicandolo hasta el 20, use el comando `node app -b 2 -h 20`

```
Opciones:
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -b, --base     Es la base de la tabla de multiplicar                [número] [requerido]
  -h, --hasta    Limite hasta el que se multiplicara la base          [número] [defecto: 10]
  -l, --listar   Muestra la tabla de multiplicar en consola           [booleano] [defecto: false]
```