import React from 'react';
import { Scene, Stack, Tabs } from 'react-native-router-flux';
import { Image } from 'react-native';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import AnalyticsComponent from '../components/Analytics';
import HomeComponent from '../components/Home';
import GroupsComponent from '../components/Groups';
import ChannelsComponent from '../components/Channels';
import ChannelContainer from '../containers/Channels';
import QrComponent from '../components/Qr';
import PayComponent from '../components/Pay';
import PaymentsComponent from '../components/Payments';
import CreatePaymentComponent from '../components/CreatePayment';
import GroupsContainer from '../containers/Groups';
import Group from '../components/Group';
import Transactions from '../components/Transactions';
import TransactionDetails from '../components/TransactionDetails';
import ChooseGroupComponent from '../components/ChooseGroup';
import CreatePaymentContainer from '../containers/CreatePayment';
import CreateFlashPaymentComponent from '../components/CreateFlashPayment'
import SelectGroupComponent from '../components/SelectGroup';
import CreateGroupComponent from '../components/CreateGroup';
import SelectGroupContainer from '../containers/SelectGroup';
import CreateGroupContainer from '../containers/CreateGroup';

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
        <Scene key="channels" Layout={ChannelsComponent} component={ChannelContainer} />
        <Scene key="chooseGroup" component={ChooseGroupComponent} />
        <Scene
          key="createPayment"
          Layout={CreatePaymentComponent}
          component={CreatePaymentContainer}
        />
        <Scene
          key="createFlashPayment"
          Layout={CreateFlashPaymentComponent}
          component={CreatePaymentContainer}
        />
        <Scene key="selectGroup" component={SelectGroupContainer} Layout={SelectGroupComponent} />
        <Scene key="createGroup" component={CreateGroupContainer} Layout={CreateGroupComponent} />
        <Scene key="qr" component={QrComponent} />
        <Scene key="payNow" component={PayComponent} />
      </Stack>
    </Scene>
    <Scene
      back
      clone
      key="group"
      title="group"
      {...DefaultProps.navbarProps}
      component={GroupsContainer}
      Layout={Group}
    />
    <Scene
      back
      clone
      key="transactions"
      title="transactions"
      {...DefaultProps.navbarProps}
      component={GroupsContainer}
      Layout={Transactions}
    />
    <Scene
      back
      clone
      key="transactionDetails"
      title="transactionDetails"
      {...DefaultProps.navbarProps}
      component={GroupsContainer}
      Layout={TransactionDetails}
    />
    <Scene
      back
      clone
      key="payments"
      title="payments"
      component={PaymentsComponent}
    />
    <Scene back clone key="payments" title="payments" component={PaymentsComponent} />
  </Stack>
);

export default Index;
