import { shallowMount } from '@vue/test-utils'
import NuxtLogo from '~/components/NuxtLogo/NuxtLogo.vue'
import ComponentTest from '~/components/ComponentTest/ComponentTest.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(NuxtLogo, {
      stubs: {
        ComponentTest
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
