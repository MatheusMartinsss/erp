import {configureStore} from '@reduxjs/toolkit'
import ContasReducer from './reducers/ContasReducer'

export default configureStore({
    reducer:{
        contas: ContasReducer
    }
})