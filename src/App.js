import React, { Component } from 'react';
import './App.css';
import Markdown from 'react-markdown';
import event  from './events/jan-31-2020.md';

class App extends Component {
  constructor(props){
    super();
    this.fetchEvent = this.fetchEvent.bind(this);
  }

  async fetchEvent(file) {
    try {
      const resp = await fetch(file)
      console.log(resp.body)
      return resp.text();
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Markdown source={this.fetchEvent(event)} />
    )
  }
}

export default App;
