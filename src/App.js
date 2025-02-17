import './App.css';
import Head from './Head/Head';
import {  BrowserRouter as Router } from 'react-router-dom';

import Main from './Main/Main';

function App() {
  return (
    <div className="App">
   <Router>
  <Head/>
     <Main/>
    
   </Router>

    </div>
  );
}

export default App;
