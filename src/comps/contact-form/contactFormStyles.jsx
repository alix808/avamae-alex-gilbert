import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const Full = styled.div`
  grid-column: 1 / 3;
`;

export const MessageInput = styled.textarea`
  width: 100%;
  padding: 1em;
  border-radius: 4px;
  border: 1px solid #eeeff0;
  background: #f8f9fc;
`;

export const Label = styled.label`
  display: block;
  font-size: 11px;
`;

export const SubmitBtn = styled.button`
  grid-column: 1 / 3;
  width: 100%;
  padding: 1em;
  border-radius: 4px;
  border: 1px solid #eeeff0;
  background: #427bb3;
  color: white;
  height: 40px;
  &:hover {
    opacity: 0.5;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CheckBox = styled.input`
  width: 100%;
  padding: 1em;
  border-radius: 4px;
  border: 1px solid #eeeff0;
  background: #f8f9fc;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
`;
