import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
    renderError = ({error, touched}) => {
        if(error && touched) {
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta}) => {
        return (
            <div className={`field ${meta.touched && meta.error ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='title' component={this.renderInput} label='Title'/>
                <Field name='description' component={this.renderInput} label='Description'/>
                <button type='submit' className='ui button primary' >Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const error = {};
    if(!formValues.title) {
        error.title = 'You must enter a Title';
    }

    if(!formValues.description) {
        error.description = 'You must enter a description';
    }

    return error;
}

export default reduxForm({
    form: 'streamCreate',
    validate,
})(StreamForm);
