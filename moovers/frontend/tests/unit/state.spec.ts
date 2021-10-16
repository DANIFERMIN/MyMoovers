import state from '@/store/state';

test('State call', () => {
  expect(state).toEqual({
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
    currentUser:"",
    isUserAuthenticated: false,
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
  })
})