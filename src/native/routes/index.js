import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import { Image } from 'react-native';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import AnalyticsComponent from '../components/Analytics';
import HomeComponent from '../components/Home';
import GroupsComponent from '../components/Groups';
import ChannelsComponent from '../components/Channels';
import QrComponent from '../components/Qr';
import PayComponent from '../components/Pay';
import PaymentsComponent from '../components/Payments';
import FormComponent from '../components/Form';
import GroupsContainer from '../containers/Groups';

const iconStyles = { width: 24, height: 24 };

const Index = (
  <Stack>
    <Scene hideNavBar>
      <Tabs key="tabbar" swipeEnabled type="replace" showLabel {...DefaultProps.tabProps}>
        <Stack
          hideNavBar
          key="home"
          title={AppConfig.home}
          icon={() => <Image style={iconStyles} source={require('../../images/home_black.png')} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={HomeComponent} />
        </Stack>
        <Stack
          hideNavBar
          key="groups"
          title={AppConfig.groups}
          icon={() => <Image style={iconStyles} source={require('../../images/team_black.png')} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="groups" Layout={GroupsComponent} component={GroupsContainer} />
        </Stack>
        <Stack
          hideNavBar
          key="analytics"
          title={AppConfig.analytics}
          icon={() => (
            <Image style={iconStyles} source={require('../../images/analytics_black.png')} />
          )}
          {...DefaultProps.navbarProps}
        >
          <Scene key="analytics" component={AnalyticsComponent} />
        </Stack>
      </Tabs>
      <Stack hideNavBar key="pay">
        <Scene key="channels" component={ChannelsComponent} />
        <Scene key="form" component={FormComponent} />
        <Scene key="qr" component={QrComponent} />
        <Scene key="pay" component={PayComponent} />
        <Scene key="payments" component={PaymentsComponent} />
      </Stack>
    </Scene>
  </Stack>
);

export default Index;
