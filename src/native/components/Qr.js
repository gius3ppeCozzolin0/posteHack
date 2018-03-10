import React from 'react';
import { Text, View, Linking, Alert, Button } from 'native-base';

import { BarCodeScanner, Permissions } from 'expo';
import { Actions } from 'react-native-router-flux';

class Qr extends React.Component {
  state = {
    hasCameraPermission: null,
  };
  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = () => {
    Actions.pay();
  };

  render() {
    return (
      <View>
        {this.state.hasCameraPermission === null ? (
          <Text>Requesting for camera permission</Text>
        ) : this.state.hasCameraPermission === false ? (
          <Text style={{ color: '#fff' }}>Camera permission is not granted</Text>
        ) : (
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        )}
      </View>
    );
  }
}
export default Qr;
