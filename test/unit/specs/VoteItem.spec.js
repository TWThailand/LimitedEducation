import { shallowMount, createLocalVue} from '@vue/test-utils'
import Vue from 'vue'
import Item from '@/components/VoteItem'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('testing the vote item component', () => {
    let Constructor, vm, propsData
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
                    .toEqual('Total votes ')
            })
            it('When click vote go to /vote and pass product title and vote count', ()=>{
              propsData.name = "Awesome product name"
              propsData.totalVote = 25

              const cmp = shallowMount(Item, {localVue, router, propsData})

              const spy = jest.fn()
              cmp.vm.$router.push = spy

              const el = cmp.find('.vote').trigger('click')
              expect(cmp.vm.$router.push).toHaveBeenCalledWith({name: 'vote', params: {name: 'Awesome product name', totalVote: 25}})
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
    })
})
