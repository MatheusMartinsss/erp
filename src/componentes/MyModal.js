
import React, { useEffect, useState } from 'react'
import { ModalTitle } from 'react-bootstrap'
import Modal from 'react-modal'
import { useSelector } from 'react-redux'
import ListaContas from './ListaContas'
import {FormText} from 'react-bootstrap'
import EditCount from './EditCount'

const MyModal = (props) => {
    const [modal, setModal] = useState(props.open)
    const [contaID, setcontaID] = useState(props.contaID)
    const conta = useSelector((state) => state.contas)
    const teste = conta.filter(c => c.ID === contaID)
  
    return(
      
           <Modal
            isOpen = {props.open}
            onRequestClose = {props.CloseModal}
            shouldCloseOnEsc = {false}
            shouldCloseOnOverlayClick = {true}
           >
               {teste.map(obj =>(
                   <EditCount ID = {obj.ID}  NomeCliente = {obj.Cliente} CpfCliente = {obj.CpfCliente} ValorCliente = {obj.Valor} DataEmissao = {obj.DataEmissao} DataVencimento = {obj.DataVencimento}
                   Historico = {obj.Historico} />
               ))}
              
           </Modal>
    
    )
    
}

export default MyModal;


