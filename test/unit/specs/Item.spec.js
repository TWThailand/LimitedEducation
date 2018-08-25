import Vue from 'vue'
import Item from '@/components/Item'

describe('testing the item component', () => {
    let Constructor, vm, propsData
    describe('Pre Order Items', () => {
        beforeEach(() => {
            Constructor = Vue.extend(Item)
            propsData = {
                productType: "PreOrder"
            }
        })
        describe('Price of the item', ()=> {
            it('should render the price correctly', () => {
                propsData.price = 150
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.amount').textContent)
                    .toEqual('only 150 Baht')
            })
            it('When price is in decimals', () => {
                propsData.price=150.45
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.amount').textContent)
                    .toEqual('only 150.45 Baht')
            })
            it('When price is undefined', () => {
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.amount').textContent)
                    .toEqual('only undefined Baht')
            })
        })
        describe('Quantity of item left to purchase', () => {
            it('should render the quantity correctly', () => {
                propsData.quantity = 1000
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.count').textContent)
                    .toEqual('Only 1000 left')
            })
            it('When quantity is undefined', () => {
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.count').textContent)
                    .toEqual('Only  left')
            })
        })
    })
})