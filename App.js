import React from 'react';
import { Font } from 'expo';

import Root from './src/native/index';
import configureStore from './src/store/index';

import Loading from './src/native/components/Loading';

const {  store } = configureStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'lineto-circular-book': require('./assets/fonts/lineto-circular-book.ttf'),
    });

    this.setState({ fontLoaded: true });
  }


  render() {
    const { fontLoaded } = this.state;

    return (fontLoaded ? <Root store={store} /> : <Loading />);
  }
}
