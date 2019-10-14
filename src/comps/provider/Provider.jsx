import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Showcase from '../showcase/Showcase';
import { PlaceHolder } from './providerStyles';

const Provider = ({ user }) => {
  const { loading, position, banner } = user;

  if (loading) return <PlaceHolder />;

  return (
    <div>
      {position === 0 ? <Showcase img={banner[0].ImageUrl} /> : null}
      {position === 1 ? <Showcase img={banner[1].ImageUrl} /> : null}
      {position === 2 ? <Showcase img={banner[2].ImageUrl} /> : null}
    </div>
  );
};

Provider.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  null
)(Provider);
