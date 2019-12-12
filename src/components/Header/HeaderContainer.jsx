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
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            })
    }
    render () {
        return <Header {...this.props} />
    
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login
});
export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);
