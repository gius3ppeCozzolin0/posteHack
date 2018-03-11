import React from 'react';
import { connect } from 'react-redux';

import groupsActions from '../actions/groups';

const GroupsContainer = ({
  Layout, groups, contacts, match,
}) => (
  <Layout contacts={contacts} groups={groups} match={match} />
);

const mapStateToProps = (state) => {
  const groups = { ...state.groups.items };
  const contacts = { ...state.contacts.items };
  const groupsOrder = [...state.groups.order];

  return {
    groups: groupsOrder.map(groupId => groups[groupId]),
    contacts,
  };
};

const mapDispatchToProps = dispatch => ({
  myAction: dispatch(groupsActions.myAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer);
