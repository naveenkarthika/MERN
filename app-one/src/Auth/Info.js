import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.getData.length > 0 ?
                                (
                                    this.props.getData.map(e => {
                                        return (
                                            <tr key={e._id}>
                                                <td>{e.name}</td>
                                                <td>{e.age}</td>
                                                <td>{e.address}</td>
                                                <td>{e.email}</td>
                                                <td><button className="btn btn-primary" onClick={event => {
                                                    this.props.setData(e)
                                                }}>Edit</button></td>
                                                <td><button className="btn btn-danger" onClick={event => {
                                                    this.props.delData(e)
                                                }}>Delete</button></td>
                                            </tr>
                                        )

                                    })
                                ) :
                                (
                                    <tr>
                                        <td>No Data</td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}

