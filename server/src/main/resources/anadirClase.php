<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Esto aparece como título de la ventana o pestaña en el navegador: cámbialo -->
  <title>Anadir Clase</title>
</head>
  <div class="modal fade" id="modalAddClass" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h4 class="modal-title w-100 font-weight-bold">Añadir clase</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body mx-3">
            <div class="md-form mb-6">
              <i class="fas fa-envelope prefix grey-text"></i>
              <label for="defaultForm-name">Nombre de la clase</label>
              <input type="text" id="nombreClaseLabel" class="form-control">
            </div>
        </div>
        <div class="modal-body mx-3">
          <label>Alumnos</label>
          <select class="form-control" id="selectAlum" multiple>
            <option>Pepe</option>
            <option>Pepa</option>
            <option>Pepi</option>
            <option>Pepo</option>
          </select>
          <button class="btn btn-primary" style="margin-top: 10px">Guardar </button>
        </div>
        <div class="modal-body mx-3">
            <label>Profesores</label>
            <select multiple="multiple" class="form-control custom-headers"  data-live-search="true" id="selecProfesor"> 
              <option value="none" selected disabled hidden>-Prefesor-</option>
              <option>Profe1</option>
              <option>Profe2</option>
              <option>Profe3</option>
              <option>Profe4</option>
            </select>
            <button class="btn btn-primary" style="margin-top: 10px">Guardar </button>
          </div>
          
        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-primary" data-dismiss="modal" id="button-save-clas">Guardar y
            salir</button>
        </div>
      </div>
    </div>
  </div>

