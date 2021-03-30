import {createAsyncThunk, createEntityAdapter, createSelector, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCounts = createAsyncThunk("contas/fetchCounts", async () =>{
    const response = await axios.get('http://localhost:8080/api/teste')
    return  response.data
})
export const editCount = createAsyncThunk('contas/editCount', async(id, data) =>{
    
})
export const createAcount = createAsyncThunk("contas/createAcount", async( countData) =>{
    const count = countData;
    console.log('api call',countData)
    axios.post('http://localhost:8080/api/teste', {
        documento: count.documento,
        nome: count.nome,
        valor: count.valor,
        historico: count.historico,
        dataEmissao: count.dataEmissao,
        dataVencimento: count.dataVencimento

        
    })
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.log('teste',error)
    })    

})
const sliceName = 'contas'
const ContasReducer = createSlice({
    name: sliceName,
    initialState:{
        contas: [],
        status: null
    },
    reducers:{

    },
    extraReducers: {
        [fetchCounts.fulfilled]: (state, {payload}) =>{
            state. contas = payload
            state. status = 'success'
        },
        [fetchCounts.pending]: (state, action) =>{
            state. status = 'Loading'
            state. contas = [{}]
        },
        [createAcount.fulfilled]: (state, action) =>{
            state = action.payload
            console.log('action payload',action.payload)
        }
       
    }
})



export const {contaAdd} = ContasReducer.actions;
export const {contaEdit} = ContasReducer.actions;
export const {contaDelete} = ContasReducer.actions;
export default ContasReducer.reducer;