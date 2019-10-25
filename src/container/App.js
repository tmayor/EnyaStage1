import React, { Component } from 'react';
import './App.css';
import DetailsForm from '../components/DetailsForm/DetailsForm';
import Table from '../components/Table/Table';





class App extends Component {
  constructor(){
    super()
    this.state = {
      firstName: ' ',
      lastName: ' ',
      age: ' ',
      hobby: ' ',
      dob: ' ',
      all : [ ],
      errorMessage: " ",
    }
  }

  onInputChange = (event, identifier) => {
    this.setState({
      [identifier]: event.target.value,
    });

  }
  onSubmit = (event) =>{
    const {firstName, lastName, age, hobby, dob } = this.state;
      const newDetail = {firstName, lastName, age, hobby, dob };
      let currentAll = this.state.all;
     if (firstName === " " || lastName === " "){
       this.setState({
         errorMessage : "Please fill the first and last name fields at least."
       })
    }else{
      currentAll.push(newDetail)
      this.setState({
        all : currentAll,
        firstName: ' ',
        lastName: ' ',
        age: ' ',
        hobby: ' ',
        dob: ' ',
        errorMessage: " "
      })
     }
      

   
   
  }
  


  render() {
    return (
      <div className="App">
        <DetailsForm 
        submit = {this.onSubmit}
        changed={this.onInputChange} 
        errorMessage = {this.state.errorMessage}
        />
        <Table 
        all = {this.state.all}
        />
      </div>
    );
  }
}

export default App;
