import React from 'react';
import PropTypes from 'prop-types';
import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
