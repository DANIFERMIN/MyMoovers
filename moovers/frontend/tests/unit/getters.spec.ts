import getters from '@/store/getters';
import { State } from '@/types/interfaces';
import state from '../unit/mockState';
let mockedState: State
describe('Given a getter', () => {
    beforeEach(() => {
        mockedState = state;
      });
  test('Get rate', () => {
    const result = getters.getFormThreeRate(mockedState)
    expect(result).toBe('60')
  })
  test('Get date', () => {
    const result = getters.getFormTwoDate(mockedState)
    expect(result).toBe('01-09-2022')
  })
  test('Get hour', () => {
    const result = getters.getFormTwoHour(mockedState)
    expect(result).toBe('8:00')
  })
  test('Get floors', () => {
    const result = getters.getFormOneFloors(mockedState)
    expect(result).toBe(3)
  })
  test('Get rooms', () => {
    const result = getters.getFormOneRooms(mockedState)
    expect(result).toBe(2)
  })
  test('Get house type', () => {
    const result = getters.getFormOneHouseType(mockedState)
    expect(result).toBe('house')
  })
  test('Get elevator', () => {
    const result = getters.getFormOneElevator(mockedState)
    expect(result).toBe(true)
  })
  test('Get pick up address in string', () => {
    const result = getters.getPickUpAddressString(mockedState)
    expect(result).toBe('Carrer Sant Antoni Maria Claret, 99, 08025 Barcelona')
  })
  test('Get current user', () => {
    const result = getters.getCurrentUser(mockedState)
    expect(result).toEqual({
        _id:"6138c42b1db50db02f6733c0",
        email:"kim@mail.com",
        favorites:[{street: "calle", number: 99, postalCode: "08025", city: "Barcelona", _id: '1111'}],
        firstName:"Daniela",
        lastName: "Fermin",
        password: "clave",
        refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMzhjNDJiMWRiNTBkYjAyZjY3MzNjMCIsImVtYWlsIjoia2ltQG1haWwuY29tIiwiZmlyc3ROYW1lIjoiS2ltIiwibGFzdE5hbWUiOiJMb3JlbnpvIn0sImlhdCI6MTYzMTUyNzY3NX0.ms-7YrAu7cBCebYxvsjOOWHhtvwAZ4tzgaDv8Gh6XuM",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMzhjNDJiMWRiNTBkYjAyZjY3MzNjMCIsImVtYWlsIjoia2ltQG1haWwuY29tIiwiZmlyc3ROYW1lIjoiS2ltIiwibGFzdE5hbWUiOiJMb3JlbnpvIn0sImlhdCI6MTYzMTUyNzY3NX0.ms-7YrAu7cBCebYxvsjOOWHhtvwAZ4tzgaDv8Gh6XuM",
        trips:[]
    })
  })
  test('Get things to move', () => {
    const result = getters.getThingsToMove(mockedState)
    expect(result).toEqual({
        fridge: 1,
        washer: 2
    })
  })
  test('Get trip', () => {
    const result = getters.getTrip(mockedState)
    expect(result).toEqual({})
  })
  test('Get cart', () => {
    const result = getters.getCart(mockedState)
    expect(result).toEqual({
        user: '"6138c42b1db50db02f6733c0"',
        trip:'"6138c42b1db50db02f6733c0"',
        hours: 4,
        rate: 60,
        total: 240
      })
  })
  test('Get cartFromApi', () => {
    const result = getters.getCartFromApi(mockedState)
    expect(result).toEqual({
        user: '"6138c42b1db50db02f6733c0"',
        trip:'"6138c42b1db50db02f6733c0"',
        hours: 4,
        rate: 60,
        total: 240
      })
  })

})