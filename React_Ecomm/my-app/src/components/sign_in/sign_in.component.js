import React, { Component } from 'react';
import FormInput from '../form-input/form_input.component';
import './sign_in.style.css';
import CustomButton from '../custom_button/custom_button.component';
import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        ,   password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // clear out the input field
        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h1 className='sign-in-title'>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                        label='email'
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                        label='pasword'
                        handleChange={this.handleChange}
                    />
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                        Sign in with Google
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
