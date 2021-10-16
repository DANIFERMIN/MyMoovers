import { mount, shallowMount } from '@vue/test-utils';
import Times from '../../src/components/Time.vue';



describe('Given an Time component', () => {
  test('Should mount Time', () => {
    const wrapper = mount(Times, {
      global: {
        mocks: {
          $store: {
            state:{
                formTwo:{
                    hour:'8:00'
                }
            }
          },
          data: {
            hours: ["8:00", "9:00"],
            time: null,
            current: "9:00",
          },
          methods:{
            pickHour: jest.fn()
          },
          commit: jest.fn(),
          dispatch: jest.fn(),
        },
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
  test('calls pickHour when clicked', () => {
      const pickTimeStore= jest.fn()
      const pickHour= jest.fn()
      const getFormTwoHour= jest.fn()
    const wrapper = shallowMount(Times, {
        global: {
          mocks: {
            $store: {
                state:{
                    formTwo:{
                        hour:'8:00'
                    }
                },
                getters:{
                    getFormTwoHour
                },
                mutations:{
                    pickTimeStore
                },
            },
            data: {
              hours: ["8:00", "9:00"],
              time: null,
              current: "9:00",
            },
            methods:{
                pickHour,
                getFormTwoHour,
                pickTimeStore
            },
            commit: jest.fn(),
            dispatch: jest.fn(),
          },
        },
      });
    const picked = wrapper.find("button")
    console.log(picked.html())
    picked.trigger('click')
    wrapper.vm.pickHour()
  
    expect(pickHour).toHaveBeenCalled()
  })
});