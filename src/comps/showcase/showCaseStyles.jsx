import styled from 'styled-components';

export const ImgOne = styled.div`
  background: ${props =>
    `url(${props.background}) no-repeat ${props.position} / cover`};
  height: 440px;
`;

export const Box = styled.div`
  height: 440px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.div`
  text-align: center;
`;

export const ItemMiddle = styled.div`
  align-items: left;
  width: 1080px;
  opacity: 1;
  border-radius: 4px;
  padding: 2rem 2rem;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const Text = styled.li`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  padding: 1rem 1rem;
`;

export const BtnPadding = styled.li`
  padding: 1rem 1rem;
`;

export const Icon = styled.i`
  color: white;
  background: black;
  padding: 1rem;
  border-radius: 4px;
  opacity: 0.5;
  &:hover {
    background-color: white;
    color: black;
  }
`;
