import React, { Component } from 'react';
import Lifecycle from './Lifecycle';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 0
      }
      this.setNewNumber = this.setNewNumber.bind(this)
   };
   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }
   render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Lifecycle myNumber = {this.state.data}></Lifecycle>
         </div>
      );
   }
}
export default App;