import React from "react";
import fb from '../fb'

export default class Login extends React.Component {

  state = { 
    login: { 
      email:'', 
      senha:'' 
    } 
  }

  handleInput = el => {
    let {login} = this.state
    login[el.target.name] = el.target.value
    this.setState({ login })
  }

  validar = () => {
    let {email, senha} = this.state.login
    if(email.trim().length === 0){
      return false
    }else if(senha.trim().length === 0){
      return false
    }
    return true
  }

  efetuarLogin = () => {
    let {email, senha} = this.state.login
    fb.auth().signInWithEmailAndPassword(email, senha).then(user=>{
      console.log('logado', user)
      // this.props.history.push('/')
    }).catch(error => console.log(`Error: ${error}`))
  }

  render() {
    let {email, senha} = this.state.login
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="card">
          <div className="card-header text-center">
            <h2 className="text-muted">Digite seus dados!</h2>
          </div>
          <div className="card-body">
            <div className="list-group">
              <input
                type="text"
                name="email"
                placeholder="Digite seu E-mail!"
                className="list-group-item"
                value={email}
                onChange={this.handleInput}
              />
              <input
                type="password"
                name="senha"
                placeholder="Digite sua senha!"
                className="list-group-item"
                value={senha}
                onChange={this.handleInput}
              />
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-success float-right"
              onClick={this.efetuarLogin}
              >Logar</button>
          </div>
        </div>
      </div>
    );
  }
}