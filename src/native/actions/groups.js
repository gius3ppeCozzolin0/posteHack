const groupsActions = {
  myAction: () => ({ type: 'myAction' }),
  select: groupId => ({
    type: 'GROUPS/SELECT_GROUP',
    groupId,
  }),
};
export default groupsActions;
