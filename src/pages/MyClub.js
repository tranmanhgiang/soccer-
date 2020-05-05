import React from 'react';
import Breadcrumb from './../components/Breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';
import callApi from '../utils/apiCaller';

class MyClub extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            clubs : []
        }
    }
    
    
    componentDidMount() {
        var myclub = JSON.parse(localStorage.getItem('user'));
        callApi(`clubs/${myclub[0].u_id}`, 'GET' , null).then(res => {
            this.setState({
                clubs: res.data
            });
        })
        
    }

    showMyClub = (clubs) => {
        var result = null;
        if(clubs.length > 0) {
            result = clubs.map((club, index) => {
                return  <div className="club-content" key = {index}>
                            <div className="row">
                            <div className="col-lg-5">
                            <div className="cc-pic">
                                <img src="img/club/barca.png" alt="logo_club" />
                                <h3>{club.c_clubName}</h3>
                                <button type="button" className="btn btn-danger">
                                    <Link to="/myclub-update">Chỉnh sửa thông tin</Link>
                                </button>
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="cc-text">
                                <div className="ct-title">
                                <ul>
                                    <li>
                                    <h5>Giới thiệu</h5>
                                    <p>{club.c_description}</p>
                                    </li>
                                    <li>
                                        <h5>Trình độ</h5>
                                        <p>{club.c_level} </p>
                                    </li>
                                    <li>
                                        <h5>Độ tuổi</h5>
                                        <p>{club.c_youngest} - {club.c_oldest} </p>
                                    </li>
                                    <li>
                                        <h5>Thời gian thường giao lưu</h5>
                                        <p>{club.c_timeOften}</p>
                                    </li>
                                    <li>
                                        <h5>Sân nhà</h5>
                                        <p>{club.c_homeStadium}</p>
                                    </li>
                                    <li>
                                        <h5>Địa chỉ</h5>
                                        <p>{club.c_address}</p>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
            
            })
        }
        return result;
    }
    
    render() {
        
        var { clubs } = this.state;
        return (
            <div>
                {/* Breadcrumb Section Begin */}
                <Breadcrumb title="Quản lý đội bóng"/>
                {/* Breadcrumb Section End */}
                <br />
                {/* myclub begin */}
                <div className="container myclub">
                    {this.showMyClub(clubs)}
                </div>
                {/* myclub end */}
                <br />
                </div>
        );
    }
}

export default MyClub;