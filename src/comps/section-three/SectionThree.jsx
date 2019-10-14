import React from 'react';
import { FlexCenter, Title } from './sectionThreeStyles';
import {
  Container,
  FlexContainer,
  FlexItem,
  List
} from '../section-one/sectionOneStyles';
import { Text, BtnPadding } from '../showcase/showCaseStyles';
import { Button } from '../custom-btn/customBtnStyles';
const SectionThree = () => {
  const title = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';
  const subTitle = 'Lorem ipsum dolor sit amet consectetur.';
  const lorem =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, quasi id est repudiandae excepturi sunt nihil similique. Omnis possimus dolor, nihil, repellat libero iste debitis repellendus sapiente ducimus, voluptas a nobis vel quam! Dolores, magni veritatis ex cupiditate eum nostrum optio tenetur deserunt suscipit ipsum. Harum porro aperiam commodi, consequuntur labore ducimus vitae, dicta libero ad animi reprehenderit? Beatae, fugiat.';

  return (
    <Container>
      <FlexCenter>
        <List>
          <Title fontSize='18px' color='#333'>
            {title}
          </Title>
          <Title fontSize='16px' color='#333' style={{ fontWeight: 'bold' }}>
            {subTitle}
          </Title>
        </List>
      </FlexCenter>
      <FlexContainer>
        <FlexItem>
          <List>
            <Text fontSize='12px' color='#333'>
              {lorem}
            </Text>
          </List>
        </FlexItem>
        <FlexItem>
          <List>
            <Text fontSize='12px' color='#333'>
              {lorem}
            </Text>
            <BtnPadding style={{ textAlign: 'center' }}>
              <Button three>Contact us</Button>
            </BtnPadding>
          </List>
        </FlexItem>
        <FlexItem>
          <List>
            <Text fontSize='12px' color='#333'>
              {lorem}
            </Text>
          </List>
        </FlexItem>
      </FlexContainer>
    </Container>
  );
};

export default SectionThree;
