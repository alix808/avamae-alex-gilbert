import React from 'react';
import {
  Container,
  FlexContainer,
  FlexItem,
  Text,
  Img,
  FlexItemImg
} from './aboutPageStyles';
import img from '../../assets/shutterstock_696636415.jpg';

const AboutPage = () => {
  return (
    <Container>
      <FlexContainer>
        <FlexItem>
          <Text fontSize='24px'>About us</Text>
        </FlexItem>
        <FlexItem>
          <Text fontSize='12px'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea,
            labore quasi accusamus et eligendi voluptate dolorum sit! Dolorem
            non, nemo fuga odio necessitatibus ducimus soluta quia veritatis
            architecto error?
          </Text>
        </FlexItem>
        <FlexItem>
          <Text fontSize='12px'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea,
            labore quasi accusamus et eligendi voluptate dolorum sit! Dolorem
            non, nemo fuga odio necessitatibus ducimus soluta quia veritatis
            architecto error?
          </Text>
        </FlexItem>

        <FlexItemImg style={{ alignSelf: 'center' }}>
          <Img background={img}></Img>
        </FlexItemImg>
        <FlexItem>
          <Text fontSize='12px'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea,
            labore quasi accusamus et eligendi voluptate dolorum sit! Dolorem
            non, nemo fuga odio necessitatibus ducimus soluta quia veritatis
            architecto error?
          </Text>
        </FlexItem>
      </FlexContainer>
    </Container>
  );
};

export default AboutPage;
