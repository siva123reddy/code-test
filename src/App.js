import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './SelectComponent.js';
import SelectComponent from "./SelectComponent";

class App extends Component {


    constructor() {
        super();
        this.state = {
            all_data:[],
        };
    }

    componentWillMount(){
        var self = this;
        fetch('https://web-travel-test.cc.uic.edu/countries')
            .then(res => res.json())
            .then(
                data => {
                    self.setState({
                        all_data: data
                    });
                });
    }
    render() {
    return (
      <div className="App">
          <div className="select-country">
              <span> Select the country : </span>
              <SelectComponent state={this.state}/>
          </div>
      </div>
    );
  }
}

export default App;
