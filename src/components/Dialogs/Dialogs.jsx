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
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.personDialogs}>
                {dialogsListing}
            </div>
            <div className={s.messages}>
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
                <button>Send message</button>
            </div>
        </form>
    )
}

const ReduxAddMessageForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;
