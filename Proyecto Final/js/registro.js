function validation(){
  var emailID = document.registro.email1.value;
          atpos = emailID.indexOf("@");
          dotpos = emailID.lastIndexOf(".");

          var pass1 = document.getElementById("contraseña1");
          var pass2 = document.getElementById("contraseña2");
          var x = pass1.value;
          var y = pass2.value;


  if( document.registro.nombre.value == ""){
    alert("Es necesario indicar su Nombre")
    document.registro.nombre.focus();
    return false;
  }
  else if( document.registro.apellido.value == ""){
    alert("Es necesario indicar su Apellido")
    document.registro.apellido.focus();
    return false;
  }
  else if( document.registro.telefono.value == ""){
    alert("Por favor ingrese un número de telefono")
    document.registro.telefono.focus();
    return false;
  }
  else if( document.registro.localidad.value == ""){
    alert("Por favor ingrese su dirección")
    document.registro.localidad.focus();
    return false;
  }
  else if( document.registro.email1.value == ""){
    alert("Por favor ingrese una dirección de correo valido")
    document.registro.email1.focus();
    return false;
  }
  else if( document.registro.email2.value !== document.registro.email1.value){
     alert("Los correos no coinciden");
     document.registro.email2.focus();
     return false;
     }
   else if( document.registro.contraseña1.value == "" ||  8 > pass1.value.length || pass1.value.length > 18 ){
       alert("Por favor, eliga una contraseña que tenga entre 8 y 18 caracteres")
       document.registro.contraseña1.focus();
       return false;
     }
     if( x != y ){
        alert("Las contraseñas no coinciden")
        document.registro.contraseña2.focus();
       return false;
      }
      if( document.registro.chk2.checked==false){
        alert("Acepte los Términos y Condiciónes y la Política de Privacidad para avanzar.");
        return false;
        }
 return true;

    }

