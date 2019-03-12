import React, { Component } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />
        <Footer />
        <GlobalStyles />
      </div>
    );
  }
}

export default App;
