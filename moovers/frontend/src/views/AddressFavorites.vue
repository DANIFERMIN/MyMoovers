<template>
  <nav class="profile-button" :class="{ 'profile-button--open': opened }">
    <span class="open-slide">
      <a href="#" @click="opened = !opened">
        <div>
          <div class="bar" :class="{ topopen: opened }"></div>
          <div class="bar" :class="{ midopen: opened }"></div>
          <div class="bar" :class="{ botopen: opened }"></div>
        </div>
      </a>
    </span>
  </nav>
  <div id="profile" class="side-nav" :class="{ 'sidenav--open': opened }">
    <div class="avatar">
      <i class="fas fa-user-circle"></i>
    </div>
    <h2>{{ currentUser.firstName }}</h2>

    <div>
      <h3>Favorites</h3>
      <section>
        <ul class="favorite-list">
          <li
            class="favorite-item"
            v-for="favorite in getCurrentUser().favorites"
            :key="favorite"
          >
            <i
              class="fas fa-times-circle"
              @click="deleteFavorite(favorite)"
            ></i>
            <p>Street: {{ favorite.street }}, {{ favorite.number }}</p>
            <p>Postalcode: {{ favorite.postalCode }}</p>
            <p>City: {{ favorite.city }}</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
  <div id="map"></div>

  <section class="addressInputs">
    <form action="">
      <label for="pickUpAddress">
        Pick Up Address
        <div class="input-large">
          <input
            id="origin-input"
            type="text"
            name="pickUpAddress"
            placeholder="Pick Up Address"
            v-model="myLocation"
          />
          <i
            class="fas fa-location-arrow"
            id="location-button"
            @click="locatorButtonPressed"
          ></i>
          <i class="fas fa-bookmark" @click="addFavorite(myLocation)"></i>
        </div>
      </label>
      <label for="destinationAddress">
        Destination Address
        <div class="input-large">
          <input
            id="destination-input"
            type="text"
            name="destinationAddress"
            placeholder="Destination Address"
            v-model="destinationAddress"
          />
          <i
            class="fas fa-bookmark"
            @click="addFavorite(destinationAddress)"
          ></i>
        </div>
      </label>
    </form>
  </section>

  <button @click="nextForm">Go</button>
</template>


<script lang="js">
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import initMap from "../assets/googleMaps";
import autocompleteInputs from '../assets/googleMaps/autocompleteInputs.js.js'

export default defineComponent({
  name: " Moovers",
  data() {
    return {
      opened: false,
      myLocation: null,
      center: null,
      destinationAddress: null,
    };
  },
  components: {},
  props: ["nextForm", "previousForm"],
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    initMap,
    autocompleteInputs,
    ...mapGetters(["getPickUpAddressString", "getCurrentUser"]),
    ...mapActions(["getAddressFrom", "addToFavorites", "deleteInFavorites"]),
    addFavorite(address) {
      const addressArray = address.split(",");
      const postalCityArray = addressArray[2].trim().split(" ");
      const favoriteAddressObject = {
        street: addressArray[0],
        number: Number(addressArray[1]),
        postalCode: postalCityArray[0],
        city: postalCityArray[1],
        userId: this.getCurrentUser()._id,
        token: this.getCurrentUser().token,
        refreshToken: this.getCurrentUser().refreshToken,
      };
      this.addToFavorites(favoriteAddressObject);
    },
    deleteFavorite(favorite) {
      const favoriteToDelete = {
        id: favorite._id,
        userId: this.getCurrentUser()._id,
        refreshToken: this.getCurrentUser().refreshToken,
      };
      this.deleteInFavorites(favoriteToDelete);
      this.favorites = this.getCurrentUser().favorites;
    },
    locatorButtonPressed() {
      this.myLocation = this.getPickUpAddressString();
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.getAddressFrom({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        });
      } else {
        console.log("Geolocation not available");
      }
    },
  },
  mounted() {
    this.getCurrentUser();

    this.getPickUpAddressString();
    this.initMap();
    this.autocompleteInputs()
  },
});
</script>
<style lang='scss' scoped>
@media only screen and (min-width: 320px) and (max-width: 450px) {
  .profile-button {
    align-self: start;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    overflow: hidden;
    height: 3.5rem;
    width: 3.5rem;

    .open-slides {
      border-radius: 50%;
      width: 65%;
    }
  }

  .profile-button--open {
    background-color: #fff;
    overflow: hidden;
    height: 63px;
    margin-left: 68%;
  }
  .side-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #4b4b4b;
    font-family: Comfortaa, sans-serif;
    font-weight: 700;
    height: 50%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0.9;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.3s;
  }

  .sidenav--open {
    .avatar {
      font-size: 3rem;
    }
    height: 100%;
    width: 65%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0.9;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.3s;
    .favorite-list {
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .favorite-item {
        font-family: Roboto, sans-serif;
        padding: 5%;
        margin: 5%;
        color: #4b4b4b;
        background: #bbbaba;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 9px;
      }
    }
  }

  .side-nav a {
    padding: 10px 10px 10px 30px;
    text-decoration: none;
    font-size: 22px;
    color: #ccc;
    display: block;
    transition: 0.3s;
  }

  .side-nav a:hover {
    color: #fff;
  }

  .side-nav .btn-close {
    position: absolute;
    top: 0;
    right: 22px;
    font-size: 36px;
    margin-left: 50px;
  }
  .bar {
    display: block;
    height: 5px;
    width: 30px;
    background: #6d6d6d;
    border-radius: 3px;
    margin: 5px auto;
    transition: all 0.3s ease;
  }

  .midopen {
    width: 0;
  }

  .topopen {
    transform: translateY(10px) rotateZ(45deg);
  }
  .botopen {
    transform: translateY(-10px) rotateZ(-45deg);
  }
  .addressInputs {
    color: #4b4b4b;
    font-family: Roboto, sans-serif;
    .input-large {
      border: #6d6d6d 1px solid;
      padding: 5%;
      display: flex;
      width: 85%;
      justify-content: space-between;
      border-radius: 9px;
      input {
        flex-grow: 2;
        text-align: center;
        border: none;
        width: 85%;
      }
      i {
        height: auto;
        width: auto;
      }
      .fa-location-arrow {
        color: #d78aff;
        margin-right: 3%;
      }
    }
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
  .map {
    margin-top: 10%;
    margin-bottom: 10%;
    width: 100%;
    height: 50%;
  }
  #map {
    margin-top: 10%;
    margin-bottom: 10%;
    width: 100%;
    height: 350px;
  }

  /* Optional: Makes the sample page fill the window. */
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .controls {
    margin-top: 10px;
    border: 1px solid transparent;
    border-radius: 2px 0 0 2px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: 32px;
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }

  #origin-input,
  #destination-input {
    background-color: #fff;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    font-weight: 300;
    margin-left: 12px;
    padding: 0 11px 0 13px;
    text-overflow: ellipsis;
    width: 200px;
  }

  #origin-input:focus,
  #destination-input:focus {
    border-color: #4d90fe;
  }

  #mode-selector {
    color: #fff;
    background-color: #4d90fe;
    margin-left: 12px;
    padding: 5px 11px 0px 11px;
  }

  #mode-selector label {
    font-family: Roboto, sans-serif;
    font-size: 13px;
    font-weight: 300;
  }
}
@media only screen and (min-width: 450px) and (max-width: 1600px) {
  .profile-button {
    margin-top: 25%;
    align-self: start;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    overflow: hidden;
    height: 3.5rem;
    width: 3.5rem;

    .open-slides {
      border-radius: 50%;
      width: 65%;
    }
  }

  .profile-button--open {
    background-color: #fff;
    overflow: hidden;
    height: 63px;
    margin-left: 68%;
  }
  .side-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #4b4b4b;
    font-family: Comfortaa, sans-serif;
    font-weight: 700;
    height: 50%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0.9;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.3s;
  }

  .sidenav--open {
    .avatar {
      font-size: 3rem;
    }
    height: 100%;
    width: 65%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0.9;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.3s;
    .favorite-list {
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .favorite-item {
        font-family: Roboto, sans-serif;
        padding: 5%;
        margin: 5%;
        color: #4b4b4b;
        background: #bbbaba;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 9px;
      }
    }
  }

  .side-nav a {
    padding: 10px 10px 10px 30px;
    text-decoration: none;
    font-size: 22px;
    color: #ccc;
    display: block;
    transition: 0.3s;
  }

  .side-nav a:hover {
    color: #fff;
  }

  .side-nav .btn-close {
    position: absolute;
    top: 0;
    right: 22px;
    font-size: 36px;
    margin-left: 50px;
  }
  .bar {
    display: block;
    height: 5px;
    width: 30px;
    background: #6d6d6d;
    border-radius: 3px;
    margin: 5px auto;
    transition: all 0.3s ease;
  }

  .midopen {
    width: 0;
  }

  .topopen {
    transform: translateY(10px) rotateZ(45deg);
  }
  .botopen {
    transform: translateY(-10px) rotateZ(-45deg);
  }
  .addressInputs {
    color: #4b4b4b;
    font-family: Roboto, sans-serif;
    .input-large {
      border: #6d6d6d 1px solid;
      padding: 5%;
      display: flex;
      width: 85%;
      justify-content: space-between;
      border-radius: 9px;
      input {
        flex-grow: 2;
        text-align: center;
        border: none;
        width: 85%;
      }
      i {
        height: auto;
        width: auto;
      }
      .fa-location-arrow {
        color: #d78aff;
        margin-right: 3%;
      }
    }
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
  .map {
    margin-top: 10%;
    margin-bottom: 10%;
    width: 100%;
    height: 50%;
  }
  #map {
    margin-top: 10%;
    margin-bottom: 10%;
    width: 100%;
    height: 350px;
  }

  /* Optional: Makes the sample page fill the window. */
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .controls {
    margin-top: 10px;
    border: 1px solid transparent;
    border-radius: 2px 0 0 2px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: 32px;
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }

  #origin-input,
  #destination-input {
    background-color: #fff;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    font-weight: 300;
    margin-left: 12px;
    padding: 0 11px 0 13px;
    text-overflow: ellipsis;
    width: 200px;
  }

  #origin-input:focus,
  #destination-input:focus {
    border-color: #4d90fe;
  }

  #mode-selector {
    color: #fff;
    background-color: #4d90fe;
    margin-left: 12px;
    padding: 5px 11px 0px 11px;
  }

  #mode-selector label {
    font-family: Roboto, sans-serif;
    font-size: 13px;
    font-weight: 300;
  }
}
</style>
