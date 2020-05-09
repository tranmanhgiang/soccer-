import React from 'react';
import { Link } from 'react-router-dom';
import callApi from '../utils/apiCaller';

class MyClubUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName : '',
            Area : 'default',
            Level : 'default',
            thunbar : '',
            txtYoungest : '',
            txtOldest : '',
            txtDesc : ''
        }
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
        var { txtName, Area, Level, thunbar, txtYoungest, txtOldest, txtDesc } = this.state;
        
        callApi('clubs','POST',{
            ClubName : txtName,
            level : Level,
            address : Area,
            logo : thunbar,
            youngest : txtYoungest,
            oldest : txtOldest,
            description : txtDesc
        })
    }

    render() {
        return (
            <section className="hero-section set-bg">
                <div className="container">
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
                    <label className="col-sm-2 col-form-label">Khu vực</label>
                    <div className="col-sm-10">
                    <select 
                        id="inputState" 
                        className="form-control" 
                        name="Area"
                        value = {this.state.Area}
                        onChange={this.onHandleChange}>
                            <option value={"default"}>Choose...</option>
                            <option value={"Hà Nội"}>Hà Nội</option>
                            <option value={"Thành phố HCM"}>Thành phố HCM</option>
                            <option>...</option>
                    </select>
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
                            <option value={"yếu"}>Yếu</option>
                            <option value={"trung bình"}>Trung bình</option>
                            <option value={"khá"}>Khá</option>
                            <option value={"mạnh"}>Mạnh</option>
                    </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2">Logo đội</label>
                    <input type="file" className="col-sm-6" name="thunbar" onChange={this.onHandleChange} value={this.state.thunbar} />
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
                    <button type="button" className="btn btn-default">
                        <Link to="./myclub">Hủy</Link>
                    </button>
                    <button type="submit" className="btn btn-danger">
                        <i className="fa fa-save" /> Cập nhật
                    </button>
                </div>
                </form>
            </div>
            </section>

        );
    }
}

export default MyClubUpdate;