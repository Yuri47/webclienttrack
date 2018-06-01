<script>
import CcUsers from './components/users/main.vue'
  export default {
    components: {
      CcUsers
    },
    computed: {
      user() {
        const {name, email} = this.$store.state.user
        return `O usuario logado é ${name} e possui o email ${email}.`
      }
    }
  }
</script>


<template id="">
  <div class="">
    <h1>Welcome</h1>
    <h4>{{user}}</h4>
    <hr>
    <cc-users></cc-users>
  </div>
</template>
