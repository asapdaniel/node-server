¿Qué sucedio al usar async y await?
R/Al usar async y await, se puede hacer que el código sea más legible y parecido a una ejecución síncrona. Se puede esperar a que las promesas se resuelvan directamente en el código sin necesidad de utilizar el método then().
¿Qué sucede al usar el metodo then()?
R/Al usar el método then(), se puede encadenar una función de callback a una promesa para manejar su resolución. Esto permite ejecutar código después de que la promesa se haya resuelto o rechazado.
¿Qué diferencias encontraste entre async, await y el metodo then()?
R/

- async y await permiten escribir código asincrónico de manera más sincrónica, lo que facilita la lectura y el manejo de errores.
- El método then() es útil para encadenar múltiples operaciones asíncronas y manejar sus resultados por separado.
- async y await hacen que el código parezca más lineal y secuencial, mientras que el método then() puede resultar en un código más anidado y en cascada.
