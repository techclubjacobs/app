import React, { Component } from "react";
import jsonData from "./chat.json";

class ChatPage extends Component<{}, {}> {
    
    public render() {

        return (
            <div>
                <h1>Sender ID : {jsonData.sender_id}</h1>
                <h1>Receiver ID : {jsonData.receiver_id}</h1>
                {jsonData.messages.map(me => me.is_me ? <h3> Me :{me.text} <h4> Time: {me.timestamp} </h4> </h3> : <h3>Other Person: {me.text}<h4> Time: {me.timestamp} </h4></h3>)}
            </div>
        );
    }
}

export default ChatPage;