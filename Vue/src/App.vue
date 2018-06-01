<script>
import CcUsers from './components/users/main.vue'
  export default {
    name: 'WebTrackClient',

    mounted() {
      const payload = {
        name: 'Yuri',
        email: 'yuri.alexs@gmail.com',
        level: 'user'
      }

      setTimeout(() => {this.$store.commit('CHANGE_USER', payload)}, 3000)
    },
    components: {
      CcUsers
    },
    computed: {
      outraCoisa() {
          return 'Another Thing'
      },
      user() {
        const {name, email} = this.$store.state.user
        return `O usuario logado é ${name} e possui o email ${email}.  `
      }
    }
  }
</script>


<template id="">
  <div class="">
    <h1>Welcome</h1>
    <h4>{{user}} {{outraCoisa}}</h4>
    <hr>
    <cc-users></cc-users>
  </div>
</template>
