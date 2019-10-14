import React from 'react';
import { Input, Label } from './formInputStyles';

const FormInput = ({ onChange, label, ...props }) => (
  <div>
    <Label htmlFor={label}>{label}</Label>
    <Input onChange={onChange} {...props} />
  </div>
);

export default FormInput;
