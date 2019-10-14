import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1080px;
  margin: auto;
  padding: 4rem 0rem;
  overflow: hidden;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexItem = styled.ul`
  flex: 1;
  padding: 0.5rem 2rem;
`;

export const Text = styled.a`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  padding-bottom: 1rem;
`;

export const FlexItemImg = styled.ul`
  flex: 1;
  padding: 4rem 4rem;
`;

export const Img = styled.div`
  background: ${props =>
    `url(${props.background}) no-repeat center center/cover`};
  border-radius: 4px;
  padding: 2rem 2rem;
  width: 620px;
  height: 415px;
`;
