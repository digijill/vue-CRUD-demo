import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue Test', () => {
  it('renders message when component is created', () => {
    const wrapper = shallowMount(Header, {
      props: {
        title: 'Vue CRUD Demo'
      }
    })

    expect(wrapper.text()).toMatch('Vue CRUD Demo')
  })
})
