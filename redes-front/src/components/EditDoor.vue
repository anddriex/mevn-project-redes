<template>
  <div class="puertas">
    <h1>Editar Puerta</h1>
    <div class="form">
      <div>
        <input type="text" name="name" placeholder="PISCINA, COCINA..." v-model="name">
      </div>
      <div>
        <textarea rows="4" cols="4" placeholder="Dispositivo conectado con Alexa..." v-model="description"></textarea>
      </div>
      <div class="check-area">
        <select class="select-status" name="status" v-model="selectedStatus">
          <option disabled value="">seleccione...</option>
          <option>ABRIR</option>
          <option>CERRAR</option>
        </select>
        <span>
          <input type="checkbox" id= "checkbox" v-model="activeState">
          <label for="checkbox">Activar</label>
        </span>
      </div>
      <div>
        <button class="app_post_btn" @click="updateDoor">Actualizar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditDoor',
  data () {
    return {
      id: this.$route.params.id,
      name: this.$route.params.door.name,
      description: this.$route.params.door.description,
      selectedStatus: this.$route.params.door.selectedStatus,
      activeState: this.$route.params.door.activeState
    }
  },
  computed: {
    lightBulb () {
      return this.$store.getters.lightBulb
    }
  },
  methods: {
    updateDoor () {
      const newValueDoor = {
        id: this.id,
        name: this.name,
        description: this.description,
        selectedStatus: this.selectedStatus,
        activeState: this.activeState
      }
      this.$store.dispatch('updateDoorAction', newValueDoor)
      this.$store.dispatch('getDoorsAction')
      this.$router.push({ name: 'Doors' })
    }
  }
}
</script>
<style type="text/css">
  .form {
    width: 500px;
    margin: 0 auto;
  }
  .form input, .form textarea {
    width: 500px;
    padding: 10px;
    border: 1px solid #e0dede;
    outline: none;
    font-size: 12px;
  }
  .form div {
    margin: 20px;
  }
  .app_post_btn {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    width: 520px;
    border: none;
    cursor: pointer;
  }
  #checkbox {
    width: 30%;
  }
  .check-area {
    width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

  }
  .select-status {
    display: inline-block;
    box-sizing: border-box;
  }
</style>
