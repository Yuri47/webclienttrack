
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState('category', ['list'])
  }
}
</script>







<template lang="html">
<div class="">
  <h1>Categorias</h1>
</div>
</template>



<style lang="css">
</style>
