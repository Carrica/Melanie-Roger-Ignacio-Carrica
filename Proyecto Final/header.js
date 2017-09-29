// JavaScript Document

// altoHeader = document.getElementById("header").style.height;
//altoHeader= $("header").css("height");
$(document).ready(function(){
  
 
   $("#navcel").hide()
    $("#cerrar").hide()
    $("#abrir").click(function(){
        $("#navcel").show();
		$("#abrir").hide();
		$("#cerrar").show();
    });
	$("#cerrar").click(function(){
        $("#navcel").hide();
		$("#abrir").show();
		$("#cerrar").hide();
    });
});


     window.onscroll = scroll; //cuando hacemos scroll llamamos a la función
     function scroll(){
           //coge el valor del scroll en pixeles
           var sc = window.pageYOffset;
           //registramos el valor scroll en la consola por si tenemos que hacer ajustes, saber dónde
           if(sc > 80){ //si racemes scroll más de 100 pixeles
                //si el header no tiene la clase fixed:
               /* if(!$('#header').hasClass('fixed')){ 
                     $('#header').addClass('fixed'); */
					 $("#fondoHeader").css("background","#333"); // le ponemos fixed
                }			
           else {
			   $("#fondoHeader").css("background","transparent");
               // $('#header').removeClass('fixed'); // se lo sacamos
           }
     }
