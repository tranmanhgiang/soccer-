import React from 'react';
import { Link } from 'react-router-dom';

class ClubListItem extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-2">
                    <div className="cc-pic">
                        <img src={this.props.logo} alt = "" />
                    </div>
                </div>
                <div className="col-lg-10">
                    <div className="cc-text">
                        <div className="ct-title">
                        <div className="row">
                            <div className="col-sm-9 col-xs-9 col-md-9 col-lg-9 fc">
                            <h3>{this.props.ClubName}</h3>
                            <Link to="" className="caption">
                                <i className="fa fa-user" /> {this.props.captain}
                            </Link>
                            &nbsp;
                            <button className="message btn btn-sm btn-default" title="Click để chat với đối"  >
                                <i className="fa fa-comment" /> Nói chuyện
                            </button>
                            </div>
                            <button type="button" className="btn btn-default btn-sm pull-right" >
                                <i className="fa fa-send" /> Mời đối giao lưu
                            </button>
                        </div>
                        <hr />
                        <p>{this.props.description}</p>
                        <hr />
                        <div className="row">
                            <h5 className="col-md-3">Trình độ : </h5>
                            <span className="col-md-6"> {this.props.level} </span>
                        </div>
                        <hr />
                        <div className="row">
                            <h5 className="col-md-3">Độ tuổi : </h5>
                            <span className="col-md-6">{this.props.youngest} - {this.props.oldest} tuổi </span>
                        </div>
                        <hr />
                        <div className="row">
                            <h5 className="col-md-3">Khu vực : </h5>
                            <span className="col-md-6">{this.props.address}</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClubListItem;