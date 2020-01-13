import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import sf from "../common/FormsControls/FormsControls.module.css";
import s from "../Login/login.module.css";

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field name={'email'}
                        placeholder={'email'}
                        component={Input}
                        validate={[required]}
                    />
                </div>
                <div>
                    <Field name={'password'}
                        type={'password'}
                        placeholder={'password'}
                        component={Input}
                        validate={[required]}
                    />
                </div>
                <div>
                    <Field name={'rememberMe'} type="checkbox" component={'input'} />Remember Me
            </div>
                {props.error && <div className={sf.formSummaryError} >
                    {props.error}
                </div>}
                <div>
                    <button className={sf.my_button}>Login</button>
                </div>
            </form>
        </div>

    )
}
const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={`/profile`} />
    }

    return <div>
        <h2>Authorization</h2>
        <p>by cookies</p>
        <p>testing e-mail: <code>free@samuraijs.com</code></p>
        <p>testing password: <code>free</code></p>
        <ReduxLoginForm onSubmit={onSubmmit} />

    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);