import React from 'react';
import { Platform, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Stack } from 'react-native-router-flux';

import { StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import theme from '../../native-base-theme/variables/commonColor';

import Routes from './routes/index';

// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') StatusBar.setHidden(true);

const Root = ({ store }) => (
  <Provider store={store}>
    <StyleProvider style={getTheme(theme)}>
      <Router>
        <Stack key="root">
          {Routes}
        </Stack>
      </Router>
    </StyleProvider>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
