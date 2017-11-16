import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {createUser} from '../actions';

class signupForm extends Component{
    renderField(field){
        const { meta: { touched, error } } = field;
      // const className = `form-group row ${touched && error ? 'has-danger': ''}`
       return(
           <div>
                <p className="field">
                <input type={field.type} {...field.input} name={field.name} placeholder={field.placeholder} required/>
                <i className={field.i}></i>
                </p>
                <div className="text-help">
                {touched ? error: ''}
                </div>
           </div>
       );

    }
    
    onSubmit(values){
        //reduxForm.unregisterField("SignupForm","confirmPassword");
        //console.log(values);
        this.props.createUser(values);
    }
    
    render(){
        const {handleSubmit} = this.props;
        return(
            <div className="sfwarp">
       <form  className="form"  onSubmit={handleSubmit(this.onSubmit.bind(this))   }>
           <h1>Sign up</h1>
           <Field
            type="email"
            placeholder="Email"
            name="login"
            i="fa fa-user"
            component={this.renderField}
           />
           <Field
               type="password"
               placeholder="Password"
               name="password"
               i="fa fa-lock"
               component={this.renderField}
           />
           <Field
               type="password"
               placeholder="Confirm password"
               name="confirmPassword"
               i="fa fa-lock"
               component={this.renderField}
           />
           <Field
               type="text"
               placeholder="Firstname"
               name="firstname"
               i="fa fa-user"
               component={this.renderField}
           />
           <Field
               type="text"
               placeholder="Lastname"
               name="lastname"
               i="fa fa-user"
               component={this.renderField}
           />
           <p className="submit"><input type="submit" name="sent" value="Sign up"/></p>

       </form>
            </div>

        );
    }

}

function validate(values){
const errors = {};

    if(!values.email){
        errors.email = "enter an email!";
    }
    if(!values.password) {
        errors.password = "enter a password!";
    }
    if(!(values.password === values.confirmPassword)){
        errors.confirmPassword = "passwords do not match!"
    }



    return errors
}

export default reduxForm({
    validate,
    form:'SignupForm'


})(
    connect(null,{ createUser })(signupForm)
);
