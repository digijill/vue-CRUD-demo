import { shallowMount } from '@vue/test-utils'
import Banner from '@/components/Banner.vue'

describe('Banner.vue test', () => {
  let wrapper = null

  // setup
  beforeEach(() => {
    wrapper = shallowMount(Banner, {
      propsData: {
        bannerMessage: '',
        bannerType: ''
      }
    })
  })

  // teardown
  afterEach(() => {
    wrapper.unmount()
  })

  // check initialization
  it('initializes the correct elements', () => {
    const banner = wrapper.find('#bannerMsg')

    expect(banner.text()).toMatch('')
    expect(banner.isVisible()).toBe(false)
    expect(banner.attributes().style).toMatch('background-color: blue;')
  })

  // check messages (Error, Success, Info)
  it('initializes with error message', async () => {
    await wrapper.setProps({
      bannerMessage: 'Banner message 123',
      bannerType: 'Error'
    })

    const banner = wrapper.find('#bannerMsg')
    expect(banner.text()).toMatch('Banner message 123')
    expect(banner.isVisible()).toBe(true)
    expect(banner.attributes().style).toMatch('background-color: red;')
  })

  it('initializes with success message', async () => {
    await wrapper.setProps({
      bannerMessage: 'Banner message 456',
      bannerType: 'Success'
    })

    const banner = wrapper.find('#bannerMsg')
    expect(banner.text()).toMatch('Banner message 456')
    expect(banner.isVisible()).toBe(true)
    expect(banner.attributes().style).toMatch('background-color: green')
  })

  it('initializes with info message', async () => {
    await wrapper.setProps({
      bannerMessage: 'Banner Message 789',
      bannerType: 'Info'
    })

    const banner = wrapper.find('#bannerMsg')
    expect(banner.text()).toMatch('Banner Message 789')
    expect(banner.isVisible()).toBe(true)
    expect(banner.attributes().style).toMatch('background-color: blue')
  })

  // check clear button action
  it('emits event when clear button is clicked', async () => {
    await wrapper.setProps({
      bannerMessage: 'Banner Message 123',
      bannerType: 'Error'
    })

    await wrapper.find('span').trigger('click')

    expect(wrapper.emitted('clear-banner')).toBeTruthy()
    expect(wrapper.emitted('clear-banner').length).toBe(1)
  })
})
