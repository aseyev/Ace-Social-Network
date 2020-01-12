import React from "react";
import PersonDialog from "./PersonDialog/PersonDialog";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const maxLength100 = maxLengthCreator(100);

const Dialogs = props => {

    let dialogsListing = props.dialogsPage.dialogs.map(d => <PersonDialog id={d.id} name={d.name} />)
    let messagesListing = props.dialogsPage.messages.map(m => <Message messages={m} />)

    let addNewMessage = (values) => {
        props.sendNewMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            
            <div className={s.personDialogs}>
                {dialogsListing}
            </div>
            <div className={s.messages}>
            <h2>My Messages</h2>
            <p>Messages are saved in the Global Store.</p>
            <p>Some verifications of a text field are provided before adding.</p>
                <div>{messagesListing}</div>
                <ReduxAddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={Textarea}
                    name='newMessageBody'
                    placeholder='Enter your message'
                    validate={[required,maxLength100]}
                    />
            </div>
            <div>
                <button className={s.my_button}>Send message</button>
            </div>
        </form>
    )
}

const ReduxAddMessageForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;
