import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';


class App extends React.Component {
  render() {
    return (
      <div>
        <Menu/>
        <Footer/> 
      </div>
    );
  }
  
}

export default App;
