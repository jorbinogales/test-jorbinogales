# TEST DESARROLLADOR WEB JUNIOR

## • ¿Cómo escribes un mensaje para que se muestre en un ALERT del navegador?

```
alert(' Hola mundo');
```

## • ¿Cómo escribes la condición “Si variable no es igual a 1” en JavaScript y luego en PHP?

### JAVASCRIPT:

```
let variable = 2;
if(variable != 1){
    console.log('No es igual');
}
```

### PHP:

```
<?php
$variable = 2;
if($variable != 1){
   echo 'No es igual <hr>';
}
?>
```

## • ¿Cómo escribes 7 veces “Hola” en JavaScript y luego en PHP?

### JAVASCRIPT:

```
let variable = 2;
for (i = 0; i < 7; i++){
    console.log('hola')
}
```

### PHP:

```
<?php
for ($i = 0; $i < 7; $i++){
    echo 'hola <hr>';
}

?>
```

## • ¿Cómo escribes un mensaje para que se muestre en el log del navegador?

```
console.log('Mensaje en el log del navegador');

```

## • ¿A qué lenguaje pertenece la instrucción “display”:”flex-inline”;?

Pertenece a CSS

## • ¿Cómo se declara la variable USER en JavaScript y luego en PHP?

### JAVASCRIPT:

```
var userVar = '';
let userLet = '';
const userConst = '';
```

### PHP:

```
<?php

$userVar = '';

?>
```

## • Crea una función que reciba como parámetro un número y retorne el triple de ese número en JavaScript y luego en PHP.

### JAVASCRIPT:

```
const retornarNumero = (number) => {
    return number * 3;
}

console.log(retornarNumero(5));
```

### PHP:

```
<?php

class retornar{

    public function retornarNumero($num) {
        return $num*3;
    }

}

$retornar = new retornar();

echo $retornar->retornarNumero(5);
?>
```
