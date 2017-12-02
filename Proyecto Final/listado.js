// JavaScript Document

$(document).ready(function(){
  armarListado();

  
});

function armarListado(){
  $.ajax({
    url: 'ofertas.json',
    type: 'GET',
    dataType: 'json';
    async: true,
    success: function listado(){};
    error: muestraError
  });
}