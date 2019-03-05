import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Loader = () => (
  <div className="spinner">
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
    <span className="sr-only">
      <FormattedMessage id="common.components.Loader.loading" />
    </span>
  </div>
);

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
