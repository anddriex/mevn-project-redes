
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
import {store} from '../store'
export default {
  name: 'Counter',
  computed: {
    count () {
      return store.state.counter.count
    }
  },
  methods: {
    increment () {
      store.counter.commit('increment')
    },
    decrement () {
      store.counter.commit('decrement')
    }
  }
}
</script>
<style type="text/css">
    .counter-buttons {
        display: flex;
    }
</style>
