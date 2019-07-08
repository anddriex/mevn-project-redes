
<template>
  <div class="doors">
    <h1>Nueva Puerta</h1>
    <div class="form">
      <div>
        <input type="text" name="name" placeholder="DORMITORIO, GARAGE..." v-model="name" >
      </div>
      <div>
        <textarea rows="6" cols="6" placeholder="Configurar hora de entrada.." v-model="description"></textarea>
      </div>
      <div>
        <button class="app_post_btn" @click="addNewDoor">agregar nueva puerta</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewDoor',
  data () {
    return {
      name: '',
      description: '',
      selectedStatus: 'CLOSE',
      activeState: false
    }
  },
  methods: {
    addNewDoor () {
      const door = {
        name: this.name,
        description: this.description,
        selectedStatus: this.selectedStatus,
        activeState: this.activeState
      }
      this.$store.dispatch('addNewDoorAction', door)
      this.$store.dispatch('getDoorsAction')
      this.$router.push({name: 'Doors'})
    }
  }
}
</script>
<style type="text/css">
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
</style>
