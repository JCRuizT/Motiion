<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <form
        id="form-update-machine"
        v-on:submit.prevent="updateMachine"
        action="/dashboard/machine/update"
        method="post"
      >
        <div class="modal-header">
          <h4 class="modal-title">Actualizar Maquina</h4>
          <button type="button" class="close">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Nombre</label>
            <input
              type="text"
              id="nameUpdateMachine"
              name="nameUpdateMachine"
              class="form-control"
              required
            >
          </div>

          <div class="form-group">
            <label>Descripcion</label>
            <textarea
              id="descriptionUpdateMachine"
              style="height: 100px; resize: none;"
              name="descriptionUpdateMachine"
              class="form-control"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <div
              id="cont-prev-image-update"
              style="display: block"
            >
              <img src="inputs.machines.update.image" id="prev-image-update">
            </div>

            <div
              id="cont-prev-image-update"
              style="display: none"
            >
              <img id="prev-image-update">
            </div>

            <label class="btn btn-success btn-file">Browse
              <input
                type="file"
                name="imgMachineUpdate"
                id="imgMachineUpdate"
                style="display: none;"
              >
            </label>
          </div>

          <div class="form-group">
            <select
              name="selectUpdateCategory"
              id="selectUpdateCategory"
              class="custom-select mb-2 mr-sm-2 mb-sm-0"
              required
            >
              <option  value="0">Seleccionar Categoria</option>
              <!--<option v-if="machines.c.length > 0"  v-for="(categorias,index) in machines.c"  v-bind:value="categorias._id">{{ categorias.name }}</option> -->
              <option value="-1">No hay categorias</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <input
            type="hidden"
            id="imageMachine"
            name="imageMachine"
          >
          <input
            type="hidden"
            id="idUpdateMachine"
            name="idUpdateMachine"
          >
          <input type="button" class="btn btn-default" value="Cancel">
          <input type="submit" class="btn btn-info" id="updateAddMachine" value="Save">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

    name: "update-machine"
};
</script>

<style>
</style>

