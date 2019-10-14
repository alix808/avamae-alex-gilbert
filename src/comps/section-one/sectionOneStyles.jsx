import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1080px;
  margin: auto;
  padding: 4rem 0rem;
  overflow: hidden;
`;

export const FlexContainer = styled.div`
  display: flex;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const FlexItem = styled.ul`
  flex: 1;
  padding: 0rem 2rem;
`;

export const Img = styled.div`
  background: ${props =>
    `url(${props.background}) no-repeat center center/cover`};
  height: 310px;
  border-radius: 4px;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const BulletPoint = styled.li`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  padding: 0rem 0rem;
  list-style-type: square;
  margin-left: 1rem;
`;

export const Padding = styled.div`
  padding: 0rem 2rem;
`;
