// import Vue from 'vue'
import { createApp, VueElement , Vue} from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    user: null
};

const store = new Vuex.Store({
    state,
    getters:{
        user: (state) =>{
            return state.user;
        }
    },
    actions:{
        user(context, user){
             state.user = user
            context.commit('user',user)
       }
    },
    mutations:{
        user(state, user){
             state.user = user
        }
    }
});

export default store;
