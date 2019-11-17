<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="css/bootstrap-4.3.1.css">
  <link rel="shortcut icon" href="./img/icon.png">
  <!-- Esto aparece como título de la ventana o pestaña en el navegador: cámbialo -->
  <title>Enviar mensaje</title>
</head>

<body>

  <?php include "header.php" ?>
  <!-- container-fluid expande el contenedor para que ocupe todo el espacio disponible -->
  <h4 style='text-align: center;margin-top:2%;'> Nuevo Mensaje </h4>
  <div class="col-sm-8 anuncio" style="margin-left:auto;margin-right:auto;margin-top:2%;">
    <form method="post">
      <div class="form-row datos-anuncio">
        <div class="form-group col-md-6">
          <label for="selectClass2">Selecciona clase</label>
          <select class="form-control" data-live-search="true" id="selectClassEM">
            <option value="none" selected disabled hidden>-clase-</option>
            <option>1A</option>
            <option>1B</option>
            <option>1C</option>
            <option>1D</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label>Asunto</label>
          <div class="input-group">
            <input type="text" class="form-control" id="selectAsunto">
          </div>
        </div>
      </div>
      <div class="form-row texto-anuncio">
        <div class="form-group col">
          <label for="inputTextoAnuncio">Escribir mensaje</label>
          <textarea id="inputTextoAnuncio" class="form-control"></textarea>
        </div>
      </div>
      <!-- botón para enviar el formulario; justify-content-end lo justifica a la derecha -->
      <div class="form-row justify-content-end">
        <button type="submit" id="boton-descartar" class="btn btn-primary">Descartar mensaje</button>
        <button type="submit" class="btn btn-primary" id="boton-publicar-mail" style="margin-left: 10px">Enviar mensaje</button>
      </div>
  </div>
  </form>
  </div>
  </div>
  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="js/jquery-3.3.1.js"></script>
  <script src="js/bootstrap.bundle-4.3.1.js"></script>
  <script src="js/tinymce.min.js"></script>
  <script src="js/gb.js" type="module"></script>

</body>

</html>