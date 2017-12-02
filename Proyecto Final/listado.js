function armar(){ 

  $.ajax({
      url: "http://localhost:3000/ofertas",
      contentType: "application/json",
      type: "GET"}).done(
        function(data){  
          $.each(data, function(i, item) {
            $("#productos").append("<div class='ofertadia'><div id='foto"+[i]+"' class='imgofertadia'></div><h3>"+data[i].titulo+"</h3><p>"+data[i].descripcion+"</p><div class='cantestrellas'><div class='cortar'></div></div><h5>"+data[i].precio+"/h5></div>"); 
            $("#foto"+[i]).css("background-image","url(img/"+data[i].foto1+".jpg)");
          });
        });
}

$(document).ready(iniciar);
    
function iniciar()
  { 
    armar();
  }

