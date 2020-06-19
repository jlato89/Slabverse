import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Homepage,
  About,
  Products,
  Neolith,
  Gallery,
  ContactUs,
  NoMatch,
} from './components/Routes';
import { Header, Footer } from './components/common';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/neolith' component={Neolith} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/contact-us' component={ContactUs} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
