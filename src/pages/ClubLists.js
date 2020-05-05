import React from 'react';
import callApi from './../utils/apiCaller';
import ClubListItem from './ClubListItem';

class ClubLists extends React.Component {

    constructor(props) {
        super(props);   
        this.state = {
            level : 'Tất cả',
            address : 'Tất cả',
            filterName : '',
            clubs : []
        }
    }
    
    componentDidMount() {
        callApi('clubs','GET',null).then(res => {
            this.setState({
                clubs : res.data
            })
        })
    }

    showClubs = (clubs) => {
        var myclub = JSON.parse(localStorage.getItem('user'));
        var { level, address, filterName } = this.state;
        var result = null;
        if(clubs.length > 0) {
            if(level === 'Tất cả'){
                if(address === 'Tất cả'){
                    result = clubs.map((club, index) => {
                        return  (club.c_clubName.toLowerCase().indexOf(filterName) !== -1 && myclub[0].u_id !== club.u_id ) ? <ClubListItem 
                                                    key = {index}
                                                    logo = {club.c_logo}
                                                    ClubName = {club.c_clubName}
                                                    captain = {club.captain}
                                                    level = {club.c_level}
                                                    youngest = {club.c_youngest}
                                                    oldest = {club.c_oldest}
                                                    address = {club.c_address}
                                                    description = {club.c_description}
                                                /> : ''
                    
                        })  
                } else {
                    result = clubs.map((club, index) => {
                        return  (club.c_address === address && club.c_clubName.toLowerCase().indexOf(filterName) !== -1 && myclub[0].u_id !== club.u_id) ? <ClubListItem 
                                                    key = {index}
                                                    logo = {club.c_logo}
                                                    ClubName = {club.c_clubName}
                                                    level = {club.c_level}
                                                    youngest = {club.c_youngest}
                                                    oldest = {club.c_oldest}
                                                    address = {club.c_address}
                                                    description = {club.c_description}
                                                />: ''
                    
                        })
                }
                
            } else {
                if(address === 'Tất cả'){
                    result = clubs.map((club, index) => {
                        return  (club.c_level === level && club.c_clubName.toLowerCase().indexOf(filterName) !== -1 && myclub[0].u_id !== club.u_id) ? <ClubListItem 
                                                    key = {index}
                                                    logo = {club.c_logo}
                                                    ClubName = {club.c_clubName}
                                                    level = {club.c_level}
                                                    youngest = {club.c_youngest}
                                                    oldest = {club.c_oldest}
                                                    address = {club.c_address}
                                                    description = {club.c_description}
                                                /> : ''
                    
                        })  
                } else {
                    result = clubs.map((club, index) => {
                        return  (club.c_level === level && club.c_address === address && club.c_clubName.toLowerCase().indexOf(filterName) !== -1 && myclub[0].u_id !== club.u_id) ? <ClubListItem 
                                                    key = {index}
                                                    logo = {club.c_logo}
                                                    ClubName = {club.c_clubName}
                                                    level = {club.c_level}
                                                    youngest = {club.c_youngest}
                                                    oldest = {club.c_oldest}
                                                    address = {club.c_address}
                                                    description = {club.c_description}
                                                /> : ''
                    
                        })
                }
            }
        }
        return result;
    }
    
    onHandleFilter = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
    }

    

    render() {
        var { clubs,address,level } = this.state;
        return (
            <div>
                {
                /* clubsList begin */
                }
                <section className="hero-section set-bg">
                <div className="container row">
                    <div className="col-md-3 filter">
                    <div className="fil_text">
                        <i className="fa fa-search" ></i> Tìm kiếm 
                    </div>
                    <div className="filterForm">
                        <input type="text" placeholder="Nhập tên" className="filterName" name = "filterName" onChange={this.onHandleFilter}/>
                    </div>
                    <div className="fil_text">
                        <i className="fa fa-filter" ></i> Lọc kết quả
                    </div>
                    <div className="col-auto my-1">
                        <form onSubmit={this.onHandleSubmit}>
                            <label className="mr-sm-2"> Trình độ </label>
                            <select 
                                className="custom-select mr-sm-2" 
                                name="level"
                                onChange={this.onHandleFilter}
                                value={level}>
                                    <option value = {"Tất cả"}>Tất cả</option>
                                    <option value = {"Yếu"}>Yếu</option>
                                    <option value = {"Trung bình"}>Trung bình</option>
                                    <option value = {"Khá"}>Khá</option>
                            </select>
                        </form>
                    </div>
                    <div className="col-auto my-2">
                        <form onSubmit={this.onHandleSubmit}>
                            <label className="mr-sm-2"> Khu vực </label>
                            <select 
                                className="custom-select mr-sm-2"
                                name="address"
                                onChange={this.onHandleFilter}
                                value={address}>
                                    <option value={"Tất cả"}>Tất cả</option>
                                    <option value={"Hà nội"}>Hà nội</option>
                                    <option value={"Thành phố HCM"}>Thành phố HCM</option>
                            </select>
                        </form>
                    </div>
                </div>
                    <div className="col-md-8 club">
                        {this.showClubs(clubs)}
                    </div> 

                </div>
                </section>;
                {
                /* clubsList end */
                }

            </div>
        );
    }
}

export default ClubLists;