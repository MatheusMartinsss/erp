import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import ListaContas from './Contas'
const Routers = () =>{
    return (
        <Router>
            <Route exact path= "/" component = {ListaContas}></Route>
        </Router>
    )
}
export default Routers;