import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Table, InputGroup, FormCheck, ButtonToolbar, Button } from 'react-bootstrap';
import {useEffect, useState} from 'react'
import './ListaContas.css'
import { useSelector } from 'react-redux';
function ListaContas (){
    const Contas = useSelector((state) => state.contas)
        
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
    useEffect(() =>{
        console.log( 'Use effect result',contasSelected)
    }, [contasSelected])
    return (
        <Container  fluid>
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
                        </tr>
                    ))} 
                </tbody>
               </Table>
              

        </Container>
    )
}

export default ListaContas;