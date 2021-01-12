import { createStore } from 'vuex'

// Stores
import auth from './modules/Auth.js'

export default createStore({
    modules: {
        auth
    }
})