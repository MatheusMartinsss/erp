import 'bootstrap/dist/css/bootstrap.min.css'
import { Container,  Table,  FormCheck, Button, Modal } from 'react-bootstrap';
import {useEffect, useState} from 'react'
import './ListaContas.css'
import { useSelector, useDispatch } from 'react-redux';
import {contaDelete, selectCounts, allCounts, fetchCounts} from '../redux/reducers/ContasReducer'
import LancarConta from './MyModal'
import axios from 'axios'

function ListaContas (props){
    const [editarConta, setEditarConta] = useState(false)
    const [contaEdit, setContaEdit] = useState()
    const Contas = useSelector((state) => state.contas.contas)
    const [contasSelected, setSelected] = useState([])
    const  Dispatch = useDispatch()
    useEffect(() =>{
        Dispatch(fetchCounts())
    },[Dispatch]) 
    console.log('resultado', Contas)
    function cSelect(e){
        var Teste = contasSelected.findIndex(obj => obj.ID === e )
        if(Teste !== -1){
            setSelected(contasSelected.filter(a=> a.ID !== e))
            
        } else {
            setSelected([...contasSelected, {ID: e}])
            console.log(' Adicionou um novo valor',contasSelected)
        }    
    }
    function Editar(e){
       setEditarConta(!editarConta)
       setContaEdit(e)  
    }
   
    function CloseModal(){
        setEditarConta(false)
    }
    function Excluir(e){
        Dispatch(
            contaDelete({
                ID: e
            })
        )     
    }
    return (
        <Container  fluid>
            {editarConta && <LancarConta open = {editarConta} contaID = {contaEdit} CloseModal = {CloseModal} />}
            <Table bordered = {true} >
                <thead className = 'Table-Contas-Head'>
                    <tr>
                        <th>Documento</th>
                        <th>Cliente</th>
                        <th>Valor</th>
                        <th>Data de Emissao</th>
                        <th>Data de Vencimento</th>
                        <th>Historico</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {Contas.map(obj =>(
                        <tr className = "Table-Contas-Body" key = {obj._id}>
                            <th>{obj.Documento}</th>
                            <th>{obj.Nome}</th>
                            <th>{obj.Valor}</th>
                            <th>{obj.DataEmissao}</th>
                            <th>{obj.DataVencimento}</th>
                            <th>{obj.Historico}</th> 
                        </tr>
                    ))}
                </tbody>

            </Table>    
        
        </Container>
    )
}    


export default ListaContas;