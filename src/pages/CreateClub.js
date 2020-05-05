import React from 'react';
import { Redirect } from 'react-router-dom';
import callApi from '../utils/apiCaller';

class CreateClub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName : '',
            address : 'default',
            Level : 'default',
            thunbar : '',
            timeOften : 'Thứ 2',
            stadium : '',
            txtYoungest : '',
            txtOldest : '',
            txtDesc : '',
            u_id : 1,
            isRedirect : false
        }
        this.fileInput = React.createRef();
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
        var { txtName, address, Level, thunbar,timeOften, stadium, txtYoungest, txtOldest, txtDesc, u_id } = this.state;
        if(txtName !== '' && address !== 'default' && Level !== 'default' && thunbar !== '' && txtYoungest !== '' && txtOldest !== '' && txtDesc !== ''){
            callApi('clubs','POST',{
                c_clubName : txtName,
                c_level : Level,
                c_logo : thunbar.slice(12),
                c_timeOften : timeOften,
                c_homeStadium : stadium,
                c_address : address,
                c_youngest : txtYoungest,
                c_oldest : txtOldest,
                c_description : txtDesc,
                u_id : u_id
            });
            this.setState({
                isRedirect : true
            });
            alert("Tạo đội thành công! Mời bạn đăng nhập");
        } else {
            alert("Tạo đội thất bại! Vui lòng xem lại thông tin");
        }
        
        
    }

    render() {
        var { isRedirect } = this.state;
        if(isRedirect){
            return <Redirect to="/login"/> 
        }

        return (
            <section className="hero-section set-bg">
                <div className="container">
                    <h2 className="App">Mời bạn tạo đội bóng của bạn</h2>
                    <br/>
                <form onSubmit = {this.onHandleSubmit}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Tên đội</label>
                    <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập tên đội bóng của bạn"
                        name="txtName"
                        onChange = {this.onHandleChange}
                        value={this.state.txtName}
                    />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Trình độ</label>
                    <div className="col-sm-10">
                    <select 
                        id="inputState" 
                        className="form-control"
                        name = "Level"
                        onChange={this.onHandleChange}
                        value={this.state.Level}>
                            <option value={"default"}>Choose...</option>
                            <option value={"Yếu"}>Yếu</option>
                            <option value={"Trung bình"}>Trung bình</option>
                            <option value={"Khá"}>Khá</option>
                    </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2">Logo đội</label>
                    <input type="file" className="col-sm-6" name="thunbar" ref={this.fileInput} onChange={this.onHandleChange} value={this.state.thunbar} />
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Thời gian thường giao lưu</label>
                    <div className="col-sm-10">
                    <select 
                        id="inputState" 
                        className="form-control"
                        name = "timeOften"
                        onChange={this.onHandleChange}
                        value={this.state.timeOften}>
                            <option value={"Thứ 2"}>Thứ 2</option>
                            <option value={"Thứ 3"}>Thứ 3</option>
                            <option value={"Thứ 4"}>Thứ 4</option>
                            <option value={"Thứ 5"}>Thứ 5</option>
                            <option value={"Thứ 6"}>Thứ 6</option>
                            <option value={"Thứ 7"}>Thứ 7</option>
                            <option value={"CN"}>CN</option>
                    </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Sân bóng thường đá</label>
                    <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập tên sân bóng"
                        name="stadium"
                        onChange = {this.onHandleChange}
                        value={this.state.stadium}
                    />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Khu vực</label>
                    <div className="col-sm-10">
                    <select 
                        id="inputState" 
                        className="form-control" 
                        name="address"
                        value = {this.state.address}
                        onChange={this.onHandleChange}>
                            <option value={"default"}>Choose...</option>
                            <option value={"Hà nội"}>Hà nội</option>
                            <option value={"Thành phố HCM"}>Thành phố HCM</option>
                           
                    </select>
                    </div>
                </div>
                
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Độ tuổi</label>
                    <div className="col-sm-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhỏ tuổi nhất"
                        name="txtYoungest"
                        onChange = {this.onHandleChange}
                        value = {this.state.txtYoungest}
                    />
                    </div>
                    <div className="col-sm-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Lớn tuổi nhất"
                        name="txtOldest"
                        onChange = {this.onHandleChange}
                        value = {this.state.txtOldest}
                    />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"> Giới thiệu</label>
                    <div className="col-sm-10">
                    <textarea
                        className="col-sm-12"
                        style={{ height: 100 }}
                        placeholder = "Nhập mô tả về đội bóng ..."
                        name = "txtDesc"
                        onChange = {this.onHandleChange}
                        value = {this.state.txtDesc}
                    />
                    </div>
                </div>
                <div className="pull-right">
                    <button type="submit" className="btn btn-danger">
                        <i className="fa fa-save" /> Xác nhận
                    </button>
                </div>
                </form>
            </div>
            </section>

        );
    }
}

export default CreateClub;