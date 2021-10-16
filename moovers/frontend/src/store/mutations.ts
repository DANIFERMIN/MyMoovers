import {State} from '../types/interfaces'

const  mutations = {
    handleFormOnePlusThing(state: State, payload: any){
      if(state.formOne.things[payload]){
        return state.formOne.things[payload] +=1
      }else {
        return state.formOne.things[payload] = 1
      }

    },
    handleFormOneMinusThing(state: State,payload: any){
      if(state.formOne.things[payload] > 0){
        return state.formOne.things[payload] -=1
      }else {
        return state.formOne.things[payload] = 0
      }
    },

    handleTypeOfHouse(state:State, payload: any){
        return state.formOne.house.typeOfHouse = payload
    },
    handleRoomNumberPlus(state:State){
        return state.formOne.house.rooms +=1 
    },
    handleRoomNumberMinus(state:State){
        return state.formOne.house.rooms -=1 
     },
    handleFloorNumberPlus(state:State){
        return state.formOne.house.floors +=1
    },
    handleFloorNumberMinus(state:State){
        return state.formOne.house.floors -=1
    },
    handleElevator(state:State, payload:any){
      return state.formOne.house.elevator = payload
    },
    addDateToStore(state:State, payload: any){
      return state.formTwo.date = payload
    },
    pickTimeStore(state:State, payload:any){
      return state.formTwo.hour = payload

    },
    pickRateStore(state:State, payload:any){
      return state.formThree.rate = payload

    },
    loginUser(state:State, payload:any) {
      state.isUserAuthenticated = true;
      state.currentUser.token = payload.token;
      state.currentUser.refreshToken = payload.refreshToken;
    },
    
    loadUser(state:State, payload:any) {
      state.currentUser = payload;
    },

    logoutUser(state:State, payload:any) {
      state.isUserAuthenticated = false;
      state.currentUser.token = payload.token;
      state.currentUser.refreshToken = payload.refreshToken;
    },
    loadDestinationAddress(state: State, payload: any){
      state.formOne.pickUpAddressString = payload;
      const addressArray = payload.split(',')
      state.formOne.pickUpAddress.street = addressArray[0];
      state.formOne.pickUpAddress.number = Number(addressArray[1]);
      const postalCityArray = addressArray[2].trim().split(' ');
      state.formOne.pickUpAddress.postalCode = postalCityArray[0];
      state.formOne.pickUpAddress.city =postalCityArray[1]
    },
    pushToFavorites(state: State, payload: any){
      state.currentUser.favorites.push(payload)
    },
    popFromFavorites(state:State, payload: any){
      const updatedFavorites = state.currentUser.favorites.filter((favorite) => {
        return favorite._id !== payload._id
      })
      state.currentUser.favorites = updatedFavorites
    },
    createFinishedForm(state:State){
      function thingsObjectToArray() {
        const objectToConvert = state.formOne.things
        const newArrayOfThings = Object.entries(objectToConvert).map(
          ([key, value]) => ({
            thingName: key,
            amount: value,
          })
        );
        return newArrayOfThings;
      }
      const finishedFormObject = {
        userId:state.currentUser._id,
        pickUpAddress: state.formOne.pickUpAddress,
        destinationAddress: state.formOne.destinationAddress,
        house: state.formOne.house,
        thingsToMove: thingsObjectToArray(),
        refreshToken: state.currentUser.refreshToken
      }
      state.finishedForm = finishedFormObject
    },
    pushToTrips(state:State, payload: any){
      state.currentUser.trips.push(payload)
    },
    compileCart(state:State, payload: any){
      state.cart = payload
    },
    loadCartFromApi(state: State, payload: any){
      state.cartFromApi = payload
    }

  }

  export default mutations