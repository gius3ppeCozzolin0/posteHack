import React from 'react';

import { Text, View } from 'native-base';

const StepHeader = ({ label, step }) => (
  <View
    style={{
      width: '100%',
      height: 47,
      backgroundColor: '#f1f1f1',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
    }}
  >
    <Text>{label}</Text>
    <Text>{step}</Text>
  </View>
);

export default StepHeader;
