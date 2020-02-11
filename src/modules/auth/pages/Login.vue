<template>
  <form @submit.prevent="submit()">
    <div id="login-page">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <div class="form-group">
            <input type="email" v-model="form.email" class="form-control" placeholder="E-mail" required>
          </div>
          <div class="form-group">
            <input type="password" v-model="form.password" class="form-control" placeholder="Password" required>
          </div>
          <button class="btn btn-primary w-100">Login</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    submit () {
      this.ActionDoLogin(this.form)
    }
  }
}
</script>

<style scoped lang="scss">
  #login-page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .card {
      width: 25%;
    }
  }
</style>
