import React from 'react';
import ShowClub from './ShowClub';
import { connect } from 'react-redux';
import { fetchClubsRequest } from './../actions/findAmatch';

class MatchFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            clubs : [] 
        }
    }

    componentDidMount() {
        this.props.fetchClubsFindMatch()
        
    }
    showClub = (clubs) => {
        var myclub = JSON.parse(localStorage.getItem('user'));
        var { filterName } = this.state;
        var result = null;
        if(clubs.length > 0){
                result = clubs.map((club, index) => {
                    return  (myclub[0].u_id !== club.u_id && club.c_clubName.toLowerCase().indexOf(filterName) !== -1) ? <ShowClub 
                                                key = {index} 
                                                logo = {club.c_logo} 
                                                captain = {club.captain}
                                                desc = {club.c_description} 
                                                clubName = {club.c_clubName.toUpperCase()} 
                                                level = {club.c_level}
                                                lease = {club.f_lease}
                                                time = {club.f_time}
                                                date = {club.f_date}
                                                stadium = {club.f_stadium}
                                                address = {club.f_address} /> : ''
                })
            
        }
        return result;
    }

    onHandleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = (target.type === 'checkbox' ? target.checked : target.value);
        this.setState({
            [name] : value
        })
    }


    render() {
        var {clubs} = this.props;
        // console.log(clubs[0]);
        return (
            <div>
                {/* Breadcrumb Section Begin */}
                <section className="breadcrumb-section set-bg" >
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="bs-text">
                            <form className="form-inline d-flex justify-content-center md-form form-sm">
                            <input
                                className="form-control form-control-sm mr-3 w-75"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                                name="filterName"
                                onChange = {this.onHandleChange}
                                value={this.state.filterName}
                                
                            />
                            <button type="submit" className="btn btn-success search" style={{ marginTop: 0 }}>
                                Tìm kiếm
                            </button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* Breadcrumb Section End */}
                {/* match found begin*/}
                <section className="club-section spad">
                    { this.showClub(clubs)}    
                </section>
                {/* match found End */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        clubs : state.fetchClubs
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchClubsFindMatch : () => {
            dispatch(fetchClubsRequest());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MatchFound);