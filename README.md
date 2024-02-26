Enunciado
Este ejercicio práctico consistirá en realizar la parte correspondiente al lado del cliente de un
sistema de compra online. El usuario utilizará esta aplicación para gestionar el proceso de compra
mediante una interfaz web. A continuación, se describe el comportamiento esperado.
Al cargar la página el usuario verá dos partes diferenciadas: Una a la izquierda y otra a la
derecha de la pantalla. La parte izquierda corresponde a los productos disponibles en la tienda,
mientras que en la derecha aparecerá la cesta de la compra, que inicialmente estará vacía.
Los productos estarán clasificados en categorías. Cada categoría debe contener productos
relacionados. El nombre de la categoría aparecerá en la parte superior de la lista de productos de la
misma. Haciendo click en el nombre de la categoría se deben ocultar o mostrar todos los productos
contenidos (preferiblemente mediante una transición suave).
Cada producto de una categoría estará formado por:
• Una imagen del producto.
• Un código de producto.
• Una descripción.
• El precio.
• El número de unidades en stock.
El administrador de la página debe poder añadir categorías y productos dentro de dichas
categorías de forma dinámica.
Cuando los productos de una categoría estén desplegados (visibles), se debe mostrar una
miniatura de la imagen. Obviamente todas las miniaturas deben mostrarse con el mismo tamaño. Si
el usuario pasa el puntero del ratón por encima de la imagen, ésta debe ampliarse, con una
transición suave, de forma que el usuario pueda verla de forma más detallada. Al retirar el puntero
del ratón la imagen volverá a su tamaño reducido. Los demás datos del producto deben mostrarse
cerca de la imagen.
Para añadir un producto a la cesta el usuario hará click sobre el texto “Agregar a la cesta”,
que se mostrará al lado de cada producto, con lo que la imagen, la descripción y el código del
producto aparecerán en la parte correspondiente a la cesta. También se mostrará el número de
unidades agregadas, que se incrementarán si el usuario hace click más veces sobre el producto, y el
importe correspondiente. En caso de que se añada todo el stock, se mostrará la imagen del producto
con un valor distinto de transparencia para que visualmente de aprecie que no queda stock, además
de que no se permitirá seguir agregándolo a la cesta.
El usuario podrá hacer click sobre “Eliminar de la cesta” para cada producto añadido a la
misma. En caso de que hubiera varias unidades, con cada click se eliminará una de ellas.
En la cesta se mostrará el precio total, además del relativo a cada producto (considerando
que el usuario puede haber incluido varias unidades).
Finalmente, para realizar la compra el usuario pulsará sobre el botón “Realizar Pedido”, con lo
que se mostrará un texto de confirmación.
El alumno debe implementar un sistema que se comporte de la forma anteriormente descrita,
quedando a su criterio el diseño específico de la arquitectura de la página. Cualquier mejora o
funcionalidad adicional sobre el esquema básico propuesto será tenida en cuenta en la calificación.
5 de 5
Para introducir los datos, dado que no se está utilizando comunicación con un servidor que
suministre estos contenidos, se utilizarán las opciones “Añadir Categoría” y “Añadir Producto” en la
página web, donde se podrán indicar los datos correspondientes a cada tipo de dato a añadir. Para la
elección de los archivos de imágenes de forma local se puede hacer uso del objeto FileReader o de
otros procedimientos a elección del alumno
Para la creación de la página únicamente podrá utilizarse JavaScript además de los
frameworks Boostrap y JQuery vistos en clase.
La aplicación deberá ser correcta desde el punto de vista de la usabilidad: buena elección de
colores, textos, etc. mantener informado al usuario en todo momento, evitar errores inesperados, etc.
El enunciado de este ejercicio es suficientemente abierto por lo que el alumno puede elegir
añadir diferente funcionalidad y/o datos según lo considere
