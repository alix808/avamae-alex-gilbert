import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateImg } from '../../actions/userActions';
import {
  ImgOne,
  Box,
  Item,
  ItemMiddle,
  List,
  Text,
  BtnPadding,
  Icon
} from './showCaseStyles';
import { Button } from '../custom-btn/customBtnStyles';

const Showcase = ({ img, user, updateImg }) => {
  const { position } = user;
  const { banner } = user;

  const clickRight = () => {
    if (position === 0) {
      updateImg(1);
    }
    if (position === 1) {
      updateImg(2);
    }
    if (position === 2) {
      updateImg(0);
    }
  };

  const clickLeft = () => {
    if (position === 0) {
      updateImg(2);
    }
    if (position === 1) {
      updateImg(0);
    }
    if (position === 2) {
      updateImg(1);
    }
  };

  return (
    <ImgOne background={img} position={position === 2 ? '50% 10%' : '50% 25%'}>
      <Box>
        <Item>
          <Icon onClick={clickLeft} className='fas fa-arrow-left'></Icon>
        </Item>
        <ItemMiddle>
          <List>
            <Text fontSize='34px' color='white'>
              {banner[0].Title}
            </Text>
            <Text fontSize='16px' color='white'>
              {banner[0].Subtitle}
            </Text>
            <BtnPadding>
              <Button two>Contact Us</Button>
            </BtnPadding>
          </List>
        </ItemMiddle>
        <Item>
          <Icon onClick={clickRight} className='fas fa-arrow-right'></Icon>
        </Item>
      </Box>
    </ImgOne>
  );
};

Showcase.propTypes = {
  img: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  updateImg: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { updateImg }
)(Showcase);
