import { useEffect, useState } from 'react'
import React from 'react'
import {nanoid} from '@reduxjs/toolkit'
import {format} from 'date-fns'
import './Lancarconta.css'
import NumberFormat from 'react-number-format'
import { Container, Form, Row, Col,  Button,  } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {contaAdd} from '../redux/reducers/ContasReducer'
import 'bootstrap/dist/css/bootstrap.min.css';
function Lancarconta(){
    const [NomeCliente, setNomeCliente] = useState('')
    const [ValorCliente, setValorCliente] = useState('')
    const [CpfCliente, setCpfCliente] = useState('')
    const [TipoConta, setTipoConta] = useState('')
    const [TelefoneCliente, setTelefone] = useState('')
    const [EmailCliente, setEmail] = useState('')
    const [DataEmissao, setDataEmissao] = useState( format(new Date(), 'yyyy-MM-dd'))
    const [DataVencimento, setDataVencimento] = useState(format(new Date(), 'yyyy-MM-dd'))
    const [Historico, setHistorico] = useState('');
    const [Conta, setConta] = useState([]);
    const Numero = useSelector((state) => state.contas.length);
    const Dispatch = useDispatch();

    function SalvarDados(){
        if(NomeCliente && ValorCliente){
            Dispatch(
                contaAdd({
                    ID: Numero + 1,
                    Cliente: NomeCliente,
                    Valor: ValorCliente,
                    DataEmissao: format(new Date(DataEmissao), 'dd/MM/yyyy'),
                    DataVencimento: format(new Date(DataVencimento), 'dd/MM/yyyy'),
                    Historico: Historico,
                    

                })
            )
            LimparDados()    
        };

    }
    function SendConta(){
        LimparDados()
    }
    
    function LimparDados(){
        setNomeCliente('')
        setValorCliente('')
        setDataEmissao(format(new Date(), 'yyyy-MM-dd'))
        setDataVencimento(format(new Date(), 'yyyy-MM-dd'))
        setHistorico('')
        setCpfCliente('')
        setTipoConta('')
        setTelefone('')
        setEmail('')
        setConta([])

    }
    return(
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Numero</Form.Label>
                            <Form.Control value = {Numero} disabled = {true}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control as = 'select'>
                                <option> A pagar </option>
                                <option> A receber</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control value = {NomeCliente} onChange = {e => setNomeCliente(e.target.value)} placeholder = 'Nome do Cliente'>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>CPF</Form.Label>
                            <NumberFormat className = 'form-control' value = {CpfCliente}  format = '###.###.###-##'></NumberFormat>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Telefone</Form.Label>
                            <NumberFormat className = 'form-control' format = '(##)#####-####' value = {TelefoneCliente} type = 'tel' onChange = {e => setTelefone(e.target.value)}></NumberFormat>
                        </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control value = {EmailCliente} onChange = {e => setEmail(e.target.value)}  placeholder = 'Email' type = 'email'></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Valor R$</Form.Label>
                            <NumberFormat 
                                thousandSeparator = '.' 
                                decimalSeparator = ','
                                thousandsGroupStyle = 'thousand'
                                decimalScale = '2'
                                prefix = 'R$'
                                fixedDecimalScale = {true}
                                value = {ValorCliente} 
                                className = 'form-control'
                                onChange = {e => setValorCliente(e.target.value)} 
                                placeholder = 'Valor R$' type = 'value'>

                            </NumberFormat>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label> Data de Emissão</Form.Label>
                            <Form.Control value = {DataEmissao} onChange = { e => setDataEmissao(e.target.value)} type = 'date' value = {DataEmissao}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Data de Vencimento</Form.Label>
                            <Form.Control value = {DataVencimento} onChange = {e => setDataVencimento(e.target.value)} type = 'date' value = {DataVencimento}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Historico</Form.Label>
                            <Form.Control value = {Historico} onChange = {e => setHistorico(e.target.value)} placeholder = 'Descrição..' ></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col style = {{justifyContent:'center', alignItems:'center', display:'flex', margin:'10'}}>
                        <Button onClick = {() => SalvarDados()}>Salvar</Button>
                        <Button onClick = {() => LimparDados()}>Limpar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
    
}
export default Lancarconta;