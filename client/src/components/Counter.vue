
<template>
    <div class="counter">
        <p>{{ count }}</p>
        <div class="counter-buttons">
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </div>
    </div>
</template>

<script>
import {counterStore} from '../store/CountStore'
export default {
  name: 'Counter',
  computed: {
    count () {
      return counterStore.state.count
    }
  },
  methods: {
    increment () {
      counterStore.commit('increment')
    },
    decrement () {
      counterStore.commit('decrement')
    }
  }
}
</script>
<style type="text/css">
    .counter-buttons {
        display: flex;
    }
</style>
