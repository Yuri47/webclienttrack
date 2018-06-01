<script>

export default {
  methods: {
    mudarDados() {

      const payload = {
        name: 'Alexs',
        email: 'alexs@gmail.com',
        level: 'user'
      }
      this.$store.commit('CHANGE_USER', payload),
      this.$store.actions

    }

  },
  computed: {
    hasUser() {
      return this.$store.state.user.name !== ''
    }
  }

}
</script>

<template id="">
  <div class="">
    <button :disabled="!hasUser" @click="mudarDados">Mudar Dados</button>
  </div>
</template>
