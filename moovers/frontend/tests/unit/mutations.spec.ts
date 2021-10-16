import mutations from '../../src/store/mutations';
import state from './mockStateEmpty';

let mockedState: any;

describe('Given a mutation', () => {
    beforeEach(() => {
        mockedState = state;
      });
      test('Should change the things object in state', () => {
        const payload = "Sofa"
        mutations.handleFormOnePlusThing(mockedState, payload);
        expect(state.formOne.things).toStrictEqual({Sofa: 1})
    });
    test('Should change the things object in state', () => {
        const payload = "fridge"
        mutations.handleFormOneMinusThing(mockedState, payload);
        expect(state.formOne.things).toStrictEqual({ Sofa: 1, fridge: 0})
    });
    test('Should type of house in state be building', () => {
        const payload = "building"
        mutations.handleTypeOfHouse(mockedState, payload);
        expect(state.formOne.house.typeOfHouse).toBe("building")
    })
    test('Should rooms in state be 1', () => {
        mutations.handleRoomNumberPlus(mockedState);
        expect(state.formOne.house.rooms).toBe(1)
    })
    test('Should rooms in state be 0', () => {
        mutations.handleRoomNumberMinus(mockedState);
        expect(state.formOne.house.rooms).toBe(0)
    })
    test('Should floors in state be 1', () => {
        mutations.handleFloorNumberPlus(mockedState);
        expect(state.formOne.house.floors).toBe(1)
    })
    test('Should floors in state be 0', () => {
        mutations.handleFloorNumberMinus(mockedState);
        expect(state.formOne.house.floors).toBe(0)
    })
    test('Elevator in state should be true', () => {
        const payload = true
        mutations.handleElevator(mockedState, payload);
        expect(state.formOne.house.elevator).toBe(true)
    })
    test('Date in store should be 01-09-1984', () => {
        const payload = '01-09-1984'
        mutations.addDateToStore(mockedState, payload);
        expect(state.formTwo.date).toBe('01-09-1984')
    })
    test('Hour in store should be 8:00', () => {
        const payload = "8:00"
        mutations.pickTimeStore(mockedState, payload);
        expect(state.formTwo.hour).toBe('8:00')
    })
    test('Rate in store should be 60', () => {
        const payload = '60'
        mutations.pickRateStore(mockedState, payload);
        expect(state.formThree.rate).toBe('60')
    })
    test('isUserAuthenticated should be true in store',() =>{
        const payload = {
            token: '1111111',
            refreshToken:'11111'
        }
        mutations.loginUser(mockedState, payload);
        expect(state.isUserAuthenticated).toBe(true)
    })
    test('currentUser in store should be an empty object',() =>{
        const payload = {
        }
        mutations.loadUser(mockedState, payload);
        expect(state.currentUser).toStrictEqual({})
    })
    test('isUserAuthenticated should be false in store',() =>{
        const payload = {
            token: '1111111',
            refreshToken:'11111'
        }
        mutations.logoutUser(mockedState, payload);
        expect(state.isUserAuthenticated).toBe(false)
    })
    test('pickUpAddressString should be equal to payload',() =>{
        const payload = "Carrer Sant Antoni, 99, 08025 Barcelona"
        mutations.loadDestinationAddress(mockedState, payload);
        expect(state.formOne.pickUpAddressString).toBe("Carrer Sant Antoni, 99, 08025 Barcelona")
    })
   
    test('street should be equal to addressArray in 0',() =>{
        const payload = "Carrer Sant Antoni, 99, 08025 Barcelona"
        const addressArray = payload.split(',')
        mutations.loadDestinationAddress(mockedState, payload);
        expect(state.formOne.pickUpAddress.street).toBe(addressArray[0])
    })
    test('number should be equal to addressArray in 1',() =>{
        const payload = "Carrer Sant Antoni, 99, 08025 Barcelona"
        const addressArray = payload.split(',')
        mutations.loadDestinationAddress(mockedState, payload);
        expect(state.formOne.pickUpAddress.number).toBe(Number(addressArray[1]))
    })
    test('postalCode should be equal to postalCityArray in 0',() =>{
        const payload = "Carrer Sant Antoni, 99, 08025 Barcelona"
        const addressArray = payload.split(',')
        const postalCityArray = addressArray[2].trim().split(' ')
        mutations.loadDestinationAddress(mockedState, payload);
        expect(state.formOne.pickUpAddress.postalCode).toBe(postalCityArray[0])
    })
    test('city should be equal to postalCityArray in 1',() =>{
        const payload = "Carrer Sant Antoni, 99, 08025 Barcelona"
        const addressArray = payload.split(',')
        const postalCityArray = addressArray[2].trim().split(' ')
        mutations.loadDestinationAddress(mockedState, payload);
        expect(state.formOne.pickUpAddress.city).toBe(postalCityArray[1])
    })
    test('favorites should have the new address pushed',() =>{
        const payload = {}
state.currentUser.favorites = []
        mutations.pushToFavorites(mockedState, payload);
        expect(state.currentUser.favorites).toStrictEqual([{}])
    })
    test('favorites should be an empty array',() =>{
        const payload = {_id: '111111'}
        state.currentUser.favorites = []
        mutations.popFromFavorites(mockedState, payload);
        expect(state.currentUser.favorites).toStrictEqual([])
    })
    test('the compiled finished form should be equal to the finishedFormObject', () =>{
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
        mutations.createFinishedForm(mockedState)
        expect(state.finishedForm).toStrictEqual({
            userId:state.currentUser._id,
            pickUpAddress: state.formOne.pickUpAddress,
            destinationAddress: state.formOne.destinationAddress,
            house: state.formOne.house,
            thingsToMove: thingsObjectToArray(),
            refreshToken: state.currentUser.refreshToken
        })
    })
    test('trips should have the new trip pushed',() =>{
        const payload = {}
        state.currentUser.trips = []
        mutations.pushToTrips(mockedState, payload);
        expect(state.currentUser.favorites).toStrictEqual([])
    })
    test('cart should be equal to payload',() =>{
        const payload = {}
        mutations.compileCart(mockedState, payload);
        expect(state.cart).toStrictEqual({})
    })
    test('cartFromApi should be equal to payload',() =>{
        const payload = {}
        mutations.loadCartFromApi(mockedState, payload);
        expect(state.cartFromApi).toStrictEqual({})
    })


})

