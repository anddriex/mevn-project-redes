<template>
  <div class="doors">
    <h1>Puertas</h1>
    <div v-if="doors.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewDoor' }">Nueva Puerta</router-link>
      </div>
      <table>
        <tr>
          <td>Nombre</td>
          <td width="550">Descripcion</td>
          <td width="100" align="center">Actividad/Estado</td>
        </tr>
        <tr v-for="door in doors" v-bind:key="door.id">
          <td>{{ door.name }}</td>
          <td>{{ door.description }}</td>
          <td v-if="door.activeState === true" align="center">
            <router-link v-bind:to="{ name: 'EditDoor', params: { id: door._id,  door: door } }">
              Editar
            </router-link> |
            <span>{{door.selectedStatus}}</span>
          </td>
          <td v-else align="center">
            <router-link v-bind:to="{ name: 'EditDoor', params: { id: door._id, door: door } }">Editar</router-link> |
            <span>Inactivo</span>
          </td>
        </tr>
      </table>
    </div>
    <div v-else class="flex-center flex">
      <div class="flex-column flex-middle flex">
        <p>No hay puertas..!</p>
        <div>
          <router-link v-bind:to="{ name: 'NewDoor' }">Crear nueva puerta</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Doors',
  mounted () {
    this.$store.dispatch('getDoorsAction')
  },
  computed: {
    doors () {
      return this.$store.getters.doors
    }
  }
}
</script>

<style type="text/css">
  .table-wrap {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  table th, table tr {
    text-align: left;
  }
  table thead {
    background: #f2f2f2;
  }
  table tr td {
    padding: 10px;
  }
  table tr:nth-child(odd) {
    background: #f2f2f2;
  }
  table tr:nth-child(1) {
    background: #4d7ef7;
    color: #fff;
  }
  a, span {
    color: #4d7ef7;
    text-decoration: none;
  }
  a.add_post_link {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
  .m-t-s {
    margin: 10px 0;
  }

  .flex-center {
    justify-content: center;
  }
  .flex-middle {
    align-items: center;
  }

  .flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }
</style>
