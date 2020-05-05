import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import callApi from './../utils/apiCaller';

class Regist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastname : '',
            firstname : '',
            phone : '',
            email : '',
            password : '',
            confpass : '',
            thunbar : '',
            description : '',
            isRedirect : false
        }
    }

    onHandleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = (target.type === 'checkbox' ? target.checked : target.value);
        this.setState({
            [name] : value
        })
    }
    
    onHandleSubmit =(e) => {
        e.preventDefault();
        var { lastname, firstname, phone, email, password, confpass, thunbar, description } = this.state;
        if(lastname !== '' && firstname !== '' && phone !== '' && email !== '' && password !== '' && thunbar !== '' && description !== '' && confpass === password){
            callApi('users','POST', {
                    u_firstName : firstname,
                    u_lastName : lastname,
                    u_email : email,
                    u_phone : phone,
                    u_password : password,
                    u_thunbar : thunbar.slice(12),
                    u_description : description
                });
            this.setState({
                isRedirect : true
            });
            alert("Đăng ký thành công!");
        } else {
            alert("Đăng ký thất bại! Vui lòng xem lại thông tin");
        }
        
    }

    render() {
        var { isRedirect } = this.state;
        if(isRedirect) {
            return <Redirect to="/createclub" />
        }

        return (
            <div>
                {
                /* regist start */
                }
                <section className="hero-section set-bg bg">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-sm-6 col-xs-12 row-container">
                                <form onSubmit = {this.onHandleSubmit} encType="multipart/form-data">
                                    <h2 className="title">Tạo tài khoản MIỄN PHÍ</h2>
                                    <div className="row form-group">
                                        <div className="col-xs-6 col-md-6">
                                            <input
                                                className="form-control"
                                                name="lastname"
                                                placeholder="Họ"
                                                autoFocus
                                                type="text"
                                                onChange = {this.onHandleChange}
                                                />
                                        </div>
                                        <div className="col-xs-6 col-md-6">
                                            <input
                                                className="form-control"
                                                name="firstname"
                                                placeholder="Tên"
                                                type="text"
                                                onChange = {this.onHandleChange}
                                                />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            name="phone"
                                            placeholder="Số điện thoại"
                                            type="text"
                                            onChange = {this.onHandleChange}
                                            />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            name="email"
                                            placeholder="Email"
                                            type="email"
                                            onChange = {this.onHandleChange}
                                            />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            placeholder="Mật khẩu"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            onChange = {this.onHandleChange}
                                            />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            placeholder="Nhập lại mật khẩu"
                                            className="form-control"
                                            name="confpass"
                                            id="confpass"
                                            onChange = {this.onHandleChange}
                                            />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
                                        Hình ảnh
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="inputEmail3"
                                                name="thunbar"
                                                onChange = {this.onHandleChange}
                                                />
                                        </div>
                                    </div>
                                    <div>
                                        <textarea
                                            name="description"
                                            rows={3}
                                            className="container"
                                            placeholder="Nhập mô tả bản thân..."
                                            onChange = {this.onHandleChange}
                                            />
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block" type="submit">
                                        Đăng ký
                                    </button>
                                    <br />
                                    <p>
                                        Bạn đã có tài khoản? <Link to="/login">Đăng nhập &gt;&gt;</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {
                /* regist end */
                }
            </div>
        );
    }
}

export default Regist;