import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import jsonData from "./details.json";
console.log(jsonData);

class DetailView extends Component<{}, {}> {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
    public render() {
      var data = require('./details.json'); 
      for(var i = 0; i < data.length; i++) {
      var obj = data[i];
  }
      const { open } = this.state;
      return (
        <div>
          <button onClick={this.onOpenModal}>Click to view Details</button>
          <Modal open={open} onClose={this.onCloseModal} center>
          <h1> DETAILS OF ITEM </h1>
            <h2>Product ID:{obj.product_id}</h2>
            <h2>Evcat ID:{obj.evcat_id}</h2>
            <h2>Seller ID:{obj.seller_id}</h2>
            <h2>Title:{obj.title}</h2>
            <h2>Price:{obj.price}</h2>
            <h2>Published on:{obj.published}</h2>
            <h2>Active:{obj.active}</h2>
            <h2>Sold:{obj.sold}</h2>
            <h2>Quantity:{obj.quantity}</h2>
          </Modal>
        </div>
      );
    }
  }  
export default DetailView;