import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, FlexBox, Item, Bold } from './msgStatusStyles';

const MsgStatus = ({ user }) => {
  const { message } = user;

  if (message.status !== 200) {
    return <h1>error</h1>;
  }

  return (
    <Box>
      <FlexBox>
        <Item>
          <i className='fas fa-check-circle fa-2x'></i>
        </Item>
        <Bold>Your message has been sent</Bold>
        <Item>
          <div>We will be in contact with you within 24 hours</div>
        </Item>
      </FlexBox>
    </Box>
  );
};

MsgStatus.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  null
)(MsgStatus);
