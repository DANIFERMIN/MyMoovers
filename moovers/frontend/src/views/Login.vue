<template>
  <div class="login">
    <router-link to="/">
      <i class="fas fa-angle-left"></i>
    </router-link>

    <div class="inputs">
      <span class="title">Login</span>
      <input type="email" v-model="userData.email" placeholder="Email" />
      <input
        type="password"
        v-model="userData.password"
        placeholder="Password"
      />
    </div>

    <button type="button" @click="handleLogin">Login</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "Register",
  data() {
    return {
      userData: { email: null, password: null },
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleLogin() {
      this.login(this.userData);
      this.$router.push("/moovers");
    },
  },
});
</script>

<style lang='scss' scoped>
@media only screen and (min-width: 320px) and (max-width: 450px) {
  .login {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      align-self: start;
      padding: 5%;
      i {
        color: #6d6d6d;
      }
    }

    .inputs {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      .title {
        font-family: Comfortaa, sans-serif;
        text-align: start;
        width: 85%;
        margin-left: 3%;
      }
    }

    input {
      font-family: Roboto, sans-serif;
      font-size: 12px;
      font-weight: 400;
      color: #848484;
      width: 85%;
      height: 45px;
      border: 2px solid #848484;
      margin: 3%;
      border-radius: 9px;
    }
    button {
      align-items: flex-start;
      font-family: Roboto, sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 900;
      line-height: 15px;
      letter-spacing: 0.04em;
      text-align: center;
      color: white;
      margin-top: 15%;
      margin-bottom: 15%;
      width: 85%;
      height: 55px;
      background-color: #d78aff;
      border: solid 2px #6d6d6d;
      box-sizing: border-box;
      border-radius: 6px;
    }
  }
}

@media only screen and (min-width: 450px) and (max-width: 1600px) {
  .login {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30%;
    a {
      align-self: start;
      padding: 5%;
      i {
        color: #6d6d6d;
      }
    }

    .inputs {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      .title {
        font-family: Comfortaa, sans-serif;
        text-align: start;
        width: 85%;
        margin-left: 3%;
      }
    }

    input {
      font-family: Roboto, sans-serif;
      font-size: 12px;
      font-weight: 400;
      color: #848484;
      width: 85%;
      height: 45px;
      border: 2px solid #848484;
      margin: 3%;
      border-radius: 9px;
    }
    button {
      align-items: flex-start;
      font-family: Roboto, sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 900;
      line-height: 15px;
      letter-spacing: 0.04em;
      text-align: center;
      color: white;
      margin-top: 15%;
      margin-bottom: 15%;
      width: 85%;
      height: 55px;
      background-color: #d78aff;
      border: solid 2px #6d6d6d;
      box-sizing: border-box;
      border-radius: 6px;
    }
  }
}
</style>
