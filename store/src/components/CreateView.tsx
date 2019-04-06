import React, { Component } from "react";


class CreateView extends Component<{}, {}> {
    constructor(props:any){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event:any){
        event.preventDefault();
        var title = this.refs.title
        var category = this.refs.category
        var price = this.refs.price
        var quantity = this.refs.quantity 
        var result = "Ttile: " + title + " Price: " + price + "Quantity: " + quantity
        alert(result);
        
    }
    public render() {
        return (
            <div>
                <h2> Sell Item</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="title" placeholder="Title"/>
                    <select id="evcat" ref="category">
                        <option value="Test">test</option>
                    </select>
                    <input type="number" ref="price" placeholder="20"/>
                    <input type="number" ref="quantity" placeholder="2"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateView;