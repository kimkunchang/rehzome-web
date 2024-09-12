import React from "react";
import '../css/Login.css';
import { NavLink } from "react-router-dom";

class Login extends React.Component {
    render() {
        return (
            <div>
                <form className="loginForm">
                    <div>
                        <h1 id='login_title'>로그인</h1>
                    </div>
                    <div>
                        <div className="input">
                            <input type="text" className="userId" id="userId" placeholder="아이디" autoFocus></input>
                            <input type="password" className="password" id="password" placeholder="비밀번호"></input>
                            <button id="loginBut">Login</button>
                        </div>
                    </div>
                    <div className="link">
                        <NavLink to="/findId">아이디 찾기</NavLink>
                        <span>&nbsp;|&nbsp;</span>
                        <NavLink to="/findPw">비밀번호 찾기</NavLink>
                        <span>&nbsp;|&nbsp;</span>
                        <NavLink to="/sign-up">회원가입</NavLink>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;