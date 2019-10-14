import React from 'react';
import { Container, Border, FlexItem } from './footerStyles';

const Footer = () => {
  const string = 'Website Development by AVAMAE';

  return (
    <Container>
      <Border>
        <FlexItem>{string}</FlexItem>
      </Border>
    </Container>
  );
};

export default Footer;
