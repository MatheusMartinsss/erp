import {createSlice} from '@reduxjs/toolkit'


const initialState =  [
{
    ID: 1,
    Cliente: 'User1',
    Valor: '1.500,00',
    DataEmissao: '25/11/2020',
    DataVencimento: '25/11/2020',
    Historico: 'Conta em aberto'
},{
    ID: 2,
    Cliente: 'User2',
    Valor: '1.400,00',
    DataEmissao: '25/11/2020',
    DataVencimento: '25/11/2020',
    Historico: 'Conta em aberto'
},{
    ID: 3,
    Cliente: 'User3',
    Valor: '1.300,00',
    DataEmissao: '25/11/2020',
    DataVencimento: '25/11/2020',
    Historico: 'Conta em aberto'
},{
    ID: 4,
    Cliente: 'User4',
    Valor: '1.200,00',
    DataEmissao: '25/11/2020',
    DataVencimento: '25/11/2020',
    Historico: 'Teste'
},]
const sliceName = 'contas'
const ContasReducer = createSlice({
    name: sliceName,
    initialState,
    reducers:{
        contaAdd(state, action){
            state.push(action.payload)
        },
    },
})

export const {contaAdd} = ContasReducer.actions;
export default ContasReducer.reducer;