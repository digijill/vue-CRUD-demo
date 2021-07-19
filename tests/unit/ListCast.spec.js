import { shallowMount } from '@vue/test-utils'
import ListCast from '@/components/ListCast.vue'

describe('ListCast.vue Test', () => {
  it('renders a table of users when component is created', () => {
    const wrapper = shallowMount(ListCast, {
      propsData: {
        cast: [
          {
            id: 1,
            name: 'Bill Murray',
            username: 'ahowitzerjr',
            email: 'ahowitzerjr@gmail.com'
          },
          {
            id: 2,
            name: 'Frances McDormond',
            username: 'lkrementz',
            email: 'lkrementz@gmail.com'
          },
          {
            id: 3,
            name: 'Tilda Swinton',
            username: 'jberensen',
            email: 'jberensen@gmail.com'
          }
        ]
      }
    })

    const tableColumns = wrapper.findAll('th')
    expect(tableColumns.length).toEqual(4)
    expect(tableColumns[0].text()).toMatch('User ID')
    expect(tableColumns[1].text()).toMatch('Name')
    expect(tableColumns[2].text()).toMatch('Username')
    expect(tableColumns[3].text()).toMatch('Email')

    const tableData = wrapper.findAll('td')
    expect(tableData.length).toEqual(12)
    expect(tableData[0].text()).toMatch('1')
    expect(tableData[1].text()).toMatch('Bill Murray')
    expect(tableData[2].text()).toMatch('ahowitzerjr')
    expect(tableData[3].text()).toMatch('ahowitzerjr@gmail.com')
    expect(tableData[4].text()).toMatch('2')
    expect(tableData[5].text()).toMatch('Frances McDormond')
    expect(tableData[6].text()).toMatch('lkrementz')
    expect(tableData[7].text()).toMatch('lkrementz@gmail.com')
  })
})
