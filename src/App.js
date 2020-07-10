import React, { Component } from 'react';
import Header from './components/Header';
import ProductHuntStecker from './components/ProductHuntStecker';
import Description from './components/Description';
import OutputScreen from './components/OutputScreen';
import Step1 from './components/Step1';
import Step2Container from './components/Step2Container';
import Download from './components/Download';
import './App.css';
import store from './reducers/store';
import ModalWindow from './components/ModalWindow';
import Notification from './containers/Notification';
import Footer from './components/Footer';

export default class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="container">
        {/* <ModalWindow /> */}
        <ProductHuntStecker />
        <Notification />
        <Header />

        <div id="inner">
          <Step1 />

          <Step2Container />

          <div className="wrapper-by-step">
            <Description
              step="3"
              title="Download the GIF animation you've created. You can share it on Twitter, Facebook, chat apps or wherever you want!🎉"
            />
            <OutputScreen />
            <Download href={store.getState().gifAnimationURL} />
            <div id="down-to-here" className="down-to-here-hide"></div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
