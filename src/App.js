import React, { Component } from 'react';
import Header from './components/Header';
import ProductHuntStecker from './components/ProductHuntStecker';
import Step1 from './components/Step1';
import Step2Container from './components/Step2Container';
import Step3 from './components/Step3';
import './App.css';
import ModalWindow from './components/ModalWindow';
import Notification from './containers/Notification';
import Steps from './components/Steps';
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
        <Steps />
        <Footer />
      </div>
    );
  }
}
