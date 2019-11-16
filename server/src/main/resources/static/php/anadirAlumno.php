<!-- Modal de selección de categorías (lanzado por un botón) -->
<div class="modal fade" id="modalAddAlum" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h4 class="modal-title w-100 font-weight-bold">Añadir alumno</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body mx-3">
            <div class="md-form mb-6">
              <i class="fas fa-envelope prefix grey-text"></i>
              <label for="defaultForm-name">Nombre del alumno</label>
              <input type="text" id="inputName" class="form-control">
            </div>
            <div class="md-form mb-6">
              <i class="fas fa-envelope prefix grey-text"></i>
              <label for="defaultForm-surname">Apellidos del alumno</label>
              <input type="text" id="inputName2" class="form-control">
            </div>
            <div class="md-form mb-6">
              <i class="fas fa-envelope prefix grey-text"></i>
              <label for="defaultForm-dni">DNI del alumno</label>
              <input type="text" id="inputDNI" class="form-control">
            </div>
            <div class="md-form mb-6">
              <label for="selectClass">Selecciona clase</label>
              <select class="form-control" data-live-search="true" id="selectClass"> 
                <option value="none" selected disabled hidden>-clase-</option>
                <option>1A</option>
                <option>1B</option>
                <option>1C</option>
                <option>1D</option>
              </select>
            </div>
            <div class="md-form mb-6">
              <label for="selectRes">Selecciona responsable</label>
              <select multiple class="form-control" data-live-search="true" id="selectRes"> 
                <option value="none" selected disabled hidden>-responsable-</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
              </select>
              <button class="btn btn-primary" style="margin-top: 10px">Guardar</button>
            </div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-primary" data-dismiss="modal" id="boton-publicar">Guardar y
            salir</button>
        </div>
      </div>
    </div>
  </div>

