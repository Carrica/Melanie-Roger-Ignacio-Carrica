var ruta=window.location.href;
var idProducto=ruta.substring(ruta.indexOf("=")+1);


function infoDeProducto(){
		$.ajax({
      		url: "http://localhost:3000/ofertas",
     		contentType: "application/json",
      		type: "GET"}).done(function(data)
      		{
      			$(".laoferta").append("<div class='foto1'></div><div class='descripcionLaOferta'><h1>"+data[idProducto].titulo+"</h1><br><h2>"+data[idProducto].categoria+"</h2><br><h3>"+data[idProducto].descripcion+"</h3><br><h4>"+data[idProducto].descripcion2+"</h4><br><h5>Cantidad de cupones restantes:"+data[idProducto].restantes+"</h5><br><h6>Precio</h6><p>$"+data[idProducto].precio+"</p><div class='comprar'>Comprar!</div></div><div class='cortar'></div>");
      			$(".foto1").css("background-image","url(img/"+data[idProducto].foto1+".jpg)");
      		}
      	)
}
	
$(document).ready(iniciar);
    
function iniciar()
	{	infoDeProducto();
	}