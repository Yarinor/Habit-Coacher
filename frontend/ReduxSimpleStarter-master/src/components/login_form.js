// import React, {Component} from 'react'
// import {Field, reduxForm} from 'redux-form'
//
// class loginForm extends Component{
//
//
//     renderField(field){
//         return(
//             <div className="form-group row">
//                 <label className="col-sm-4 col-form-label">
//                     {field.label}:
//                 </label>
//                 <input
//                     type={field.type}
//                     {...field.input}
//                 />
//             </div>
//         );
//
//     }
//
//     onSubmit(values){
//         console.log(values);
//     }
//
//     render(){
//         const {handleSubmit} = this.props;
//         return(
//
//         <div className="col-md-4 col-md-offset-4">
//                 <form onSubmit={handleSubmit(this.onSubmit.bind(this))   }>
//                     <Field
//                         type="email"
//                         label="Email"
//                         name="email"
//                         component={this.renderField}
//                     />
//                     <Field
//                         type="password"
//                         label="Password"
//                         name="password"
//                         component={this.renderField}
//                     />
//                     <div className="col-md-4 col-md-offset-4">
//                         <button type="submit" className="btn btn-primary">Login</button>
//                     </div>
//
//                 </form>
//             </div>
//         );
//     }
//
// }
//
//
//
// export default reduxForm({
//     form:'LoginForm'
//
// })(loginForm)
import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

class loginForm extends Component{


    renderField(field){
        return(
        <p className="field">
            <input type={field.type} {...field.input} name={field.name} placeholder={field.placeholder} required/>
            <i className={field.i}></i>
        </p>
        );

    }

    onSubmit(values){
        console.log(values);
    }

    render(){
        const {handleSubmit} = this.props;
        return(

            <div className="warp">
                <form className="form" onSubmit={handleSubmit(this.onSubmit.bind(this))   }>
                    <h1>Login</h1>
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
                    <p className="submit"><input type="submit" name="sent" value="Login"/></p>

                </form>
            </div>
        );
    }

}



export default reduxForm({
    form:'LoginForm'

})(loginForm)
