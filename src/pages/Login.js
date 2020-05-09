import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import callApi from './../utils/apiCaller';
// import { connect } from 'react-redux';
// import * as types from './../constants/actionTypes';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            u_email : '',
            u_password : '',
            isRedirect : false,
            login : false
        };
    }
    
    onHandleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        var check = false;
        var { u_email, u_password } = this.state;
        var users = [];
        callApi('users','GET',null).then(res => {
            users = res.data;
            if(users.length > 0 && users.some(user => user.u_email === u_email && user.u_password === u_password)) {
                check = true;
                var u = {u_email, u_password};
            }
            if(check){
                // localStorage.setItem('user',JSON.stringify(u));
                // var temp = JSON.parse(localStorage.getItem('user'));
                // console.log(temp.u_email);
                
                alert("Đăng nhập thành công!");
                callApi(`users/${u.u_email}`,'GET',null).then(res => {
                    var userlocal = res.data;
                    localStorage.setItem('user',JSON.stringify(userlocal));
                    var user = localStorage.setItem('user',JSON.stringify(userlocal));
                    if(user !== null){
                        this.setState({
                            isRedirect : true
                        });
                    }
                    
                });
            } else {
                alert("Email hoặc mật khẩu không chính xác!");
            }
        });
    }

    render() {
        var { isRedirect } = this.state;
        if(isRedirect) {
            return <Redirect  to="/matchfound"/>
            
        }
        
        return (
            <div>
                <section className="hero-section set-bg bg">
                    <div className="container-fluid ">
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-sm-6 col-xs-12 row-container">
                                <form onSubmit = {this.onHandleSubmit}>
                                    <h2 className="title">ĐĂNG NHẬP</h2>
                                    <div className="form-group">
                                        <label htmlFor="u_email">Email</label>
                                        <input
                                            type="u_email"
                                            className="form-control"
                                            id="u_email"
                                            placeholder="Nhập email"
                                            name="u_email"
                                            autoFocus
                                            onChange = {this.onHandleChange}
                                            />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="u_password">Mật khẩu</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="u_password"
                                            placeholder="Nhập mật khẩu"
                                            name="u_password"
                                            onChange = {this.onHandleChange}
                                            />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Đăng nhập
                                    </button>
                                    <div>
                                        Bạn chưa có tài khoản? <Link to="/regist">Đăng ký &gt;&gt;</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         isCheck : state.checkLogin
//     }
// }
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         login : () => {
//             var user = JSON.parse(localStorage.getItem('user'));
//             if(user !== null) {
//                 dispatch({type : types.CHECK_LOGIN})
//             }
//         }
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Login);
export default Login;