import { shallowMount } from '@vue/test-utils'
import Navigation from '@/components/Navigation.vue'

describe('Navigation.vue', () => {
  it('renders navigation links when component is created', () => {
    const wrapper = shallowMount(Navigation)
    const items = wrapper.findAll('li')
    expect(items.length).toEqual(3)
    expect(items[0].text()).toMatch('Home')
    expect(items[1].text()).toMatch('About')
    expect(items[2].text()).toMatch('Contact')
  })
})
