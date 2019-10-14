import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlexCenter } from './spinnerStyles';

const Spinner = ({ user }) => {
  const { loading } = user;

  if (!loading) return null;

  return (
    <FlexCenter>
      <div
        id='p2'
        className='mdl-progress mdl-js-progress mdl-progress__indeterminate'
      ></div>
    </FlexCenter>
  );
};

Spinner.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  null
)(Spinner);
