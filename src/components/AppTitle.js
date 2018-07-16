// in src/comments/ApproveButton.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AppTitle = ({ event }) => (
  <span>{'name' in event ? event.name : 'All'}</span>
);

AppTitle.propTypes = {};

export default connect(
  state => ({ event: state.app.event }),
  {}
)(AppTitle);
