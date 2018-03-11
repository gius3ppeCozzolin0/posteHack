import React from 'react';
import { connect } from 'react-redux';

const CreateGroupContainer = ({ Layout, contacts }) => <Layout contacts={contacts} />;

const mapStateToProps = (state) => {
  const contacts = { ...state.contacts.items };

  return {
    contacts,
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupContainer);
