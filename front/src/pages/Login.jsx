import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
const baseUrl="http://localhost:3002/Usuarios";
const cookies = new Cookies();

class Login extends Component {
    state={
        form:{
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

    iniciarSesion=async()=>{
        if (this.state.form.username =="" || this.state.form.password ==""){
            console.log("VACIO")  
        }else{
        await axios.get(baseUrl, {params: {username: this.state.form.username, passwoord: this.state.form.password}})
        .then(response=>{
            console.log(response.data)
            return response.data;  
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('primer_apellido', respuesta.primer_apellido, {path: "/"});
                cookies.set('segundo_apellido', respuesta.segundo_apellido, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.primer_apellido}`);
                window.location.href="./menu";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }
    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./menu";
        }
    }
    
   
    render() {
        return (
    <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
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
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
            <Link to="/registro" type="button" className="btn btn-primary">
            Crear Cuenta
          </Link>
          </div>
        </div>
      </div>
        );
    }
}

export default Login;