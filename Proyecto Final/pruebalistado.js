function armar(){ 

  $.ajax({
      url: "http://localhost:3000/ofertas",
      contentType: "application/json",
      type: "GET"}).done(
        function(data){  
          for(var i=0; i<data.length; i++) {
            $("#productos").append("<a href='detalle.html?id="+data[i].id+"'><div class='ofertadia'><div id='foto"+[i]+"' class='imgofertadia'><h5>$"+data[i].precio+"</h5></div><h3>"+data[i].titulo+"</h3></a><p>"+data[i].descripcion+"</p></div>"); 
            $("#foto"+[i]).css("background-image","url(img/"+data[i].foto1+".jpg)");
          };
        });
}
var cantHoteles=0;
var cantViajes=0;
var cantRest=0;
var cantEstetica=0;
var cantTiempo=0;
var cantOtros=0;




function contar(){ 
  $.ajax({
      url: "http://localhost:3000/ofertas",
      contentType: "application/json",
      type: "GET"}).done(
        function(data){  
          for(var i=0; i<data.length; i++) {
            if(data[i].categoria=="viajes"){
              cantViajes=cantViajes+1;
            }
            else if(data[i].categoria=="restaurantes"){
              cantRest=cantRest+1;
            }
            else if(data[i].categoria=="hoteles"){
              cantHoteles=cantHoteles+1;
            }
            else if(data[i].categoria=="estetica"){
              cantEstetica=cantEstetica+1;
            }
            else if(data[i].categoria=="tiempo"){
              cantTiempo=cantTiempo+1;
            }
          };
          $("#numviaj").append("<h2>"+cantViajes+"</h2><h3>VIAJES</h3>");
          $("#numhote").append("<h2>"+cantHoteles+"</h2><h3>HOTELES</h3>");
          $("#numres").append("<h2>"+cantRest+"</h2><h3>RESTAURANTES</h3>");
          $("#numest").append("<h2>"+cantEstetica+"</h2><h3>ESTETICA</h3>");
          $("#numtiempo").append("<h2>"+cantTiempo+"</h2><h3>TIEMPO LIBRE</h3>");
        });
      
}



function soloviajes(){
$( "#productos" ).empty();
  $.ajax({
      url: "http://localhost:3000/ofertas",
      contentType: "application/json",
      type: "GET"}).done(
        function(data){  
          for(var i=0; i<data.length; i++) {
            if (data[i].categoria=="viajes") {
                $("#productos").append("<a href='detalle.html?id="+data[i].id+"'><div class='ofertadia'><div id='foto"+[i]+"' class='imgofertadia'><h5>$"+data[i].precio+"</h5></div><h3>"+data[i].titulo+"</h3></a><p>"+data[i].descripcion+"</p></div>"); 
                $("#foto"+[i]).css("background-image","url(img/"+data[i].foto1+".jpg)");
            }
          };
        });

}
function solohoteles(){
$( "#productos" ).empty();
  $.ajax({
      url: "http://localhost:3000/ofertas",
      contentType: "application/json",
      type: "GET"}).done(
        function(data){  
          for(var i=0; i<data.length; i++) {
            if (data[i].categoria=="hoteles") {
                $("#productos").append("<a href='detalle.html?id="+data[i].id+"'><div class='ofertadia'><div id='foto"+[i]+"' class='imgofertadia'><h5>$"+data[i].precio+"</h5></div><h3>"+data[i].titulo+"</h3></a><p>"+data[i].descripcion+"</p></div>"); 
                $("#foto"+[i]).css("background-image","url(img/"+data[i].foto1+".jpg)");
            }
          };
        });

}
function solorest(){
$( "#productos" ).empty();
  $.ajax({
      url: "http://localhost:3000/ofertas",
      contentType: "application/json",
      type: "GET"}).done(
        function(data){  
          for(var i=0; i<data.length; i++) {
            if (data[i].categoria=="restaurantes") {
                $("#productos").append("<a href='detalle.html?id="+data[i].id+"'><div class='ofertadia'><div id='foto"+[i]+"' class='imgofertadia'><h5>$"+data[i].precio+"</h5></div><h3>"+data[i].titulo+"</h3></a><p>"+data[i].descripcion+"</p></div>"); 
                $("#foto"+[i]).css("background-image","url(img/"+data[i].foto1+".jpg)");
            }
          };
        });

}
function soloestetica(){
$( "#productos" ).empty();
  $.ajax({
      url: "http://localhost:3000/ofertas",
      contentType: "application/json",
      type: "GET"}).done(
        function(data){  
          for(var i=0; i<data.length; i++) {
            if (data[i].categoria=="estetica") {
                $("#productos").append("<a href='detalle.html?id="+data[i].id+"'><div class='ofertadia'><div id='foto"+[i]+"' class='imgofertadia'><h5>$"+data[i].precio+"</h5></div><h3>"+data[i].titulo+"</h3></a><p>"+data[i].descripcion+"</p></div>"); 
                $("#foto"+[i]).css("background-image","url(img/"+data[i].foto1+".jpg)");
            }
          };
        });

}
function solotiempo(){
$( "#productos" ).empty();
  $.ajax({
      url: "http://localhost:3000/ofertas",
      contentType: "application/json",
      type: "GET"}).done(
        function(data){  
          for(var i=0; i<data.length; i++) {
            if (data[i].categoria=="tiempo") {
                $("#productos").append("<a href='detalle.html?id="+data[i].id+"'><div class='ofertadia'><div id='foto"+[i]+"' class='imgofertadia'><h5>$"+data[i].precio+"</h5></div><h3>"+data[i].titulo+"</h3></a><p>"+data[i].descripcion+"</p></div>"); 
                $("#foto"+[i]).css("background-image","url(img/"+data[i].foto1+".jpg)");
            }
          };
        });
}
function solootros(){
$( "#productos" ).empty();
  $.ajax({
      url: "http://localhost:3000/ofertas",
      contentType: "application/json",
      type: "GET"}).done(
        function(data){  
          for(var i=0; i<data.length; i++) {
            if (data[i].categoria=="otros") {
                $("#productos").append("<a href='detalle.html?id="+data[i].id+"'><div class='ofertadia'><div id='foto"+[i]+"' class='imgofertadia'><h5>$"+data[i].precio+"</h5></div><h3>"+data[i].titulo+"</h3></a><p>"+data[i].descripcion+"</p></div>"); 
                $("#foto"+[i]).css("background-image","url(img/"+data[i].foto1+".jpg)");
            }
          };
        });
}

function todo(){
$( "#productos" ).empty();
  $.ajax({
      url: "http://localhost:3000/ofertas",
      contentType: "application/json",
      type: "GET"}).done(
        function(data){  
          for(var i=0; i<data.length; i++) {
                $("#productos").append("<a href='detalle.html?id="+data[i].id+"'><div class='ofertadia'><div id='foto"+[i]+"' class='imgofertadia'><h5>$"+data[i].precio+"</h5></div><h3>"+data[i].titulo+"</h3></a><p>"+data[i].descripcion+"</p></div>"); 
                $("#foto"+[i]).css("background-image","url(img/"+data[i].foto1+".jpg)");
          };
        });

}


$(document).ready(iniciar);
    
function iniciar()
  { 
    armar();
    contar();
    $("#btntodo").click(todo);
    $("#btnviaj").click(soloviajes);
    $("#btnhte").click(solohoteles);
    $("#btnres").click(solorest);
    $("#btnest").click(soloestetica);
    $("#btntim").click(solotiempo);
    $("#btnotros").click(solootros);
}
/*
    $(".servicio").change(filtrar);
  }

var opcionesServicios=[];

function filtrar(){
  var marcadoServicios=$(".servicio:checked");
  opcionesServicios.splice(0)
  for(var s=0; s<marcadoServicios.length; s++){
    var valueOservicios=$(marcadoServicios[p].val());
  }
  $("#productos").htmml("");

  $.ajax({
      url: "http://localhost:3000/ofertas",
      contentType: "application/json",
      type: "GET"}).done(
        function(data){  
          for(var i=0; i<data.length; i++) {
            $("#productos").append("<a href='detalle.html?id="+data[i].id+"'><div class='ofertadia'><div id='foto"+[i]+"' class='imgofertadia'><h5>$"+data[i].precio+"</h5></div><h3>"+data[i].titulo+"</h3></a><p>"+data[i].descripcion+"</p></div>"); 
            $("#foto"+[i]).css("background-image","url(img/"+data[i].foto1+".jpg)");
          };
        });
}
        
*/