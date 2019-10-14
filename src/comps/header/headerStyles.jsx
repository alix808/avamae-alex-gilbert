import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eeeff0;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 1080px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 745px) {
    justify-content: center;
  }
  @media (max-width: 400px) {
    width: 360px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 160px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 745px) {
    display: none;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 11px;
`;
