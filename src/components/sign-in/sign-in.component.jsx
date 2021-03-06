import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom-button.component'
import {signinWithGoogle} from '../../firebase/firebase.utils'
import { auth } from '../../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        }

    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {email,password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: '', password: ''});

        } catch (error) {
            console.log(error);
        }

    }

    handleChange = event =>{
        const {name,value} = event.target;

        this.setState({[name]: value});
    }


    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label= 'Email' required/>
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label= 'Password'  required/>
                    
                    <div className='buttons'>
                    <CustomButtom type='submit'>Sign in</CustomButtom>
                    <CustomButtom type='button' onClick = {signinWithGoogle} isGoogleSignIn>{''}Sign in Goggle{''}</CustomButtom>                       
                    </div>



                </form>

            </div>
        )
    }
}

export default SignIn;