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
        contaEdit(state, action){
            const {ID, Cliente, Valor, DataEmissao, DataVencimento, Historico} = action.payload;
            const existingCount = state.find((contas) => contas.ID === ID);
            if(existingCount){
                existingCount.Cliente = Cliente;
                existingCount.Valor = Valor;
                existingCount.DataEmissao = DataEmissao;
                existingCount.DataVencimento = DataVencimento;
                existingCount.Historico = Historico;
            
            }
        },
        contaDelete(state, action){
            const {ID} = action.payload;
            const deleteCount = state.find((contas) => contas.ID === ID )
            if(deleteCount){
                return state.filter((contas) => contas.ID !== ID)
            }

        }
    },
})

export const {contaAdd} = ContasReducer.actions;
export const {contaEdit} = ContasReducer.actions;
export const {contaDelete} = ContasReducer.actions;
export default ContasReducer.reducer;