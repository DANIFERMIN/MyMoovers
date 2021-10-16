export default {
    formOne:{
      house:{
        typeOfHouse:'house',
        floors: 3,
        rooms: 2,
        elevator: true,

      },
      pickUpAddressString: 'Carrer Sant Antoni Maria Claret, 99, 08025 Barcelona',
      pickUpAddress: {
        street: 'Carrer Sant Antoni Maria Claret',
        number: 99,
        apt: '',
        postalCode: '08025',
        city: 'Barcelona',
      },
      destinationAddress: {
        street: 'Carrer Sant Antoni Maria Claret',
        number: 99,
        apt: '',
        postalCode: '08025',
        city: 'Barcelona',
      },

      things:{
          fridge: 1,
          washer: 2
      },
      
    },
    formTwo:{
      date: '01-09-2022',
      hour: '8:00'

    },
    formThree:{
      rate:'60',

  },
    finishedForm:{

    },
    currentUser:{
        _id:"6138c42b1db50db02f6733c0",
        email:"kim@mail.com",
        favorites:[{street: "calle", number: 99, postalCode: "08025", city: "Barcelona", _id: '1111'}],
        firstName:"Daniela",
        lastName: "Fermin",
        password: "clave",
        refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMzhjNDJiMWRiNTBkYjAyZjY3MzNjMCIsImVtYWlsIjoia2ltQG1haWwuY29tIiwiZmlyc3ROYW1lIjoiS2ltIiwibGFzdE5hbWUiOiJMb3JlbnpvIn0sImlhdCI6MTYzMTUyNzY3NX0.ms-7YrAu7cBCebYxvsjOOWHhtvwAZ4tzgaDv8Gh6XuM",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMzhjNDJiMWRiNTBkYjAyZjY3MzNjMCIsImVtYWlsIjoia2ltQG1haWwuY29tIiwiZmlyc3ROYW1lIjoiS2ltIiwibGFzdE5hbWUiOiJMb3JlbnpvIn0sImlhdCI6MTYzMTUyNzY3NX0.ms-7YrAu7cBCebYxvsjOOWHhtvwAZ4tzgaDv8Gh6XuM",
        trips:[]
    },
    isUserAuthenticated: true,
    cart:{
      user: '"6138c42b1db50db02f6733c0"',
      trip:'"6138c42b1db50db02f6733c0"',
      hours: 4,
      rate: 60,
      total: 240
    },
    cartFromApi:{
      user: '"6138c42b1db50db02f6733c0"',
      trip:'"6138c42b1db50db02f6733c0"',
      hours: 4,
      rate: 60,
      total: 240
    }
  }
