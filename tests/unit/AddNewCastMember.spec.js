import { shallowMount } from '@vue/test-utils'
import AddNewCastMember from '@/components/AddNewCastMember.vue'

let wrapper = null

// setup
beforeEach(() => {
  wrapper = shallowMount(AddNewCastMember)
})

// teardown
afterEach(() => {
  wrapper.unmount()
})

// unit test suite
describe('AddNewCastMember.vue Test', () => {
  it('initializes correct elements', () => {
    // check that heading text is rendered
    const heading = wrapper.findAll('h1')
    expect(heading.length).toEqual(1)
    expect(heading[0].text()).toMatch('Add new cast member:')
    // check that the three labels are created
    const label = wrapper.findAll('label')
    expect(label.length).toEqual(3)
    expect(label[0].text()).toMatch('Name:')
    expect(label[1].text()).toMatch('Username:')
    expect(label[2].text()).toMatch('Email:')
  })
  it('emits an event when a new member with valid data is added', async () => {
    // define input data
    const nameInput = wrapper.find('#newName')
    const usernameInput = wrapper.find('#newUserName')
    const emailInput = wrapper.find('#newEmail')

    await nameInput.setValue('NameSim')
    await usernameInput.setValue('UsernameSim')
    await emailInput.setValue('user@emailSim.com')
    await wrapper.find('button').trigger('click')

    const emittedEvent = wrapper.emitted('create-member')
    expect(emittedEvent).toHaveLength(1)
    expect(emittedEvent[0]).toEqual([
      {
        name: 'NameSim',
        username: 'UsernameSim',
        email: 'user@emailSim.com'
      }
    ])
    expect(nameInput.element.value).toBe('')
    expect(usernameInput.element.value).toBe('')
    expect(emailInput.element.value).toBe('')
  })
  it('does not emit an event when a new member without data is added', async () => {
    await wrapper.find('button').trigger('click')

    const emittedEvent = wrapper.emitted('create-member')
    expect(emittedEvent).toBeUndefined()
  })
})
