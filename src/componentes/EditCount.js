import React from 'react'
import {useState} from 'react'
import { Container, Form, Row, Col,  Button, ButtonToolbar } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {format} from 'date-fns'
import NumberFormat from 'react-number-format'
import {contaEdit} from '../redux/reducers/ContasReducer'
function EditCount(props){
    
    const [NomeCliente, setNomeCliente] = useState(props.NomeCliente)
    const Numero = props.ID;
    const [ValorCliente, setValorCliente] = useState(props.ValorCliente)
    const [CpfCliente, setCpfCliente] = useState(props.CpfCliente)
    const [TipoConta, setTipoConta] = useState(props.TipoConta)
    const [TelefoneCliente, setTelefone] = useState(props.TelefoneCliente)
    const [EmailCliente, setEmail] = useState()
    let dataEmissaoString = props.DataEmissao.split("/");
    let data = new Date(dataEmissaoString[2], dataEmissaoString[1]-1, dataEmissaoString[0])
    const [DataEmissao, setDataEmissao] = useState(format(new Date(data), 'yyyy-MM-dd'))
    let dataVencimentoString = props.DataVencimento.split("/")
    let dataVencimento = new Date(dataVencimentoString[2], dataVencimentoString[1]-1, dataVencimentoString[0])
    const [DataVencimento, setDataVencimento] = useState(format(new Date(dataVencimento), 'yyyy-MM-dd'))
    const [Historico, setHistorico] = useState(props.Historico);
    const [Conta, setConta] = useState([]);
    const contas = useSelector((state) => state.contas)
    const Dispatch = useDispatch();
    function Salvar(){
        Dispatch(
            contaEdit({
                ID: Numero,
                Cliente: NomeCliente,
                Valor: ValorCliente,
                DataEmissao: format(new Date(DataEmissao), 'dd/MM/yyyy'),
                DataVencimento: format(new Date(DataVencimento), 'dd/MM/yyyy'),
                Historico: Historico,
                
            })
            
        )
    }
    return(
        <container>
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
                       <Button onClick = {() => Salvar()}> Salvar</Button>
                    </Col>
                </Row>
            </Form>
        </container>

    )
}

export default EditCount;