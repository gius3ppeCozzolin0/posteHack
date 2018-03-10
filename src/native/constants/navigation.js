import Colors from '../../../native-base-theme/variables/commonColor';

export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: 'white' },
    titleStyle: {
      color: Colors.textColor,
      alignSelf: 'center',
      letterSpacing: 2,
      fontSize: Colors.fontSizeBase,
    },
    backButtonTintColor: Colors.textColor,
  },

  tabProps: {
    swipeEnabled: false,
    activeBackgroundColor: 'rgba(0,0,0,0.1)',
    inactiveBackgroundColor: "#FFF",
    tabBarStyle: { backgroundColor: "#FFF" },
    labelStyle: {color: "#000001"},
    tabBarPosition: "bottom"
    
  },

  icons: {
    style: { color: 'white' },
  },
};
