import React from 'react';
import { injectGlobal } from 'styled-components'
import Header from "./Header"
import Landing from './Landing'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'

export default () => (

  <React.Fragment>
      <Header />
      <Landing />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </React.Fragment>
);

injectGlobal`

    @import url('https://fonts.googleapis.com/css?family=Open+Sans');

    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        box-sizing: border-box;
    }
    * {
    font-family: 'Open Sans', sans-serif;
    }
`;
