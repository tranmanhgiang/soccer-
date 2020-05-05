import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div>
                {/* Footer Section Begin */}
                <footer className="footer-section set-bg">
                    <div className="container">
                        <div className="logo-footer">Football</div>
                        <div className="copyright-option">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="co-text">
                                        <p>
                                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                            Copyright © All rights reserved | This template is made with{" "}
                                            <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                                            
                                            Colorlib
                                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Footer Section End */}
                {/* Post model begin */}
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Tìm đối
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    >
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label className="col-form-label">
                                        Ngày: <span className="bind">*</span>
                                        </label>
                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">
                                        Sân bóng: <span className="bind">*</span>
                                        </label>
                                        <div>
                                            <div className="form-check form-check-inline col-md-4">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    defaultValue="option1"
                                                    name="stadium"
                                                    />
                                                <label className="form-check-label" htmlFor="inlineCheckbox1">
                                                Đã có
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline col-md-4">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    defaultValue="option2"
                                                    name="stadium"
                                                    />
                                                <label className="form-check-label" htmlFor="inlineCheckbox2">
                                                Chưa có
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Tên sân(nếu có):</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
                                    >
                                Hủy
                                </button>
                                <button type="button" className="btn btn-danger">
                                <i className="fa fa-send" /> Đăng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Post model begin */}
                {/* Search model Begin */}
                <div className="search-model">
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="search-close-switch">
                            <i className="fa fa-close" />
                        </div>
                        <form className="search-model-form">
                            <input type="text" id="search-input" placeholder="Search here....." />
                        </form>
                    </div>
                </div>
                {/* Search model end */}
            </div>
        );
    }
}

export default Footer;