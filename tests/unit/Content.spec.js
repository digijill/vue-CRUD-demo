import { shallowMount, flushPromises } from '@vue/test-utils'
import Content from '@/components/Content.vue'
import axios from 'axios'

// spy the console log
global.console.log = jest.fn()

// mocking
jest.mock('axios')

describe('Content.vue test with successful HTTP GET and POST', () => {
  let wrapper = null

  beforeEach(() => {
    const mockGetResponse = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz'
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv'
        }
      ]
    };

    const mockPostResponse = {
      data: [
        {
          id: 3,
          name: 'Bill',
          username: 'ahowitzer',
          email: 'ahowitzer@april.biz'
        }
      ]
    };

    axios.get.mockResolvedValue(mockGetResponse)
    axios.post.mockResolvedValue(mockPostResponse)
    wrapper = shallowMount(Content)
  })

  afterEach(() => {
    wrapper.unmount()
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('loads the user data when the component is created and mounted', async () => {
    // wait till the DOM updates
    await flushPromises()

    // check that heading text is rendered
    const heading = wrapper.findAll('h1')
    expect(heading.length).toEqual(1)
    expect(heading[0].text()).toMatch('Cast of The French Dispatch')

    // check that one call was made to axios.get()
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/users')

    // check that user data is properly set
    expect(wrapper.vm.cast.length).toEqual(2)
    expect(wrapper.vm.cast[0].name).toMatch('Leanne Graham')
    expect(wrapper.vm.cast[0].username).toMatch('Bret')
    expect(wrapper.vm.cast[0].email).toMatch('Sincere@april.biz')
    expect(wrapper.vm.cast[1].name).toMatch('Ervin Howell')
    expect(wrapper.vm.cast[1].username).toMatch('Antonette')
    expect(wrapper.vm.cast[1].email).toMatch('Shanna@melissa.tv')

    // check that the banner status message indicates success
    expect(wrapper.vm.messageToDisplay).toMatch('Success: loaded cast data')
    expect(wrapper.vm.messageType).toMatch('Success')
  })

  it('saves the new cast member data', async () => {
    var newCastMember3 = {
      id: 3,
      name: 'Bill',
      username: 'ahowitzer',
      email: 'ahowitzer@april.biz'
    }

    wrapper.vm.createMember(newCastMember3)
    await flushPromises()

    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(axios.post).toBeCalledWith('https://jsonplaceholder.typicode.com/users', newCastMember3)

    expect(wrapper.vm.cast.length).toEqual(3)
    expect(wrapper.vm.messageType).toMatch('Success')
    expect(wrapper.vm.messageToDisplay).toMatch('Success: member data was saved')
  })
})

describe('Content.vue test with successful HTTP GET and failed HTTP POST', () => {
  let wrapper = null

  beforeEach(() => {
    const mockGetResponse = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz'
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv'
        }
      ]
    };

    // successful GET response
    axios.get.mockResolvedValue(mockGetResponse)

    // failed POST response
    axios.post.mockRejectedValue(new Error('BAD CREATE'))

    // render the component
    wrapper = shallowMount(Content)
  });

  afterEach(() => {
    wrapper.unmount()
    jest.resetModules()
    jest.clearAllMocks()
  });

  it('does not save the new cast member data on failed HTTP POST call', async () => {
    var newCastMember3 = {
      id: 3,
      name: 'Bill',
      username: 'ahowitzer',
      email: 'ahowitzer@april.biz'
    }

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/users')
    expect(wrapper.vm.cast.length).toEqual(2)

    wrapper.vm.createMember(newCastMember3)

    await flushPromises()

    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(axios.post).toBeCalledWith('https://jsonplaceholder.typicode.com/users', newCastMember3)

    expect(wrapper.vm.cast.length).toEqual(2)
    expect(wrapper.vm.messageType).toMatch('Error')
    expect(wrapper.vm.messageToDisplay).toMatch('Error: unable to save cast member data')

  })
})

describe('Content.vue test with failed HTTP GET', () => {
  let wrapper = null

  beforeEach(() => {
    axios.get.mockRejectedValue(new Error('BAD REQUEST'))

    wrapper = shallowMount(Content)
  })

  afterEach(() => {
    wrapper.unmount()
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('loads no user data when the HTTP GET request fails', async () => {
    // wait until the DOM updates
    await flushPromises()

    // check that zero calls were made to axios.get()
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/users')

    // check that there is no user data loaded when the GET request fails
    expect(wrapper.vm.cast.length).toEqual(0)

    // check that the error was logged to the console (overkill, really)
    expect(console.log).toHaveBeenNthCalledWith(3, new Error('BAD REQUEST'))

    // check that the banner message indicates failure
    expect(wrapper.vm.messageToDisplay).toMatch('Error: unable to load cast data')
    expect(wrapper.vm.messageType).toMatch('Error')
  })
})

