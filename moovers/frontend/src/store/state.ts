import { State } from "@/types/interfaces"

const state: State =  {
    formOne:{
      house:{
        typeOfHouse:'',
        floors: 0,
        rooms: 0,
        elevator: false,

      },
      pickUpAddressString: '',
      pickUpAddress: {
        street: '',
        number: null,
        apt: '',
        postalCode: '',
        city: '',
      },
      destinationAddress: {
        street: '',
        number: null,
        apt: '',
        postalCode: '',
        city: '',
      },

      things:{
      },
      
    },
    formTwo:{
      date: '',
      hour: ''

    },
    formThree:{
      rate:'',

  },
    finishedForm:{

    },
    currentUser:localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData") || "") : "",
    isUserAuthenticated: localStorage.getItem("userData") ? true  :  false,
    cart:{
      user: '',
      trip:'',
      hours: 0,
      rate: 0,
      total: 0
    },
    cartFromApi:{
      user: '',
      trip:'',
      hours: 0,
      rate: 0,
      total: 0
    }
  }

  export default state as State