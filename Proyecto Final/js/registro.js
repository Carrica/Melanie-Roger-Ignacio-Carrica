function validation() {
  var emailID = document.registro.email1.value;
          atpos = emailID.indexOf("@");
          dotpos = emailID.lastIndexOf(".");

          var pass1 = document.getElementById("contraseña1");
          var pass2 = document.getElementById("contraseña2");
          var x = pass1.value;
          var y = pass2.value;


  if( document.registro.nombre.value == ""){
    document.getElementById('msgnombre').innerHTML = "* Campo obligatorio";
    document.registro.nombre.focus();
    return false;
  }
  if( document.registro.apellido.value == ""){
    document.getElementById("msgapellido").innerHTML = "* Campo obligatorio";
    document.registro.apellido.focus();
    return false;
  }
  if( document.registro.telefono.value == ""){
    document.getElementById("msgtelefono").innerHTML = "* Campo obligatorio";
    document.registro.telefono.focus();
    return false;
  }
  if( document.registro.localidad.value == ""){
    document.getElementById("msglocalidad").innerHTML = "* Campo obligatorio";
    document.registro.localidad.focus();
    return false;
  }
  if( document.registro.email1.value == ""){
    document.getElementById("msgemail1").innerHTML = "* Campo obligatorio";
    document.registro.email1.focus();
    return false;
  }
  if( document.registro.email2.value == ""){
    document.getElementById("msgemail2").innerHTML = "* Campo obligatorio";
    document.registro.email2.focus();
    return false
  }
       else {
          if( document.registro.email2.value !== document.registro.email1.value){
          document.getElementById("msgemail2").innerHTML = "* Los correos no coinciden";
          document.registro.email2.focus();
          return false;
          }
       }
  if( document.registro.contraseña1.value == ""){
    document.getElementById("msgcontraseña1").innerHTML = "* Campo obligatorio";
    document.registro.contraseña1.focus();
    return false;
  }
       else {
         if( 8 > pass1.value.length || pass1.value.length > 16 ) {
           document.getElementById("msgcontraseña1").innerHTML = "La contraseña debe tener entre 8 y 16 caracteres";
           document.registro.contraseña1.focus();
           return false;
                       }
            }
    if( x != y ){
       document.getElementById("msgcontraseña2").innerHTML = "* Las contraseñas no coinciden";
       document.registro.contraseña2.focus();
      return false;
               }
    if( document.registro.chk2.checked==false){
      alert("Acepte los Términos y Condiciónes y la Política de Privacidad para avanzar.");
      return false;
      }

    return true;

}
