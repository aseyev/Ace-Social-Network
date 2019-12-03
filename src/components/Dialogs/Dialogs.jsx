import React from "react";
import PersonDialog from "./PersonDialog/PersonDialog";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = props => {

    // let state = props.store.getState().dialogsPage;
    
    let dialogsListing = props.dialogsPage.dialogs.map( d => <PersonDialog id={d.id} name={d.name} /> )
    let messagesListing = props.dialogsPage.messages.map( m => <Message messages={m} />)
    let newMessageBody = props.dialogsPage.newMessageBody;

    // let newMessageElement = React.createRef()

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    let onNewMessageChange = (newMessageElement) => {
        let body = newMessageElement.target.value;
        props.onNewMessageChange(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.personDialogs}>
                { dialogsListing }
            </div>
            <div className={s.messages}>
                <div>{ messagesListing }</div>
                <div>
                    <div>
                        <textarea 
                            value = {newMessageBody} 
                            onChange = {onNewMessageChange}
                            placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                        <button onClick = { onSendMessageClick }>Send message</button>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};
export default Dialogs;
