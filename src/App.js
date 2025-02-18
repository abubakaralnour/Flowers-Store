import './App.css';
import Head from './Head/Head';
import {  BrowserRouter as Router } from 'react-router-dom';
import ContextMainbanner from './Context/ContextMainbanner';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <ContextMainbanner>
   <Router>
    
     <Head/>
     <Main/>
    
   </Router>
   </ContextMainbanner>
    </div>
  );
}

export default App;
