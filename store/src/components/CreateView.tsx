import React, { Component } from "react";

interface MyState{
    titleValue : string,
    catValue : string,
    priceValue : number,
    quantityValue: number

}

class CreateView extends Component<{}, MyState> {
    constructor(props:any){
        super(props);
        this.state = {
            titleValue : "",
            catValue : "",
            priceValue : 0,
            quantityValue: 0

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleCatChange = this.handleCatChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        
    }

    handleSubmit(event:any){
        event.preventDefault();
        var title = this.state.titleValue
        var category = this.state.catValue
        var price = this.state.priceValue
        var quantity = this.state.quantityValue
        var result = "Ttile: " + title + " Price: " + price + "Quantity: " + quantity
        alert(result);
        
    }
    handleTitleChange(e:any){
        this.setState({titleValue: e.target.value});
        
    }
    handleCatChange(e:any){
        this.setState({catValue: e.target.value});
        
    }
    handlePriceChange(e:any){
        this.setState({priceValue: e.target.value});
        
    }
    handleQuantityChange(e:any){
        this.setState({quantityValue: e.target.value});
        
    }
    public render() {
        return (
            <div>
                <h2> Sell Item</h2>
                <form>
                    <div>
                    <input type="text" placeholder="Title" value={this.state.titleValue} onChange={this.handleTitleChange}/>
                    </div>
                    <div>
                    <select id="evcat" ref="category"value={this.state.catValue} onChange={this.handleCatChange}>
                        <option value="Test">test</option>
                    </select>
                    </div>
                    <div>
                    <input type="number" ref="price" placeholder="20" value={this.state.priceValue} onChange={this.handlePriceChange}/>
                    </div>
                    <div>
                    <input type="number" ref="quantity" placeholder="2"value={this.state.quantityValue} onChange={this.handleQuantityChange}/>
                    </div>
                    <div>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateView;