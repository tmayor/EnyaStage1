import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className=" table-card">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Hobby</th>
                            <th scope="col">Age</th>
                            <th scope="col">DOB</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.all.map(detail => {
                            return (
                                <tr key={detail.firstName}>
                                    <th scope="row"> <span className="identifier text-center rounded"> {detail.firstName.charAt(0)}</span>  </th>
                                    <td>{detail.firstName}</td>
                                    <td>{detail.lastName}</td>
                                    <td> {detail.hobby}</td>
                                    <td>{detail.age}</td>
                                    <td>{detail.dob}</td>


                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;