import React from 'react';
import { Link } from 'react-router-dom';

class ShowClub extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                <div className="club-content">
                <div className="row">
                <div className="col-lg-5">
                    <div className="cc-pic">
                    <img src={this.props.logo} alt = "barca" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="cc-text">
                        <div className="ct-title">
                            <div className="row">
                            <div className="col-sm-10 col-xs-10 col-md-10 col-lg-10 fc">
                                <h3>{this.props.clubName}</h3>
                                <Link to="" className="caption">
                                    <i className="fa fa-user" /> {this.props.captain}
                                </Link>
                                &nbsp;
                                <button className="message btn btn-sm btn-default" title="Click để chat với đối" >
                                    <i className="fa fa-comment" /> Nói chuyện
                                </button>
                            </div>
                            <button
                                type="button"
                                className="btn btn-success btn-sm pull-right"
                            >
                                <i className="fa fa-send" /> Bắt đối
                            </button>
                            </div>
                            <p>
                            {this.props.desc}
                            </p>
                        </div>
                        <div className="ct-widget">
                        <ul>
                        <li>
                            <h5>Trình độ</h5>
                            <p>{this.props.level}</p>
                        </li>
                        <li>
                            <h5>Kèo</h5>
                            <p>{this.props.lease}</p>
                        </li>
                        <li>
                            <h5>Sân</h5>
                            <p>{this.props.stadium}</p>
                        </li>
                        <li>
                            <h5>Ngày</h5>
                            <p>{this.props.date} </p>
                        </li>
                        <li>
                            <h5>Thời gian</h5>
                            <p>{this.props.time}</p>
                        </li>
                        
                        <li>
                            <h5>Địa chỉ sân</h5>
                            <p>{this.props.address}</p>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
            <br/>
            </div>
        );
    }
}
export default ShowClub;