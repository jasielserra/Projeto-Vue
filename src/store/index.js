import { createStore } from "vuex";

export default createStore({
    state:{
        user: {
            first_name:'Albernaz',
            last_name:'Moreira',
            email: 'albernaz@decampomaior.com.br'
        },
        products: [],
        cart: [],
    },
    getters: {

    },
    mutations: {
        storeUser(state, data){
            state.user = data;
        },
    },
    actions:{

    },
    modules:{

    }
})