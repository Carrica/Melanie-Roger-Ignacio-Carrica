function guardarDatos(){
      
      localStorage.email = document.getElementById("email1").value;
      localStorage.contraseña = document.getElementById("contraseña1").value;
      }

      //-------------------------------------------------------------//

      function login() {
            // Levanto los datos ingresados por el usuario
            var email = document.getElementById('email1').value;
            var contraseña = document.getElementById('contraseña1').value;
            var x = localStorage.email;
            var y = localStorage.contraseña;
                if (x == email && y == contraseña){
                   mostrarDatos();
                 
                }
                    
                
                else {
                    mostrarError();
                    
                }
            
            return true;
    }

    function mostrarDatos() {
      if ((localStorage.email != undefined) && (localStorage.contraseña != undefined)) {
          // Mostrar DAtos del usuario Logueado
         alert("¡Bienvenido a OPA!")
      } 
  }
  function mostrarError() {
      alert("Email/Contraseña invalido")
  }

  function logueado() {
      if (localStorage.email != null){
      var user = localStorage.email;
      document.getElementById("datos").innerHTML = user;
      document.getElementById("ingresar").innerHTML = "";
      document.getElementById("registrarse").innerHTML = "";
      document.getElementById("boton").innerHTML = "<button onclick="+"salir()"+">Salir</button>";
    }
      else {
          document.getElementById("datos").innerHTML = "";
          document.getElementById("boton").innerHTML = "";
      }
  }

  function salir() {
    localStorage.clear();
  }
  
 