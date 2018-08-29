import Vue from 'vue'
import Detail from '@/components/vote/Detail'

describe('testing the product detail component', () => {
  let Constructor, propsData
  describe('Product Detail', () => {
      beforeEach(() => {
          Constructor = Vue.extend(Detail)
          propsData = {}
      })
      describe('product name and votes', () => {
        it('should display the product name', () => {
          propsData.name = "Awesome Product"
          let vm = new Constructor({
          propsData
        }).$mount()
        expect(vm.$el.querySelector('.title').textContent)
          .toEqual("Awesome Product")
        })
        it('should display the product name', () => {
          propsData.totalVote = 25
          let vm = new Constructor({
          propsData
        }).$mount()
        expect(vm.$el.querySelector('#vote-count').textContent)
          .toEqual("Already voted: 25 votes")
        })
  })
  })
})
