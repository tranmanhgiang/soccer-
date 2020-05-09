import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Breadcrumb from './../components/Breadcrumb/Breadcrumb';
import { connect } from 'react-redux';
import { fetchProfileRequest } from '../actions/profile';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show : false,
            date: new Date(),
            
        }
    }
    onChange = (date) => {
        this.setState({ date });
        
    }
    showAppointment = () => {
            this.setState({
                show : !this.state.show
            });
    }
    componentDidMount() {
        this.props.fetchProfile();
    }

    
    render() {
        var {profile} = this.props;
        return (
            <div>
                {/* Breadcrumb Section Begin */}
                <Breadcrumb title="Quản lý thông tin"/>
                {/* Breadcrumb Section End */}


                <section className="hero-section set-bg">
                    <div className="row container profile">
                        <div className="col-3 menu">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" >
                            <a
                                className="nav-link menu active"
                                id="user_info-tab"
                                data-toggle="pill"
                                href="#user_info"
                                role="tab"
                                aria-controls="user_info"
                                aria-selected="true"
                            >
                                <i className="fa fa-user" />
                                &nbsp;Thông tin cá nhân
                            </a>
                            <br/>
                            <a
                                className="nav-link menu"
                                id="info_edit-tab"
                                data-toggle="pill"
                                href="#info_edit"
                                role="tab"
                                aria-controls="info_edit"
                                aria-selected="false"
                            >
                                <i className="fa fa-pencil" />
                                &nbsp;Chỉnh sửa thông tin
                            </a>
                            <br/>
                            <a
                                className="nav-link menu"
                                id="calender-tab"
                                data-toggle="pill"
                                href="#calender"
                                role="tab"
                                aria-controls="calender"
                                aria-selected="false"
                            >
                                <i className="fa fa-calendar" />
                                &nbsp;Đối sắp giao lưu
                            </a>
                            </div>
                        </div>
                   
                        <div className="col-9 content">
                        <div className="tab-content" id="v-pills-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="user_info"
                            role="tabpanel"
                            aria-labelledby="user_info-tab"
                        >
                            <p className="info_text">Thông tin cá nhân</p>
                            <div className="profile-sidebar">
                            {/* SIDEBAR USERPIC */}
                            <div className="profile-userpic">
                                <img src="./img/messi.jpg" className="img-responsive" alt="messi" />
                            </div>
                            {/* END SIDEBAR USERPIC */}
                            {/* SIDEBAR USER TITLE */}
                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">Trần Mạnh Giang</div>
                                <div className="profile-usertitle-job">Đội trưởng</div>
                            </div>
                            </div>
                            <p>
                            <b>Họ tên</b>: Trần Mạnh Giang
                            </p>
                            <p>
                            <b>Email</b>: tranmanhgiang06051999@gmail.com
                            </p>
                            <p>
                            <b>Mô tả bản thân</b>: Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Sapiente fugit nesciunt impedit saepe adipisci
                            excepturi numquam esse voluptatem, eius totam, rerum delectus. Dolorem
                            quidem quod, fugiat nobis est excepturi sed?
                            </p>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="info_edit"
                            role="tabpanel"
                            aria-labelledby="info_edit-tab"
                        >
                            <p className="info_text">Chỉnh sửa thông tin cá nhân</p>
                            <form>
                            <div className="row form-group" style={{ marginTop: 20 }}>
                                <label
                                htmlFor="name_change"
                                style={{ width: 150, margin: "0 20px" }}
                                >
                                {" "}
                                Nhập họ:
                                </label>
                                <input type="text" id="firstname_change" className="col-sm-6" />
                            </div>
                            <div className="row form-group" style={{ marginTop: 20 }}>
                                <label
                                htmlFor="name_change"
                                style={{ width: 150, margin: "0 20px" }}
                                >
                                {" "}
                                Nhập tên:
                                </label>
                                <input type="text" id="lastname_change" className="col-sm-6" />
                            </div>
                            <div className="row form-group">
                                <label
                                htmlFor="inputEmail3"
                                style={{ width: 150, margin: "0 20px" }}
                                >
                                Hình ảnh
                                </label>
                                <input
                                type="file"
                                className="col-sm-6"
                                id="inputEmail3"
                                name="thunbar"
                                />
                            </div>
                            <div className="row form-group">
                                <label
                                htmlFor="description"
                                style={{ width: 150, margin: "0 20px" }}
                                >
                                Mô tả về bản thân
                                </label>
                                <textarea
                                id="description"
                                className="col-sm-6"
                                style={{ height: 100 }}
                                defaultValue={""}
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-success"
                                style={{ margin: "0 20px" }}
                            >
                                Thay đổi
                            </button>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="calender" role="tabpanel" aria-labelledby="calender-tab" >
                            <Calendar 
                                className = "defaultActiveStartDate"
                                onChange={this.onChange}
                                value={this.state.date}/>
                            <br />
                            <hr />
                            <span>Ghi chú</span>
                            <div className="note">
                            <b>Tên đối</b> : UET <br />
                            <b>Sân bóng</b> : DH ngoai ngu
                            <br />
                            <b>Khung giờ</b> : 17-18h
                            </div>
                            <br />
                            <hr />
                            <div className="appointment">
                            <button
                                className="btn btn-outline-danger col-md-2 col-sm-2"
                                onClick={this.showAppointment}
                            >
                                Tất cả cuộc hẹn
                            </button>
                            </div>
                            <br />
                            <div id="allAppointment" style={{display: this.state.show ? 'block' : 'none' }}>
                            <div className="note">
                                <b>Tên đối</b> : UET <br />
                                <b>Sân bóng</b> : DH ngoai ngu
                                <br />
                                <b>Ngày</b> : 24/4/2020
                                <br />
                                <b>Khung giờ</b> : 17-18h
                            </div>
                            <br />
                            <div className="note">
                                <b>Tên đối</b> : SOL <br />
                                <b>Sân bóng</b> : PVD
                                <br />
                                <b>Ngày</b> : 24/4/2020
                                <br />
                                <b>Khung giờ</b> : 17-18h
                            </div>
                            <br />
                            <div className="note">
                                <b>Tên đối</b> : ULIS <br />
                                <b>Sân bóng</b> : HVKTQS
                                <br />
                                <b>Ngày</b> : 24/4/2020
                                <br />
                                <b>Khung giờ</b> : 17-18h
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile : state.profile
    }
}

const mapDispatchToProps = (dispatch , props) => {
    return {
        fetchProfile : () => {
            dispatch(fetchProfileRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);