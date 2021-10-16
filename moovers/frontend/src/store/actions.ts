import axios from 'axios';
import { ActionContext } from 'vuex';
import {
  UserWithToken,
  UserRegisterData,
  UserLoginData,
  State, 
  AddressData 
} from '@/types/interfaces';

const actions = {
    async register({dispatch}: ActionContext<State, State>, userData: UserRegisterData): Promise<void> {
        const {data} = await axios.post("http://localhost:5000/mooversApi/register", userData);
        dispatch("login", {email: data.createdUser.email, password: data.createdUser.password});
    },
  
    async login({ dispatch }: ActionContext<State, State>, userData: UserLoginData):  Promise<void> {
        const {data} = await axios.post("http://localhost:5000/mooversApi/login", userData);
        dispatch("userLogedFromApi", data);

    },

    getUserFromLocalStorage({dispatch}: ActionContext<State, State>)  {
      const localStorageUser = JSON.parse(localStorage.getItem("userData") || "")
      dispatch("login", {email: localStorageUser.email, password: localStorageUser.password});
    }, 
    
    async userLogedFromApi({commit}: ActionContext<State, State>,data2: UserWithToken):  Promise<void> { 
        const { data } = await axios({
            method: 'GET',
            url: `http://localhost:5000/mooversApi/users/${data2._id}`,
            headers: { Authorization: `Bearer ${data2.token}` }
        });
        data.token = data2.token;
        data.refreshToken = data2.refreshToken;
        localStorage.setItem("userData", JSON.stringify({
          _id:data._id,
          email: data.email, 
          password: data.password, 
          firstName: data.firstName, 
          lastName: data.lastName, 
          token: data.token,
          refreshToken: data.refreshToken,
          trips: data.trips,
          favorites: data.favorites}));
        commit("loginUser", data);
        commit('loadUser', data);
      },
  
    async deleteDataFromLocalStorage({commit}: ActionContext<State, State>):  Promise<void> {
        localStorage.setItem("userData", JSON.stringify(""));
        const logedOutUser = {token: "", refreshToken: ""};
        commit("logoutUser", logedOutUser)
    },
    async getAddressFrom({ commit }: ActionContext<State, State>, {lat, long}: any) {
      const {data} = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat +"," + long +'&key=AIzaSyBgj5TGyxfs80kcffZQT6pLt5aVvVGErOQ')
      const streetAddressData = data.results[0].formatted_address
      commit("loadDestinationAddress", streetAddressData)
    },
    async addToFavorites({ commit, dispatch }: ActionContext<State, State>, addressData: AddressData){
      const addressDataObject = {
        street: addressData.street,
        number: addressData.number,
        postalCode: addressData.postalCode,
        city: addressData.city,
        userId: addressData.userId,
      }
      const objectForMutation = {
        _id: addressData.userId,
        token: addressData.refreshToken,
        refreshToken: addressData.refreshToken
      }
      const { data } = await axios({
        method: 'POST',
        data: addressDataObject,
        url: `http://localhost:5000/mooversApi/addresses`,
        headers: { Authorization: `Bearer ${addressData.refreshToken}` }
    });
   const favoriteAddress = data;
   commit("pushToFavorites", favoriteAddress)
   dispatch("userLogedFromApi", objectForMutation)
    },
    async deleteInFavorites({ commit, dispatch }: ActionContext<State, State>, addressData:any){
      const addressDataObject = {
        userId: addressData.userId,
      }
      const objectForMutation = {
        _id: addressData.userId,
        token: addressData.refreshToken,
        refreshToken: addressData.refreshToken
      }
      const { data } = await axios({
        method: 'DELETE',
        data: addressDataObject,
        url: `http://localhost:5000/mooversApi/addresses/${addressData.id}`,
        headers: { Authorization: `Bearer ${addressData.refreshToken}` }
    });
    const addressToDelete = data
    dispatch("userLogedFromApi", objectForMutation)
    commit("popFromFavorites", addressToDelete)
    },
    async createTrip({ commit }: ActionContext<State, State>, tripData:any){
      const tripDataObject = {
        userId: tripData.userId,
        pickUpAddress: tripData.pickUpAddress,
        destinationAddress: tripData.destinationAddress,
        house:tripData.house,
        thingsToMove:tripData.thingsToMove
      }
      const { data } = await axios({
        method: 'POST',
        data: tripDataObject,
        url: `http://localhost:5000/mooversApi/trips`,
        headers: { Authorization: `Bearer ${tripData.refreshToken}` }
    });
    const cartToCompile = {
        user:tripData.userId,
        trip: data._id,
        hours: tripData.hours,
        rate:tripData.rate,
        total:tripData.total,
        refreshToken: tripData.refreshToken
    }
   const currentTrip = data;
   commit("pushToTrips", currentTrip)
   commit("compileCart", cartToCompile)
    },
    async createCart({ dispatch }: ActionContext<State, State>, cartData:any){
      const cartToCreate = {
        user:cartData.user,
        trip: cartData.trip,
        hours: cartData.hours,
        rate:cartData.rate,
        total:cartData.total
    }
      const { data } = await axios({
        method: 'POST',
        data: cartToCreate,
        url: `http://localhost:5000/mooversApi/carts`,
        headers: { Authorization: `Bearer ${cartData.refreshToken}` }
    });
    
   const currentCart = data;
   currentCart.refreshToken = cartData.refreshToken
   dispatch("getOneCart", currentCart)

    },
    async getOneCart({ commit }: ActionContext<State, State>, cartData:any){

      const { data } = await axios({
        method: 'GET',
        url: `http://localhost:5000/mooversApi/carts/${cartData._id}`,
        headers: { Authorization: `Bearer ${cartData.refreshToken}` }
    });
    
   const currentCart = data;
   commit("loadCartFromApi", currentCart)

    },

}
export default actions; 