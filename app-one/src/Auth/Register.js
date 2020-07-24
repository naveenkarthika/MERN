
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default class Register extends Component {
    state = {
        _id: "",
        name: "",
        age: "",
        address: "",
        email: "",
        password: "",
        isEdit: false
    };


    infoChanged = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })

    }

    infoSubmit = (event) => {
        if (!this.state.isEdit) {
            event.preventDefault();
            let data = {
                isEdit: this.state.isEdit,
                name: this.state.name,
                age: this.state.age,
                address: this.state.address,
                email: this.state.email,
                password: this.state.password
            }

            this.props.myData(data);
        }
        else {
            event.preventDefault();
            let data = {
                isEdit: this.state.isEdit,
                _id: this.state._id,
                name: this.state.name,
                age: this.state.age,
                address: this.state.address,
                email: this.state.email,
                password: this.state.password
            }
            this.props.myData(data);
        }
    }

    componentWillReceiveProps(props) {
        if (props.setForm._id != null) {
            this.setState({
                isEdit: true,
                _id: props.setForm._id,
                name: props.setForm.name,
                age: props.setForm.age,
                address: props.setForm.address,
                email: props.setForm.email
            })

        }
    }

    reset = () => {
        console.log("reset")
        this.setState({
            name: "",
            age: "",
            address: "",
            email: "",
            password: "",
        })
    }

    render() {
        return (
            <div className="container">
                <form autoComplete="off" onSubmit={this.infoSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" onChange={this.infoChanged} value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email" onChange={this.infoChanged} value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="text" className="form-control" name="age" onChange={this.infoChanged} value={this.state.age} />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control" name="address" onChange={this.infoChanged} value={this.state.address} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" name="password" onChange={this.infoChanged} value={this.state.password} />
                    </div>
                    <button type="submit" className="btn btn-primary">{this.state.isEdit ? 'Update' : 'Create'}</button>
                    <button type="button" className="btn btn-primary float-right" onClick={this.reset}>Reset</button>
                </form>
            </div>
        )
    }
}


