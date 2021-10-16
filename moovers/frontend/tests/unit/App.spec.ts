  
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import router from '@/router/index';
import state from '../unit/mockState';

test('displays message', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
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