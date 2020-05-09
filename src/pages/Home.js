import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login : false
        }
    }
    
    componentDidMount() {
        var user =  JSON.parse(localStorage.getItem('user'));
        if(user !== null) {
            this.setState({
                login : true
            })
        }
    }
    render() {
        var user =  JSON.parse(localStorage.getItem('user'));
        
        return (
            <div>
                {
                /* Hero Section Begin */
                }
                <section className="hero-section set-bg home">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hs-item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="hs-text">
                                                    <h4>QUẢN LÝ SÂN, TÌM ĐỐI GIAO LƯU, ĐẶT SÂN TRỰC TUYẾN</h4>
                                                    <h2>Hoàn toàn miễn phí</h2>
                                                    <Link to={(user !== null) ? '/' : '/login'} className="primary-btn explore">
                                                    Đăng nhập
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {
                /* Hero Section End */
                }
            </div>
        );
    }
}

export default Home;