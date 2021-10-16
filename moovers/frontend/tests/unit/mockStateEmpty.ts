export default {
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
        number: 0,
        apt: '',
        postalCode: '',
        city: '',
      },
      destinationAddress: {
        street: '',
        number: 0,
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
    currentUser:{
        _id:"6138c42b1db50db02f6733c0",
        email:"kim@mail.com",
        favorites:[],
        firstName:"Daniela",
        lastName: "Fermin",
        password: "clave",
        refreshToken: "",
        token:"",
        trips:[]
    },
    isUserAuthenticated: true,
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
      total:0 
    }
  }
