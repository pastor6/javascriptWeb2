import React, { Component } from 'react';

import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const baseUrl="http://localhost:3002/Usuarios";


class Login extends Component {
       
    state={
        form:{
            primer_apellido:'',
            segundo_apellido:'',
            nombre:'',
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
        console.log(this.state.form);

    }


 registrarUsuario=async()=>{
   // if (this.state.form.username == username ){
     //   console.log("iguales")  
    //}

    if (this.state.form.username =="" || this.state.form.password ==""){
        console.log("VACIO")  

    }else{
    let usuario = {
    
     primer_apellido: this.state.form.primer_apellido,
     segundo_apellido: this.state.form.segundo_apellido,
     nombre: this.state.form.nombre,
     username: this.state.form.username,
     passwoord: this.state.form.password,


    };
    await axios.post(baseUrl, usuario);
    console.log(usuario.data);
    window.location.href="./menu";
  }
} 


     render() {
        return (
    <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Primer apellido: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="primer_apellido"
              onChange={this.handleChange}
            />
            <br />
            <label>Segundo apellido: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="segundo_apellido"
              onChange={this.handleChange}
            />
            <br />
            <label>Nombre: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="nombre"
              onChange={this.handleChange}
            />
            <br />
            <label>Nombre de Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.registrarUsuario()}>Registrar</button>
          </div>
        </div>
      </div>
        );
    }
}

export default Login;