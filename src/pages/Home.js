import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
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
                                                    <Link to="/login" className="primary-btn explore">
                                                    Tìm hiểu ngay
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