import React from 'react';
import { connect } from 'react-redux';

import groupsActions from '../actions/groups';

const GroupsContainer = ({ Layout, groups, select }) => <Layout groups={groups} select={select} />;

const mapStateToProps = (state) => {
  const groups = { ...state.groups.items };
  const groupsOrder = [...state.groups.order];

  return {
    groups: groupsOrder.map(groupId => groups[groupId]),
  };
};

const mapDispatchToProps = dispatch => ({
  select: groupId => dispatch(groupsActions.select(groupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer);
