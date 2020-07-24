import React, { Component } from 'react';
import Register from './Auth/Register';
import Info from './Auth/Info';
import axios from 'axios';
import { ToastContainer,toast,Slide,Zoom, Flip, Bounce  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {

  state = {
    data: "",
    editData: ""
  }

  create = (data) => {
    console.log(data.isEdit)
    if (!data.isEdit) {
      axios.post("http://localhost:5000/api/register", data).then(res => {
        console.log(res.status);
        this.getAll();
        toast.success(res.data.message)

      })
    }
    else {
      axios.put("http://localhost:5000/api/update", data).then(res => {
        console.log(res)
        this.getAll()
        toast.success(res.data.message,{
          position: toast.POSITION.TOP_RIGHT,
          className: 'foo-bar'
        })
      })
    }

  }

  componentDidMount() {
    this.getAll()
  }

  getAll() {
    axios.get("http://localhost:5000/api/info").then(res => {
      this.setState({
        data: res.data
      })
    })
  };



  del = (data) => {
    var option = window.confirm(`Are you sure want to dalete ${data.name}`);
    if (option) {
      axios.delete(`http://localhost:5000/api/delete/${data._id}`).then(res => {
        console.log(res);
        this.getAll();
        toast.success(res.data.message)
      })
    }

  };

  update = (data) => {
    this.setState({
      editData: data
    })
    console.log(data)
  }



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Register myData={this.create} setForm={this.state.editData} />
          </div>
          <div className="col-6">
            <Info getData={this.state.data} setData={this.update} delData={this.del} />
          </div>
          <ToastContainer transition={Bounce}/>
        </div>
      </div>

    )
  }
}


