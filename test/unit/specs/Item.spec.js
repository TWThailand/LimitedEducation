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
        describe('Product name and brand', ()=> {
            it('renders the title of the product correctly',()=>{
                propsData.name = "Awesome Product"
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.title').textContent)
                    .toEqual("Awesome Product")
            })
            it('When product title is undefined',()=>{
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.title').textContent)
                    .toEqual("")
            })
            it('renders the brand-name of the product correctly',()=>{
                propsData.brand = "Awesome brand"
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.brand-name').textContent)
                    .toEqual("Awesome brand")
            })
            it('When product brand-name is undefined',()=>{
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.brand-name').textContent)
                    .toEqual("")
            })
        })
        //TODO : Find if there is a better way to test this
        describe('verify only the preorder button is shown ', () => {
            it('renders the preorder button',()=> {
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.preorder')!== null).toBe(true)
            })
            it('does not render the preorder button',()=> {
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.vote')!== null).toBe(false)
            })
        })
    })
    describe('Voting Items', () => {
        beforeEach(() => {
            Constructor = Vue.extend(Item)
            propsData = {
                productType: "Vote"
            }
        })
        describe('number of votes for the item', ()=> {
            it('renders the number of votes for the items correctly', ()=>{
                propsData.totalVote = 20
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.amount').textContent)
                    .toEqual('Total votes 20')
            })
            it('When votes in the data is undefined', ()=>{
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.amount').textContent)
                    .toEqual('Total votes undefined')
            })
        })
        //TODO : Find if there is a better way to test this
        describe('verify only the vote button is shown ', () => {
            it('renders the vote button',()=> {
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.vote')!== null).toBe(true)
            })
            it('does not render the preorder button',()=> {
                vm = new Constructor({
                    propsData
                }).$mount()
                expect(vm.$el.querySelector('.preorder')!== null).toBe(false)
            })
        })
    })
})