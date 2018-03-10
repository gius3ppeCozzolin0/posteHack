import React from "react";
import { Scene, Tabs, Stack } from "react-native-router-flux";
import { Icon } from "native-base";
import { Image } from "react-native";

import DefaultProps from "../constants/navigation";
import AppConfig from "../../constants/config";

import AnalyticsComponent from "../components/Analytics";
import HomeComponent from "../components/Home";
import GroupsComponent from "../components/Groups";
import AllComponent from "../components/All";
const iconStyles = { width: 24, height: 24 };
const Index = (
  <Stack>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={true}
        {...DefaultProps.tabProps}
      >
        <Stack
          hideNavBar
          key="home"
          title={AppConfig.home}
          icon={() => <Image style={iconStyles} source={require("../../images/home_black.png")} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={HomeComponent} />
        </Stack>
        <Stack
          hideNavBar
          key="groups"
          title={AppConfig.groups}
          icon={() => <Image style={iconStyles} source={require("../../images/team_black.png")} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="groups" component={GroupsComponent} />
        </Stack>
        <Stack
          hideNavBar
          key="analytics"
          title={AppConfig.analytics}
          icon={() => <Image style={iconStyles} source={require("../../images/analytics_black.png")} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="analytics" component={AnalyticsComponent} />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
