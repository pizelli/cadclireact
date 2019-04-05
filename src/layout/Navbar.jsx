import React from 'react'

import Icon from '../components/Icon'

export default props => {

    let sair = e => {
        e.preventDefault()
        alert("Saindo!")
    }

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/"><strong>Cadastro de Clientes</strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/clientes">Clientes <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/produtos">Produtos</a>
                        </li>
                    </ul>
                    <div>
                        <a href="#" onClick={sair}><Icon icon={"sign-out"} /> Sair</a>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}