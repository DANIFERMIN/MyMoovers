import { mount } from '@vue/test-utils';
import PickHouse from '@/components/PickHouse.vue';
import state from './mockState';


describe('Given an PickHouse component', () => {
  test('Should mount PickHouse', () => {
    const handleTypeOfHouseAll= jest.fn()
    const handleRoomNumberAllPlus= jest.fn()
    const handleRoomNumberAllMinus= jest.fn()
    const handleFloorNumberAllPlus= jest.fn()
    const handlefloorNumberAllMinus= jest.fn()
    const handleElevatorAll= jest.fn()
    const getFormOneRooms = jest.fn()
    const getFormOneFloors = jest.fn()
    const getFormOneHouseType = jest.fn()
    const getFormOneElevator = jest.fn()
    const wrapper = mount(PickHouse, {
      data : () => {
        return  {
          selected: 'house',
          rooms: 1,
          floors: 3,
          elevator: true}
      },
      global: {
        mocks: {
          $store: {
            state,
            getters:{
              getFormOneRooms,
              getFormOneFloors,
              getFormOneHouseType,
              getFormOneElevator
            },
            mutations:{
                handleTypeOfHouseAll: jest.fn().mockReturnValue(state.formOne.house.typeOfHouse = 'house'),
                handleRoomNumberAllPlus: jest.fn().mockReturnValue(state.formOne.house.rooms = 1),
                handleRoomNumberAllMinus: jest.fn().mockReturnValue(state.formOne.house.rooms = 1),
                handleFloorNumberAllPlus: jest.fn().mockReturnValue(state.formOne.house.floors = 1),
                handlefloorNumberAllMinus: jest.fn().mockReturnValue(state.formOne.house.floors = 1)
            }
          },
          
          
          methods:{
          getFormOneRooms,
          getFormOneFloors,
          getFormOneHouseType,
          getFormOneElevator,
          handleTypeOfHouseAll,
          handleRoomNumberAllPlus,
          handleRoomNumberAllMinus,
          handleFloorNumberAllPlus,
          handlefloorNumberAllMinus,
          handleElevatorAll
          },
          commit: jest.fn(),
          dispatch: jest.fn(),
        },
      },
    });

    handlefloorNumberAllMinus()
    const button: any = wrapper.find("#button-test").trigger('click')
    console.log(button)
    expect(handlefloorNumberAllMinus).toHaveBeenCalled()
  });
});