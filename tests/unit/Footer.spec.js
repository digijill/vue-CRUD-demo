import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue Test', () => {
  it('renders message when component is created', () => {
    const wrapper = shallowMount(Footer, {
      props: {
        footerMessage: 'A Vue 3 Story'
      }
    })

    expect(wrapper.text()).toMatch('A Vue 3 Story')
  })
})
