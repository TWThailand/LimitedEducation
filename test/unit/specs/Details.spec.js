import Vue from 'vue'
import Detail from '@/components/vote/Detail'

describe('testing the product detail component', () => {
  let Constructor, propsData
  describe('Product Detail', () => {
      beforeEach(() => {
          Constructor = Vue.extend(Detail)
          propsData = {}
      })
      describe('product name', () => {
        it('should display the product name', () => {
          propsData.name = "Awesome Product"
          let vm = new Constructor({
          propsData
        }).$mount()
        expect(vm.$el.querySelector('.title').textContent)
          .toEqual("Awesome Product")
    })
  })
  })
})
