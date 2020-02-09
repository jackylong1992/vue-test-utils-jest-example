import App from '../src/App.vue'
import { shallowMount } from '@vue/test-utils'
import MessageToggle from '../src/components/MessageToggle.vue'

describe('App.vue', () => {
  test('hides Modal when Modal emits close-modal', () => {
    const wrapper = shallowMount(App)
    const defaultMessage = 'abc';
    wrapper.find(MessageToggle).vm.$emit('update:toggleMessage', defaultMessage)
    // INFO: could have multiple expect
    // INFO: this test the receiver of custom event
    expect(wrapper.find(".toggle-message").exists()).toBeTruthy()
    expect(wrapper.find(".toggle-message").text()).toBe(defaultMessage)
  })
})

