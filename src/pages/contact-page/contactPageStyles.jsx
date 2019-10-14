import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1080px;
  margin: auto;
  padding: 4rem 0rem;
  overflow: hidden;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const FlexItem = styled.ul`
  flex: 1;
  padding: 0rem 2rem;
  min-width: 510px;
`;

export const Img = styled.div`
  background: ${props =>
    `url(${props.background}) no-repeat center center/cover`};
  height: 920px;
  width: 510px;
  position: relative;
  top: -120px;
`;

export const Ul = styled.ul`
  list-style-type: none;
`;

export const Li = styled.li`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  padding-bottom: 1rem;
`;
