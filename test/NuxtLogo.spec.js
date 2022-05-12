/*
テストを実施するコンポーネントやファイルのimport
テストで使用するためのmount関数
*/

import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'

/*
describeでテストの項目を記入
test関数に各テストの内容を記述

*/

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
