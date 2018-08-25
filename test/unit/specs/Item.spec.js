import Vue from 'vue'
import Item from '@/components/Item'

describe("testing the item component", () => {
    let Constructor, vm, propsData
    describe("Pre Order Items", () => {
        beforeEach(() => {
            Constructor = Vue.extend(Item)
            propsData = {
                productType: "PreOrder"
            }
        })
        describe("Price of the item", ()=> {
            it('should render the price correctly', () => {
                propsData.price = 150
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.amount').textContent)
                  .toEqual('only 150 Baht')
            })
            it('When price is undefined', () => {
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.amount').textContent)
                  .toEqual('only undefined Baht')
            })
            it('When price is in decimals', () => {
                propsData.price=150.45
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.amount').textContent)
                  .toEqual('only 150.45 Baht')
            })
        })
    })
})