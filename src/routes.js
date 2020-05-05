import React from 'react';
import Home from './pages/Home';
import MyClub from './pages/MyClub';
import Contact from './pages/Contact';
import Regist from './pages/Regist';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import MatchFound from './pages/MatchFound';
import ClubLists from './pages/ClubLists';
import MyClubUpdate from './pages/MyClubUpdate';
import CreateClub from './pages/CreateClub';
import Profile from './pages/Profile';

const routes = [
    {
        path:"/",
        exact : true,
        main : () => <Home/>
    },
    {
        path:"/matchfound",
        exact : false,
        main : () => <MatchFound/>
    },
    {
        path:"/clublists",
        exact : false,
        main : () => <ClubLists/>
    },
    {
        path:"/profile",
        exact : false,
        main : () => <Profile/>
    },
    {
        path:"/createclub",
        exact : false,
        main : () => <CreateClub/>
    },
    {
        path:"/myclub",
        exact : false,
        main : () => <MyClub/>
    },
    {
        path:"/myclub-update",
        exact : false,
        main : () => <MyClubUpdate/>
    },
    {
        path:"/contact",
        exact : false,
        main : () => <Contact/>
    },
    {
        path:"/regist",
        exact : false,
        main : () => <Regist/>
    },
    {
        path:"/login",
        exact : false,
        main : () => <Login/>
    },
    {
        path:"",
        exact : false,
        main : () => <NotFound/>
    }
];

export default routes;