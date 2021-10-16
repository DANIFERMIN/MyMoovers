import { mount } from '@vue/test-utils';
import ThingsToMove from '../../src/components/ThingsToMove.vue';
import state from './mockState';
import Things from '@/assets/constants/ListThings'


describe('Given an ThingsToMove component', () => {
  test('Should mount ThingsToMove', () => {
    const wrapper = mount(ThingsToMove, {
      global: {
        mocks: {
          $store: {
            state,
          },
          data: {
            thing:{name: undefined, amount: 0 },
            things: [{name: 'Fridge', amount: 1 }],
            amount: 0
          },
          methods:{
            handleMinusThing: jest.fn(),
            handlePlusThing: jest.fn()
          },
          commit: jest.fn(),
          dispatch: jest.fn(),
        },
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
  test('calls handlePlusThing when clicked', () => {
    const handleMinusThing = jest.fn()
    const wrapper = mount(ThingsToMove, {
      global: {
        mocks: {
          $store: {
            state,
          },
          data: {
            thing:{name: null, amount: 0 },
            things: [{name: 'Fridge', amount: 1 }],
            amount: 0
          },
          methods:{
            handleMinusThing,
            handlePlusThing: jest.fn()
          }
        },
      },
    });
    const minus = wrapper.get("#minus")
    minus.trigger('click')
    handleMinusThing()
    
  
    expect(handleMinusThing).toHaveBeenCalled()
  })
});