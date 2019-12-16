import React from "react";
import { Redirect } from "react-router-dom";
import {updateNewMessageBodyCreator, sendNewMessageCreator} from "../../redux/dialogs-reducer" ;
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withLoginRedirect } from '../../hoc/withLoginRedirect';
import { compose } from 'redux';


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
export default compose ( connect( mapStateToProps, mapDispatchToProps),
    withLoginRedirect) ( Dialogs );
