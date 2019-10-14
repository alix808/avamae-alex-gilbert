import React from 'react';
import { Full, Label, MessageBox } from './messageInputStyles';

const MessageInput = ({ value, onChange }) => {
  return (
    <Full>
      <Label htmlFor='Message'>Message</Label>
      <MessageBox
        type='text'
        name='Message'
        value={value}
        onChange={onChange}
        required
        minLength='6'
      />
    </Full>
  );
};

export default MessageInput;
