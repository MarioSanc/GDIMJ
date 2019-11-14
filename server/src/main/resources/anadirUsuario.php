<!-- Modal de selección de categorías (lanzado por un botón) -->
<div class="modal fade" id="modalAddUser" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Añadir usuario</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <label for="defaultForm-surname">Selecciona tipo de usuario</label>
        <select class="form-control" data-live-search="true" id="selectType">
          <option value="none" selected disabled hidden>-tipo-</option>
          <option>profe</option>
          <option>respon</option>
          <option>admin</option>
        </select>
        <div class="md-form mb-6">
          <i class="fas fa-envelope prefix grey-text"></i>
          <label for="defaultForm-name">Nombre</label>
          <input type="text" id="nUser" class="form-control">
        </div>
        <div class="md-form mb-6">
          <i class="fas fa-envelope prefix grey-text"></i>
          <label for="defaultForm-surname">Apellido</label>
          <input type="text" id="apUser" class="form-control">
        </div>
        <div class="md-form mb-6">
          <i class="fas fa-envelope prefix grey-text"></i>
          <label>Telefonos</label>
          <input type="tel" multiple="multiple" id="telUser" class="form-control">
        </div>
        <div class="md-form mb-6">
          <label for="selectClass2">Selecciona clase</label>
          <select class="form-control" data-live-search="true" id="selectClass2" multiple>
            <option value="none" selected disabled hidden>-clase-</option>
            <option>1A</option>
            <option>1B</option>
            <option>1C</option>
            <option>1D</option>
          </select>
          <button class="btn btn-primary" style="margin-top: 10px">Guardar clases</button>
        </div>
        <div class="md-form mb-6">
        <label class="mdb-main-label">Selecciona alumnos</label>
          <select class="form-control" id="selectAlumU" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <button class="btn btn-primary" style="margin-top: 10px">Guardar alumnos</button>
        </div>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button type="button" class="btn btn-primary" data-dismiss="modal" id="anUser">Guardar y salir</button>
      </div>
    </div>
  </div>
</div>
