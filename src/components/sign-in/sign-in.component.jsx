import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom-button.component'


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        }

    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email: '', password: ''});
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

                    <CustomButtom type='submit'>Sign in</CustomButtom>

                </form>

            </div>
        )
    }
}

export default SignIn;