import React from "react";
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {
    componentDidMount() {
        // let userId = this.props.match.params.userId;
        // this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data.id, 
                        response.data.data.login, 
                        response.data.data.email);
                }
            })
    }
    render () {
        return <Header {...this.props} />
    
    }
};

let mapStateToProps = (state) => ({
    // profile: state.profilePage.profile
});
export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);
