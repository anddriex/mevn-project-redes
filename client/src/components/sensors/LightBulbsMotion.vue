<template>
    <div class="light-motion">
        <h1>Focos</h1>
        <div class="light-bulbs" v-for="item in lightBulbs">
            <p>{{item.name}}</p>
            <p>{{item.status}}</p>
        </div>
<!--        <button @click="changeStatus">cambiar estado</button>-->
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: 'LightBulbsMotion',
    mounted() {
        this.$store.dispatch('getLightBulbsAction')
    },
    computed: {
        ...mapGetters(['lightBulbs'])
    }
}
</script>