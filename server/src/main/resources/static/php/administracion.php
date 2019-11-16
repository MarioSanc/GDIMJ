<!DOCTYPE html>
<html lang="en">

<head>
  <title>Garabato - Administración</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <!-- Required meta tags -->
  <link rel="shortcut icon" href="./img/icon.png">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="css/bootstrap-4.3.1.css">
  <link rel="stylesheet" href="css/administracion.css">
</head>

<body>
  <?php include "header.php" ?>
  <div class="container">
    <h2 id="administracionLabel">Administración</h2>
    <input class="form-control" id="myInput" type="text" placeholder="Buscar..">
    <br>
    <div id="contenedorTabla">
      <table class="table table-bordered table-striped" id="administrationTable">
        <thead>
          <tr>
            <th>Datos</th>
            <th>Clases</th>
            <th>Opciones</th>
    </div>
    </tr>
    </thead>
    <tbody id="myTable">
      <tr>
        <td>John Nieve</td>
        <td>1A</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Mary June July</td>
        <td>2A</td>
        <td>-</td>
      </tr>
      <tr>
        <td>July August September</td>
        <td>1C</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Miguel Hernandez</td>
        <td>2B</td>
        <td>-</td>
      </tr>
    </tbody>
    </table>
  </div>
  </div>


  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="js/jquery-3.3.1.js"></script>
  <script src="js/bootstrap.bundle-4.3.1.js"></script>
  <script src="js/tinymce.min.js"></script>
  <script src="js/gb.js" type="module"></script>

  <script>
    $(document).ready(function () {
      $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
  </script>

</body>

</html>