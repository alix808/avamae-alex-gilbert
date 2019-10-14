import React from 'react';
import { FlexItemOne } from './sectionTwoStyles';
import {
  Container,
  FlexContainer,
  FlexItem,
  List
} from '../section-one/sectionOneStyles';
import { ImgOne, Text, BtnPadding } from '../showcase/showCaseStyles';

import { Button } from '../custom-btn/customBtnStyles';
import img from '../../assets/shutterstock_1302552622.jpg';

const SectionTwo = () => {
  const title = 'Nulla sem urna, dictum sed nisi in, viverra rutrum';
  const lorem =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt architecto esse, dicta dignissimos doloribus quibusdam sed ducimus dolor error nam ipsa, repellendus unde odio ut harum consectetur optio voluptatem eum repellat labore dolorum praesentium! Ducimus sunt corporis eos atque dicta fugiat maiores reprehenderit nobis eaque magnam quasi temporibus laboriosam, alias fugit magni natus eligendi impedit amet? Quisquam harum modi numquam!';

  return (
    <ImgOne background={img} position='50% 10%'>
      <Container>
        <FlexContainer>
          <FlexItemOne>
            <List>
              <Text fontSize='24px' color='white'>
                {title}
              </Text>
              <Text fontSize='12px' color='white'>
                {lorem}
              </Text>
              <BtnPadding>
                <Button primary>Log in</Button>
              </BtnPadding>
            </List>
          </FlexItemOne>

          <FlexItem></FlexItem>
        </FlexContainer>
      </Container>
    </ImgOne>
  );
};

export default SectionTwo;
