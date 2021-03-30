import { te } from 'date-fns/locale'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LancarConta from '../componentes/Lancarconta'
import ListaContas from '../componentes/ListaContas'
import {useDispatch} from 'react-redux'
import './Contas.css'

function Contas(){
    const [DataFilto, setDataFiltro] = useState( new Date())
    return(
        <Container fluid = "md">
            <Row>
                <Col xs = {5}>
                    <LancarConta />
                </Col>
            </Row>
            <Row>
                <ListaContas/> 
            </Row>
        </Container>
    )    
}
export default Contas;
