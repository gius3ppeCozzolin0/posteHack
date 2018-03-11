import React from 'react';
import { connect } from 'react-redux';

const CreatePaymentContainer = ({ Layout, channel }) => <Layout channel={channel} />;

const mapStateToProps = state => ({
  channel: state.channel,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePaymentContainer);
