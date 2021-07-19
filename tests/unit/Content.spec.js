import { shallowMount } from '@vue/test-utils'
import Content from '@/components/Content.vue'

describe('Content.vue', () => {
  it('renders message when component is created', () => {
    const wrapper = shallowMount(Content)

    const heading = wrapper.findAll('h1')
    expect(heading.length).toEqual(1)
    expect(heading[0].text()).toMatch('Cast of The French Dispatch')
  })
})
