import React, {Component} from 'react';
import fire from '../config/Fire';
import {Showdangnhap,Showdangky} from 'react'
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Đăng Nhập',
            loginBtn: true
        }
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    getAction = action => {
        if(action === 'reg'){
            this.setState({formTitle: 'Đăng ký tài khoản', loginBtn: false, fireErrors: ''});
        }else{
            this.setState({formTitle: 'Đăng Nhập', loginBtn: true, fireErrors: ''});
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){

        let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

        let submitBtn = this.state.loginBtn ? 
            (<input className="loginBtn" type="submit" onClick={this.login} value="Đăng nhập" />) : 
            (<input className="loginBtn" type="submit" onClick={this.register} value="Đăng ký" />);

        let login_register = this.state.loginBtn ?
            (<button className="btn btn-danger btn-sm" onClick={() => this.getAction('reg')}> Đăng ký ngay</button>) :
            (<button className="btn btn-primary btn-sm" onClick={() => this.getAction('login')}>Đăng nhập</button>);
            
        let dangky_dangnhap = this.state.loginBtn ?
            (<Showdangnhap>Bạn chưa có tài khoản ?</Showdangnhap>) :
            (<Showdangky>Bạn đã tài khoản ?</Showdangky>)


        return(

            //phần đăng nhập 
            <div className="form_block">
                <img src="/Imgs/logologin.png" alt="Logo" width="100%" height="300px" />
                <div id="title">{this.state.formTitle}</div>
                <div className="body">
                    {errorNotification}
            
                    <form>
                    <label for="loginEmail" id="long_nhap_email">Email</label>
                        <input type="text" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        name="email" />
                    <label for="loginPassword" id="long_nhap_pass">Mật khẩu</label>
                        <input type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        name="password" /><br/>

                        {submitBtn}
                      
                    </form><br/>
                    {dangky_dangnhap} {login_register}
                </div>
            </div>
        )
    }
}

export default Login;