<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>

<body>
  <!-- container-fluid expande el contenedor para que ocupe todo el espacio disponible -->
  <div class="container-fluid">
    <div class="row">
      <!-- panel lateral, demostrando acordeones (secciones expansibles) -->
      <div class="col-sm-2">
        <div class="accordion" id="accordionExampleF">
          <h3 class="mb-0">
            <div style="text-align:center;">
              Mensajes
            </div>
          </h3>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExampleF">
            <div class="card-body">
              <div class="list-group" id="lista-categorias">
                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center overflow-auto" id="filtroTodos">
                  Todos
                  <span class="badge badge-primary badge-pill " id="li_left_all_num"></span>
                </a>
                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center overflow-auto" id="filtroRecibidos">
                 Recibidos               
               </a>
                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center overflow-auto" id="filtroEnviados">
                  Enviados             
                </a>
                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center overflow-auto" id="filtroArchivados">
                  Archivados             
               </a>
               <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center overflow-auto" id="filtroFavoritos">
                  Favoritos             
                </a>
                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center overflow-auto">
                  Eliminados            
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

</body>
