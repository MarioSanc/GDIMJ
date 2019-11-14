<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="css/bootstrap-4.3.1.css">
  <!-- CSS Personalizados -->
  <link rel="stylesheet" href="css/verMensajes.css">
  <link rel="shortcut icon" href="./img/icon.png">
  <!-- Esto aparece como título de la ventana o pestaña en el navegador: cámbialo -->
  <title>Contestar mensaje</title>
</head>

<body>
  <?php include "header.php" ?>
  <!-- container-fluid expande el contenedor para que ocupe todo el espacio disponible -->
  <?php include "leftmenu.php" ?>
  <!-- panel ppal, demostrando un formulario con control de texto y un diálogo modal -->
  <div class="col-sm-4 anuncio" style='justify-content:center;'>
    <h4 style='text-align: center;'id="labelListaMensajes"> Todos</h4>
    <div class="list-group" id="list-groupPhp5">
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start overflow-auto"
        id="Arturo">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Arturo 1C</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">Duda sobre la clase del otro dia </p>
        <small>Hola,buenas tardes. No estuve demasiado atento a la clase de Matemáticas del martes y me gustaría saber
          si has mandado ejercicios para casa. Gracias.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Julio 3C</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Ejercicio 4</p>
        <small class="text-muted">Hola, no se hacer el ejercicio 4 de la hoja 2,¿Podrías resolverlo en clase?
          Gracias.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Elena 2B</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Hola profe</p>
        <small class="text-muted">Hola, solo quería saludar. Adios</small>
      </a>
    </div>
  </div>

  <div class="col-sm-6 anuncio" id="ContestarMs">

    <!-- botón para enviar el formulario; justify-content-end lo justifica a la derecha -->


  </div>
  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="js/jquery-3.3.1.js"></script>
  <script src="js/bootstrap.bundle-4.3.1.js"></script>
  <script src="js/tinymce.min.js"></script>
  <script src="js/gb.js" type="module"></script>
  <script type="text/javascript">
    tinymce.init({
      selector: '#inputTextoAnuncio',
      plugins: ['link image lists table'],
      toolbar: 'undo redo | bold italic backcolor | alignleft aligncenter alignjustify | bullist numlist outdent indent | image link table | removeformat',
      menubar: false,
    });
  </script>
</body>

</html>