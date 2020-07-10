import React, { Component } from 'react';
import Header from './components/Header';
import ProductHuntStecker from './components/ProductHuntStecker';
import './App.css';
import ModalWindow from './components/ModalWindow';
import Notification from './containers/Notification';
import Steps from './components/Steps';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div id="container">
        <ModalWindow />
        <ProductHuntStecker />
        <Notification />
        <Header />
        <Steps />
        <Footer />
      </div>
    );
  }
}
