import React from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';
import callApi from '../utils/apiCaller';
import { connect } from 'react-redux';
import { fetchReportsRequest } from '../actions/reports';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content : '',
            feedback: []
        }
    }
    
    handleCkeditor = (event, editor) => {
        const data = editor.getData();
        this.setState({
            content : data
        })
        console.log(data);
    }

    componentDidMount() {
        this.props.fetchAllFeedback();
    }

    showFeedback = (feedback) => {
        var result = null;
        if(feedback.length > 0) {
            result = feedback.map((fb, index) => {
                return  <div key = {index}>
                            <div className="container row ">
                                <div className="col-1 text-right">
                                    <img src="img/messi.jpg" alt=""/>
                                </div>
                                <div className="col-10 text-left">
                                    <div>{fb.captain}</div>
                                    <span className="feedback">{fb.re_description}</span>
                                </div>
                            </div>
                            <br/>
                        </div>
            })
        }
        return result;
    }

    onSubmit = (e) => {
        var user = JSON.parse(localStorage.getItem('user'));
        
        var { content } = this.state;
        e.preventDefaul();
        callApi('reports','POST', {
            re_description : content,
            u_id : user[0].u_id 
        })
    }

    render() {
        var { feedback } = this.props;
        return (
            <section className=" hero-section">
                <div className="container">
                    <div>Tất cả ý kiến đóng góp</div>
                    <br/>
                    {this.showFeedback(feedback)}
                    <br/>
                    <hr/>
                    <br/>
                    <form onSubmit={this.onSubmit}>
                        <div className="container">
                                <label>Ý kiến của bạn</label>
                                <CKEditor
                                    editor={ClassicEditor}
                                    onInit={editor=> {}}
                                    onChange = {this.handleCkeditor}
                                />
                        </div>
                        <button type = "submit" className = "btn btn-success pull-right send-feedback">Gửi</button>
                    </form>
                </div>
                
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        feedback : state.reports
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllFeedback : () => {
            dispatch(fetchReportsRequest()); 
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);