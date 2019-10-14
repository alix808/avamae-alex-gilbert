import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactForm from '../../comps/contact-form/ContactForm';
import {
  Container,
  FlexContainer,
  FlexItem,
  Img,
  Ul,
  Li
} from './contactPageStyles';
import img from '../../assets/Img_Contact.png';
import MsgStatus from '../../comps/msg-status/MsgStatus';

const ContactPage = ({ user }) => {
  const { message } = user;

  return (
    <Container>
      <FlexContainer>
        <FlexItem>
          <Ul>
            <Li fontSize='24px' color='#333'>
              Contact us
            </Li>
            <Li fontSize='12px' color='#333'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              soluta.
            </Li>
          </Ul>
          {message === null ? <ContactForm /> : <MsgStatus />}
        </FlexItem>

        <FlexItem>
          <Img background={img}></Img>
        </FlexItem>
      </FlexContainer>
    </Container>
  );
};

ContactPage.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  null
)(ContactPage);
