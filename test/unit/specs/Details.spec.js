import Vue from 'vue'
import Detail from '@/components/vote/Detail'

describe('Details.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Detail)
    const vm = new Constructor().$mount()
  })
})
