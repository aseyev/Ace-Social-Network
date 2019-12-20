import React from "react";
// import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withLoginRedirect } from '../../hoc/withLoginRedirect';
import { sendNewMessage } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(connect(mapStateToProps, { sendNewMessage }),
    withLoginRedirect)(Dialogs);
