import { shallowMount } from '@vue/test-utils'
import MessageToggle from '@/components/MessageToggle.vue'
import Message from '@/components/Message.vue'

describe('MessageToggle.vue', () => {
  it('toggles msg passed to Message when button is clicked', () => {
    const wrapper = shallowMount(MessageToggle)
    const button = wrapper.find('#toggle-message')
    button.trigger('click')
    const MessageComponent = wrapper.find(Message)
    expect(MessageComponent.props()).toEqual({msg: 'message'})
    button.trigger('click')
    expect(MessageComponent.props()).toEqual({msg: 'toggled message'})
  })
  // INFO: this test the trigger of custom event
  it('trigger event when click to toggle button', () => {
    const wrapper = shallowMount(MessageToggle)
    const button = wrapper.find('#toggle-message')
    button.trigger('click')
    expect(wrapper.emitted('update:toggleMessage')).toHaveLength(1)
  })
})
