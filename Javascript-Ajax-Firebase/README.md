# Práctica Javascript, Ajax y Firebase
En esta práctica se ha hecho uso de las herramientas siguiente, mediante las cuales se han resuelto los dos siguientes ejercicios: 
* Javascript
* Ajax
* Firebase  

#### 1. Crear una página Web que contenga un formulario con un botón. Cuando el usuario pincha el botón se debe mostrar el contenido que devuelve el servicio web: https://jsonplaceholder.typicode.com/comments?postId=parametro en un párrafo. La petición al servicio debe ser mediante AJAX. El manejo del DOM, y de AJAX se debe realizar con la librería jQuery. parametro es un entero numérico que cumplimenta el usuario en el formulario. Se debe implementar una regla de validación en la que se controle que el usuario introduce un número, en caso contrario se debe agregar un mensaje de error.
  En este primer ejercicio se han seguido una serie de pasos para su resolución:
   1. Mediante un formulario se solicita un número correspondiente al **PostId** que queremos obtener
   2. Haciendo uso del puggin *validation de jquery* se ha implemetado una regla que permita validar que el usuario a introducido un número
   3. Si la validación anterior es correcta, al hacer click en el botón se realizará un `$.getJSON(URL)` para traernos del servidor el contenido cuyo **PostId** sea igual al introducido anteriormente
   4.  Tras traernos dicha información, esta es mostrada por pantalla

#### 2. Insertar o  actualizar información en una base de datos Firebase desde alguna página de tu proyecto.
  En este segundo ejercicio, haciendo uso de **Firebase**, haremos que haciendo click en un botón se nos almacene en una base de datos lo que se muestra por pantalla, y a su vez los datos que se encuentran en dicha base de datos se muestran por consola cada vez que se añade un nuevo elemento.
