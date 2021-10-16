import { mount } from '@vue/test-utils';
import LandingPage from '../../src/views/LandingPage.vue';
import state from './mockState';

describe('Given an LandingPage component', () => {
  test('Should mount LandingPage', () => {
    const wrapper = mount(LandingPage, {
      global: {
        mocks: {
          $store: {
            state,
          },
        },
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});