interface User {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  trips: [string],
  favorites: Array<Favorite>
}
interface State {
    formOne: {
        house:{
            typeOfHouse:string,
            floors: any,
            rooms: any,
            elevator: boolean
        },
        pickUpAddressString: string,
        pickUpAddress: {
            street: any,
            number: any,
            apt: any,
            postalCode: any,
            city: any,
        },
        destinationAddress: {
            street:any,           
            number:any,
            apt:any,
            postalCode:any,
            city:any,
        },
        things:any,
    }
        
    formTwo:{
        date:string,
        hour:string
    },
    formThree:{
        rate: string

    },
    finishedForm:{},
    currentUser:UserWithToken,
    isUserAuthenticated: boolean,
    cart: {
      user: string,
        trip:string,
        hours: number,
        rate: number,
        total: number
    },
    cartFromApi: {
      user: string,
        trip:string,
        hours: number,
        rate: number,
        total: number
    }
}

interface Favorite{
    street: string,
    number: number,
    postalCode: string,
    city: string,
    _id:string
}

 
  interface UserRegisterData {
    name: string,
    profession: string,
    city: string,
    email: string,
    password: string,
  }
  interface UserLoginData {
    email: string,
    password: string,
  }
  
  interface UserWithToken {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    trips: string[],
    favorites:Favorite[]
    token: string,
    refreshToken: string,
  
  }

  interface AddressData{
    street: string,
    number: number,
    postalCode: string,
    city: string,
    _id:string
    userId: string,
    refreshToken: string
}
  

export {State, Favorite, User, UserRegisterData, UserLoginData, UserWithToken,  AddressData}