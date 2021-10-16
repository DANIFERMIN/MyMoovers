<template>
  <div class="landing-container">
    <div class="big-logo">
      <img :src="logo.moovers" alt="Logo moovers" />
    </div>
    <router-link to="/register">
      <button class="register-button">Register</button>
    </router-link>
    <router-link to="/login">
      <button class="login-button">Login</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LandingPage",
  data() {
    return {
      logo: {
        moovers: "https://i.ibb.co/X86td7T/moovers-logo.png",
      },
    };
  },
});
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 320px) and (max-width: 450px) {
  .landing-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .big-logo {
      width: 330px;
      height: 330px;
      left: 21px;
      top: calc(50% - 330px / 2 - 41px);

      background: #76fcce;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      img {
        position: relative;
        top: 50px;
        left: 7px;
        max-width: 100%;
        max-height: 100%;
        object-fit: scale-down;
      }
    }
    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .register-button {
      font-family: Roboto, sans-serif;
      font-size: 0.8rem;
      font-style: normal;
      font-weight: 900;
      line-height: 1rem;
      letter-spacing: 0.04em;
      text-align: center;
      color: white;
      margin-top: 7%;
      margin-bottom: 7%;
      width: 85%;
      height: 55px;
      background-color: #d78aff;
      border: solid 2px #6d6d6d;
      box-sizing: border-box;
      border-radius: 6px;
      cursor: pointer;
    }
    .login-button {
      font-family: Roboto, sans-serif;
      font-size: 0.8rem;
      font-style: normal;
      font-weight: 900;
      line-height: 1rem;
      letter-spacing: 0.04em;
      text-align: center;
      color: #6d6d6d;
      margin-bottom: 15%;
      width: 85%;
      height: 55px;
      background-color: #fff;
      border: solid 2px #6d6d6d;
      box-sizing: border-box;
      border-radius: 6px;
      cursor: pointer;
    }
  }
}

@media only screen and (min-width: 450px) and (max-width: 1600px) {
  .landing-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30%;
    .big-logo {
      width: 330px;
      height: 330px;
      left: 21px;
      top: calc(50% - 330px / 2 - 41px);

      background: #76fcce;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      img {
        position: relative;
        top: 50px;
        left: 7px;
        max-width: 100%;
        max-height: 100%;
        object-fit: scale-down;
      }
    }
    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .register-button {
      font-family: Roboto, sans-serif;
      font-size: 0.8rem;
      font-style: normal;
      font-weight: 900;
      line-height: 1rem;
      letter-spacing: 0.04em;
      text-align: center;
      color: white;
      margin-top: 7%;
      margin-bottom: 7%;
      width: 85%;
      height: 55px;
      background-color: #d78aff;
      border: solid 2px #6d6d6d;
      box-sizing: border-box;
      border-radius: 6px;
      cursor: pointer;
    }
    .login-button {
      font-family: Roboto, sans-serif;
      font-size: 0.8rem;
      font-style: normal;
      font-weight: 900;
      line-height: 1rem;
      letter-spacing: 0.04em;
      text-align: center;
      color: #6d6d6d;
      margin-bottom: 15%;
      width: 85%;
      height: 55px;
      background-color: #fff;
      border: solid 2px #6d6d6d;
      box-sizing: border-box;
      border-radius: 6px;
      cursor: pointer;
    }
  }
}
</style>