import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postMessage } from '../../actions/userActions';
import { Form, SubmitBtn, FlexBox } from './contactFormStyles';
import FormInput from '../form-input/FormInput';
import MessageInput from '../message-input/MessageInput';

const ContactForm = ({ postMessage }) => {
  const [user, setUser] = useState({
    FullName: '',
    EmailAddress: '',
    PhoneNumber: '',
    CompanyName: '',
    Message: ''
  });

  const { FullName, EmailAddress, PhoneNumber, CompanyName, Message } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    postMessage(user);
  };

  return (
    <div className='form-container'>
      <Form onSubmit={onSubmit}>
        <FormInput
          type='text'
          name='FullName'
          value={FullName}
          onChange={onChange}
          required
          label='Full name'
        />
        <FormInput
          type='email'
          name='EmailAddress'
          value={EmailAddress}
          onChange={onChange}
          required
          label='Email address'
        />
        <FormInput
          type='text'
          name='PhoneNumber'
          value={PhoneNumber}
          onChange={onChange}
          minLength='6'
          label='Phone number'
        />
        <FormInput
          type='text'
          name='CompanyName'
          value={CompanyName}
          onChange={onChange}
          required
          label='Company name'
        />
        <MessageInput value={Message} onChange={onChange} />
        <label style={{ fontSize: '12px' }}>
          <input type='checkbox' name='checkbox' value='value' />
          &nbsp; Add address details
        </label>
        <SubmitBtn type='Submit'>
          <FlexBox>
            <i className='fas fa-paper-plane'></i>
            <div>Submit</div>
            <div></div>
          </FlexBox>
        </SubmitBtn>
      </Form>
    </div>
  );
};

export default connect(
  null,
  { postMessage }
)(ContactForm);
