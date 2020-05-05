import React from 'react';

class Breadcrumb extends React.Component {
    render() {
        return (
            <div>
                {/* Breadcrumb Section Begin */}
                <section className="breadcrumb-section set-bg" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bs-text">
                                    <h2>{this.props.title}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Breadcrumb Section End */}
            </div>
        );
    }
}

export default Breadcrumb;