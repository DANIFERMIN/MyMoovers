import {State} from '../types/interfaces'

const getters = {
    getFormThreeRate(state: State){
    return state.formThree.rate
  },
    getFormTwoDate(state: State){
    return state.formTwo.date;
    },
    getFormTwoHour(state: State){
      return state.formTwo.hour;
    },
    getFormOneFloors(state:State){
      return state.formOne.house.floors
    },
    getFormOneRooms(state:State){
      return state.formOne.house.rooms
    },
    getFormOneHouseType(state:State){
      return state.formOne.house.typeOfHouse
    },
    getFormOneElevator(state:State){
      return state.formOne.house.elevator
    },
    getPickUpAddressString(state:State){
      return state.formOne.pickUpAddressString
    },
    getCurrentUser(state:State){
      return state.currentUser
    },
    getThingsToMove(state:State){
   return state.formOne.things
    },
    getTrip(state:State){
      return state.finishedForm
    },
    getCart(state:State){
      return state.cart
    },
    getCartFromApi(state:State){
        return state.cartFromApi
    }
  }

  export default getters