
<template>
    <div class="lights">
        <h1>Nueva Luz</h1>
        <div class="form">
            <div>
                <input type="text" name="name" placeholder="ESCALERAS, GARAGE..." v-model="name" >
            </div>
            <div>
                <textarea rows="6" cols="6" placeholder="Configurar tiempo de actividad de energia..." v-model="description"></textarea>
            </div>
            <div>
                <button class="app_post_btn" @click="addNewLightBulb">agregar nueva luz</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NewLightBulb',
  data () {
    return {
      name: '',
      description: '',
      selectedStatus: 'OFF',
      activeState: false
    }
  },
  methods: {
    addNewLightBulb () {
      const light = {
        name: this.name,
        description: this.description,
        selectedStatus: this.selectedStatus,
        activeState: this.activeState
      }
      this.$store.dispatch('addNewLightBulbAction', light)
      this.$store.dispatch('getLightBulbsAction')
      this.$router.push({name: 'LightBulbs'})
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
