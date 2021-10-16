<template>
  <div class="register">
    <router-link to="/">
      <i class="fas fa-angle-left"></i>
    </router-link>
    <form action="" class="register-form">
      <div class="inputs">
        <span class="title">Register</span>

        <input
          type="email"
          v-model.trim="userData.email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          v-model.trim="userData.password"
          placeholder="Password"
          required
        />
        <input
          type="text"
          class="text"
          placeholder="First Name"
          v-model.trim="userData.firstName"
          required
        />
        <input
          type="text"
          class="text"
          placeholder="Last Name"
          v-model.trim="userData.lastName"
          required
        />
      </div>
    </form>
    <button type="button" @click="handleRegister">Register</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "Register",
  data() {
    return {
      userData: {
        email: null,
        password: null,
        firstName: null,
        lastName: null,
        trips: [],
        favorites: [],
      },
    };
  },
  methods: {
    ...mapActions(["register", "login"]),
    handleRegister() {
      this.register(this.userData);
      this.$router.push("/moovers");
    },
  },
});
</script>

<style lang='scss' scoped>
@media only screen and (min-width: 320px) and (max-width: 450px) {
  .register {
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
    .register-form {
      width: 100%;
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
      cursor: pointer;
    }
  }
}

@media only screen and (min-width: 450px) and (max-width: 1600px) {
  .register {
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
    .register-form {
      width: 100%;
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
      cursor: pointer;
    }
  }
}
</style>

