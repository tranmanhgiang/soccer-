import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import routes from './../../routes';

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route
            path = {to}
            exact = {activeOnlyWhenExact}
            children = {({match}) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link  to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
} 


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheck : false
        }
    }
    componentDidMount() {
        var user = JSON.parse(localStorage.getItem('user'));
        this.setState({
            isCheck : (user !== null ? true : false)
        })
        
    }
    

    render() {
        
        var {isCheck} = this.state;
        return (!isCheck) ? (    
                <Router>
                <div>
                    <div id="preloder">
                    <div className="loader" />
                    </div>
                    {/* Offcanvas Menu Section Begin */}
                    <div className="offcanvas-menu-overlay" />
                    <div className="offcanvas-menu-wrapper">
                        <div className="canvas-close">
                            <i className="fa fa-close" />
                        </div>
                        <div className="search-btn search-switch">
                            <i className="fa fa-search" />
                        </div>
                        <ul className="main-menu mobile-menu">
                            <MenuLink label="Trang chủ" to="/" activeOnlyWhenExact={true} />    
                            <li>
                                <Link to="">Tìm đối</Link>
                                <ul className="dropdown">
                                    <MenuLink label="Đối đang chờ" to="/matchfound" activeOnlyWhenExact={false} />
                                    <hr />
                                    <MenuLink label="Danh sách đội bóng" to="/clublists" activeOnlyWhenExact={false} />
                                    <hr />
                                    <li>
                                        <Link
                                            to=""
                                            data-toggle="modal"
                                            data-target="#exampleModal"
                                            data-whatever="@mdo"
                                            >
                                        Đăng tìm đối
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <MenuLink label="Quản lý đội" to="/myclub" activeOnlyWhenExact={false} />
                            <MenuLink label="Liên hệ" to="/contact" activeOnlyWhenExact={false} />
                            <MenuLink label="Đăng ký" to="/regist" activeOnlyWhenExact={false} />
                            <MenuLink label="Đăng nhập" to="/login" activeOnlyWhenExact={false} />
                        </ul>
                    <div id="mobile-menu-wrap" />
                    </div>
                    {/* Offcanvas Menu Section End */}
                    {/* Header Section Begin */}
                    <header className="header-section conatiner-fluid">
                        <div className="header__nav">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <div className="logo">
                                            <Link to="/">
                                            <img src="img/logo.png" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="nav-menu">
                                            <ul className="main-menu">
                                                <MenuLink label="Trang chủ" to="/" activeOnlyWhenExact={true} />
                                                <li>
                                                    <Link to="">Tìm đối</Link>
                                                    <ul className="dropdown">
                                                        
                                                        <MenuLink label="Đối đang chờ" to="/matchfound" activeOnlyWhenExact={false} />
                                                        <hr />
                                                        
                                                        <MenuLink label="Danh sách đội bóng" to="/clublists" activeOnlyWhenExact={false} />
                                                        <hr />
                                                        <li>
                                                            <Link to = ""
                                                                data-toggle="modal"
                                                                data-target="#exampleModal"
                                                                data-whatever="@mdo"
                                                                >
                                                            Đăng tìm đối
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <MenuLink label="Quản lý đội" to="/myclub" activeOnlyWhenExact={false} />
                                                <MenuLink label="Liên hệ" to="/contact" activeOnlyWhenExact={false} />
                                                <MenuLink label="Đăng ký" to="/regist" activeOnlyWhenExact={false} />
                                                <MenuLink label="Đăng nhập" to="/login" activeOnlyWhenExact={false} />
                                            </ul>
                                            <div className="nm-right search-switch">
                                                <i className="fa fa-search" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="canvas-open">
                                    <i className="fa fa-bars" />
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* Header End */}
                    
                    <Switch>
                        {this.showContentMenus(routes)}
                    </Switch>
                </div>
            </Router>
            ) : '';
        }
    showContentMenus = (routes) => {
        var result = null;
        if(routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route 
                        key = {index}
                        path = {route.path} 
                        exact = {route.exact}
                        component = {route.main} />
            })
        }
        return result;
    }
}

export default Menu;