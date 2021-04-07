// Punto 1
$(document).ready(function() {
  $('#titulo1').click(function() {
    var image = new Image();

    var src = 'arbol.png'
    image.src = src;
    $('#imagen').append(image);
  })
})


// Punto 2
$(document).ready(function() {
  $('#boton').click(function() {
    var texto = $('#texto_escrito').val();
    $('#texto_resultado').html(`Texto introducido: ${texto}`);
  })
})


// Punto 3
var usuario = {
  nombre: 'Pedro',
  dni: '43358694J',
  anoNacimiento: 2000,
  anoIngreso: 2017,
  plusProductividad: 25,
  plusAntiguedad: 0.1,
  sueldoBase: 1600,
}

$(document).ready(function() {
  $('#titulo3').click(function() {
    var fecha = new Date();
    var ano = fecha.getFullYear();
    var edad = ano - usuario.anoNacimiento;
    $('#edad').html(edad);

    var anoTrabajo = ano - usuario.anoIngreso;
    var sueldo = usuario.sueldoBase + ((usuario.sueldoBase * usuario.plusProductividad)/100) + ((anoTrabajo / 3) * usuario.plusAntiguedad);
    $('#sueldo').html(sueldo);
  })
})


// Punto 4
$(document).ready(function() {
  $('#titulo4').click(function() {
    $('#n_parrafos').html($('p').length);
    $('#n_enlaces').html($('a').length);
    $('#n_div').html($('div').length);
  })
})