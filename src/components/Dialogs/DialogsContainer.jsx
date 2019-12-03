import React from "react";  
import {updateNewMessageBodyCreator, sendNewMessageCreator} from "../../redux/dialogs-reducer" ;
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = props => {

//     let state = props.store.getState().dialogsPage;

//     let sendMessageClick = () => {
//         props.store.dispatch(sendNewMessageCreator())
//     }
//     let newMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }

//     return (
//         <Dialogs dialogsPage = {state}
//                 onSendMessageClick = {sendMessageClick}
//                 onNewMessageChange = {newMessageChange} />
//     );
// };


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {dispatch(sendNewMessageCreator())},
        onNewMessageChange: (body) => {dispatch(updateNewMessageBodyCreator(body))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
