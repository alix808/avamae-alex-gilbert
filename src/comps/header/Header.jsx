import React from 'react';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

import {
  FlexCenter,
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './headerStyles';

import { Button } from '../custom-btn/customBtnStyles';

const Header = () => (
  <FlexCenter>
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/'>HOME</OptionLink>
        <OptionLink to='/about'>ABOUT US</OptionLink>
        <OptionLink to='/contact'>CONTACT US</OptionLink>
        <OptionLink to='/login'>
          <Button primary>Log In</Button>
        </OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  </FlexCenter>
);

export default Header;
