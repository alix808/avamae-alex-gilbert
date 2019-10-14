import styled from 'styled-components';

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.li`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  padding: 0.5rem 0rem;
`;
