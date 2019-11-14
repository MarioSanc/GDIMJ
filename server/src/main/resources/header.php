<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>header</title>
    <link rel="shortcut icon" href="./img/icon.png">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- nombre del sitio; es un enlace que lleva a la página ppal -->
    <a class="navbar-brand" href="contestarMensaje.php">GARABATO</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
          <li class="nav-item">
          <a class="nav-link" href="enviarMensaje.php">Enviar mensaje</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="administracion.php">Administración</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Añadir
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" data-toggle="modal"data-target="#modalAddAlum" id="anAlumnoH">Añadir alumno</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" data-toggle="modal"data-target="#modalAddUser" id="anUserH">Añadir usuario</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" data-toggle="modal"data-target="#modalAddClass" id="anClaseH">Añadir clase</a>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#">Cerrar sesión</a>
          </li>
        </ul>
    </div>
  </nav>
  <?php include "anadirAlumno.php" ?>
  <?php include "anadirUsuario.php" ?>
  <?php include "anadirClase.php" ?>
</body>
</html>