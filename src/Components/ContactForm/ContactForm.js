import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import {
  Field,
  Label,
  Control,
  Input,
  Button,
  Textarea,
} from 'rbx';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'amnyrrd@gmail.com',
      subject,
      message_html: message,
    };
    emailjs.send(
      'service_nrm84ne',
      'template_pcn3lza',
      templateParams,
      'user_5r82VL4i6oUNapwemViIW'
    );
    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    alert(
      `Your message was sent successfully. You'll hear back within 48 hours.`
    );
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, subject, message } = this.state;

    return (
      <div id='LowerBG'>
        <div id='ContactForm'>
          <form onSubmit={this.handleSubmit}>
            <h1>Send me an email!</h1>
            <div id='Boxes'>
            <Field align='centered'>
              <Label>Your name:</Label>
              <Control>
                <Input
                  id='NameBox'
                  name='name'
                  type='text'
                  placeholder='Your first and last name'
                  value={name}
                  onChange={this.handleChange}
                />
              </Control>
            </Field>
            <Field>
              <Label>Your email address:</Label>
              <Control>
                <Input
                  id='EmailBox'
                  name='email'
                  type='email'
                  placeholder='email@email.com'
                  value={email}
                  onChange={this.handleChange}
                />
              </Control>
            </Field>
            <Field>
              <Label>Subject:</Label>
              <Control>
                <Input
                  id='SubjectBox'
                  name='subject'
                  type='text'
                  placeholder='What is the subject?'
                  value={subject}
                  onChange={this.handleChange}
                />
              </Control>
            </Field>
            <Field>
              <Label>Message:</Label>
              <Control>
                <Textarea
                  id='MessageBox'
                  name='message'
                  placeholder='Contact me here...'
                  rows='12'
                  value={message}
                  onChange={this.handleChange}
                />
              </Control>
            </Field>
            </div>
            <Field kind='group'>
              <Control>
                <Button
                  color='dark'
                  id='SendButton'
                  class='field is-grouped is-grouped-centered'>
                  Send
                </Button>
              </Control>
            </Field>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
