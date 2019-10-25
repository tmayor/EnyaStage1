import React, { Component } from 'react';

class DetailsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
  
    render() {
        return (
           <div className="form_card" >
                <h2 className="text-center header"> Fill In your details here </h2>
        <form>
                <p className="error text-center">{this.props.errorMessage}</p> 
            <div className="row form-row">
                <div className="col">
                <input onChange={(event) => this.props.changed(event, "firstName")} required="true" type="text" className="form-control" name="firstName" placeholder="First name"/>
                </div>
                <div className="col">
                <input onChange={(event) => this.props.changed(event, "lastName")} required="true"  type="text" className="form-control" name="lastName" placeholder="Last name"/>
                </div>
            </div>
            <div className="row form-row">
                <div className="col">
                <input onChange={(event) => this.props.changed(event, "hobby")}  required="true" type="text" name="hobby" className="form-control" placeholder="Hobby"/>
                </div>
                <div className="col">
                <input onChange={(event) => this.props.changed(event, "age")} required="true" type="number" name= "age" className="form-control" placeholder="Age"/>
                </div>
            </div>
            <div className="row form-row">
                <div className="col">
                    <label> Date of Birth</label>
                <input onChange={(event) => this.props.changed(event, "dob")}  required="true" type="date" name="dob" className="form-control" />
                </div>
                <div className="col">
                </div>
            </div>
            <div className="row form-row">
                <div className="col">
            <input onClick = {(event) => this.props.submit(event)} type="reset" name= "age" className="btn btn-primary" value ="Submit"/>
               
                </div>
            </div>

            </form>
           </div>
        )
    }
}

export default DetailsForm;
