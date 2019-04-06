import React, { Component } from "react";

class DemoGridElement extends Component<{}, {}> {

    public render() {
        return (
            
            <div style={{flexDirection: "row", flex: 1, minWidth: "20%",  marginTop: "1%", marginLeft: "1%", backgroundColor:"lightblue"}}>
                <div style={{textAlign: "center", width: "100%"}}>
                    <div style={{minHeight: 50, width: "50%", display: " inline-block", flex: 1, backgroundColor:"grey"}} >ImageHolder</div>
                </div>
                <div style={{flex: 1}}>SellerName</div>
                <div style={{flex: 5}}>This is a bit very short for a short product description</div>
                <div style={{flex: 1}}>Price$$</div>
            </div>
        );
    }
}

export default DemoGridElement;