import React from "react";
import PersonDialog from "./PersonDialog/PersonDialog";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = props => {
    
    let dialogsListing = props.dialogsPage.dialogs.map( d => <PersonDialog id={d.id} name={d.name} /> )
    let messagesListing = props.dialogsPage.messages.map( m => <Message messages={m} />)

    let newMessageElement = React.createRef()

    let sendMessage = () => {
        let message = newMessageElement.current.value
        alert (message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.personDialogs}>
                { dialogsListing }
            </div>
            <div className={s.messages}>
                { messagesListing }
                <div>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick = { sendMessage }>Send message</button>
                </div>
            </div>
        </div>
    );
};
export default Dialogs;
