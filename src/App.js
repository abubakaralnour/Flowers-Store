import './App.css';
import {  BrowserRouter as Router } from 'react-router-dom';
import ContextMainbanner from './Context/ContextMainbanner';
import Main from './Main/Main';
import RootHead from './Head/RootHead';
import Cookies from './Cookees/Cookies';
import LargAds from './Cookees/LargAds/LargAds';

function App() {
  return (
    <div className="App">
      <ContextMainbanner>
   <Router>
  
     <RootHead/>
     <Main/>
    
   </Router>
   </ContextMainbanner>
   <Cookies/>

   <LargAds/>
   
    </div>
  );
}

export default App;
