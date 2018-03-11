import React from 'react';
import { connect } from 'react-redux';

import channelsActions from '../actions/channels';

const ChannelContainer = ({ Layout, chooseChannel }) => <Layout chooseChannel={chooseChannel} />;

const mapDispatchToProps = dispatch => ({
  chooseChannel: (flash, name) => dispatch(channelsActions.chooseChannel(flash, name)),
});

export default connect(null, mapDispatchToProps)(ChannelContainer);
