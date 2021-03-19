import { te } from 'date-fns/locale'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row,Button, ButtonToolbar } from 'react-bootstrap'
import Modal from 'react-modal'
import LancarConta from '../componentes/Lancarconta'
import ListaContas from '../componentes/ListaContas'
import './Contas.css'

function Contas(){
    const [ModalConta, setModalConta] = useState(false)
    const [DataFilto, setDataFiltro] = useState( new Date())
    useEffect(() =>{
        console.log(ModalConta)
    }, [ModalConta])
    function Open(){
        setModalConta(!ModalConta)
    }
    return(
        <Container fluid = "md">
            <Row>
                <Col xs = {5}>
                    <ButtonToolbar>
                        <Button onClick = { () => Open()}> Nova Conta + </Button>
                    </ButtonToolbar>
                </Col>
            </Row>
                <Row>
                    <ListaContas/> 
                </Row>
            <Modal
                isOpen = {ModalConta}
                shouldCloseOnEsc = {true}
                onRequestClose = {() => Open()}
                
            >
                <LancarConta />
            </Modal>    
            </Container>
    )    
}
export default Contas;
