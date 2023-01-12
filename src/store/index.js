import { createStore } from "vuex";

export default createStore({
    state:{
        user: {
            first_name:'Albernaz',
            last_name:'Moreira',
            email: 'albernaz@decampomaior.com.br'
        },
        products: [
            {
              id: 1,
              name:'Bola',
              price: 100
            },
            {
              id: 2,
              name:'Chuteira',
              price: 200
            },
            {
              id: 3,
              name:'Meião',
              price: 300
            },
        ],
        cart: [],
    },
    getters: {
        total(state){
            return state.cart.reduce((total, item) => total += item.price, 0)
        },
    },
    mutations: {
        storeUser(state, data){
            state.user = data;
        },

        addProduct(state, data) {
            state.cart.push(data)
        },

        removeProduct(state, id){
            const idx = state.cart.findIndex(o => o.id === id)
            state.cart.splice(idx, 1);
        },

    },
    actions:{

    },
    modules:{

    }
})