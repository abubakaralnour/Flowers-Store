import './App.css';
import React, { lazy, Suspense } from "react";

import {  BrowserRouter as Router } from 'react-router-dom';
import Loading from './Loading';


//  const ContextMainbanner = lazy(() =>import (ContextMainbanner from './Context/ContextMainbanner'));
//  const Main  = lazy(() =>import (Main from './Main/Main'));
//  const RootHead = lazy(() =>import (RootHead from './Head/RootHead'));
//  const Cookies = lazy(() =>import (Cookies from './Cookees/Cookies'));
//  const ContainerAds= lazy(() => import (ContainerAds from './Cookees/LargAds/ContainerAds'));
const ContextMainbanner =lazy(()=>import ("./Context/ContextMainbanner"))
const Main =lazy(()=>import("./Main/Main"))
const RootHead=lazy(()=>import("./Head/RootHead"))
const Cookies = lazy(()=>import("./Cookees/Cookies"))
const ContainerAds = lazy(()=>import("./Cookees/LargAds/ContainerAds"))

function App() {
  return (
    <div className="App">
      <ContextMainbanner>
   <Router>
   <Suspense fallback={<div><Loading/></div>}>
     <RootHead/>
     <Main/>
     <Cookies/>

   
    <ContainerAds/>
     </Suspense>
   </Router>
   </ContextMainbanner>


    </div>
  );
}

export default App;
