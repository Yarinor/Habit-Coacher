import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

class signupForm extends Component{
    renderUsernameField(field){
       return(
           <div>
            <input
                type="text"
                {...field.input}
            />
        </div>
       );

    }
    render(){
        return(
       <form>
           <Field
            name="username"
            component={this.renderUsernameField}
           />


       </form>
        );
    }

}

export default reduxForm({
    form:'SignupForm'

})(signupForm)
