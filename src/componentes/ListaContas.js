import 'bootstrap/dist/css/bootstrap.min.css'
import { Container,  Table,  FormCheck, Button, Modal } from 'react-bootstrap';
import {useEffect, useState} from 'react'
import './ListaContas.css'
import { useSelector, useDispatch } from 'react-redux';
import {contaDelete} from '../redux/reducers/ContasReducer'
import LancarConta from './MyModal'

function ListaContas (props){
    const Contas = useSelector((state) => state.contas)
    const [editarConta, setEditarConta] = useState(false)
    const [contaEdit, setContaEdit] = useState()
    const Dispatch = useDispatch()
        
    const [contasSelected, setSelected] = useState([])
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
                        <th>#</th>
                        <th>Documento</th>
                        <th>Cliente</th>
                        <th>Valor</th>
                        <th>Data de Emissao</th>
                        <th>Data de Vencimento</th>
                        <th>Historico</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody className = 'Table-Contas-Body'>
                    {Contas.map( e =>(
                        <tr key = {e.ID}>
                            <FormCheck id = {e.ID}  type = "checkbox" onChange = { () => cSelect(e.ID)}/>
                            <td>{e.ID}</td>
                            <td>{e.Cliente}</td>
                            <td>{e.Valor}</td>
                            <td>{e.DataEmissao}</td>
                            <td>{e.DataVencimento}</td>
                            <td>{e.Historico}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" onClick = {() => Excluir(e.ID)} class="btn btn-danger">Excluir</button>
                                    <button type="button" onClick = { () => Editar(e.ID)} class="btn btn-warning">Editar</button>
                                </div>
                                </td>
                            </tr>
                        ))} 
                    </tbody>
            </Table>    
        
        </Container>
    )
}    


export default ListaContas;