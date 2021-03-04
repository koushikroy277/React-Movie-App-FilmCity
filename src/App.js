import React from 'react';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom'
import './App.scss';

import Home from './Component/Home/Home';
import ModalDes from './Component/ModalDes';
import ModalSeries from './Component/ModalSeries';
import ModalShows from './Component/ModalShows';
import TvShows from './Component/TV shows/TvShows';
import WebSeries from './Component/Web Series/WebSeries.js';
import Comedy from './Component/Movies/Comedy';
import Romance from './Component/Movies/Romance';
import Action from './Component/Movies/Action';
import Horror from './Component/Movies/Horror';
import Documentaries from './Component/Movies/Documentaries';

import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init({
    duration: 1500
});

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tvShows" exact component={TvShows} />
        <Route path="/webSeries" exact component={WebSeries} />
        <Route path="/comedy" exact component={Comedy} />
        <Route path="/romance" exact component={Romance} />
        <Route path="/action" exact component={Action} />
        <Route path="/horror" exact component={Horror} />
        <Route path="/documentaries" exact component={Documentaries} />
        <Route path="/modalDes" exact component={ModalDes} />
        <Route path="/modalShows" exact component={ModalShows} />
        <Route path="/modalSeries" exact component={ModalSeries} />
        <Redirect path="/" exact />
      </Switch>
    </div>
  );
}

export default App;
