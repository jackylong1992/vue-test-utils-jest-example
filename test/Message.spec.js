import { shallowMount } from '@vue/test-utils'
import Message from '@/components/Message.vue'

describe('Message', () => {
  // INFO: this test the rendering of PROP in component
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Message, {
      propsData: { msg }
    })
    expect(wrapper.text()).toBe(msg)
  })
  // INFO: this tets the rendering of default PROP in component
  it('renders default message if not passed a prop', () => {
    const defaultMessage = 'default message'
    const wrapper = shallowMount(Message)
    expect(wrapper.text()).toBe(defaultMessage)
  })
})
