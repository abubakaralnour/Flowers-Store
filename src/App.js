import './App.css';
import {  BrowserRouter as Router } from 'react-router-dom';
import ContextMainbanner from './Context/ContextMainbanner';
import Main from './Main/Main';
import RootHead from './Head/RootHead';

function App() {
  return (
    <div className="App">
      <ContextMainbanner>
   <Router>
   
     <RootHead/>
     <Main/>
    
   </Router>
   </ContextMainbanner>
    </div>
  );
}

export default App;
