import React from 'react';
import { View  } from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';

class FooterBar extends React.Component {

    tabs = [
        {
          key: 'home',
          icon: 'gamepad-variant',
          label: 'Home',
          barColor: '#388E3C',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
          key: 'profile',
          icon: 'movie',
          label: 'Profile',
          barColor: '#B71C1C',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
          key: 'setting',
          icon: 'music-note',
          label: 'Setting',
          barColor: '#E64A19',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        }
      ]

      renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={tab.icon} />
      )


      renderTab = ({ tab, isActive }) => (
        <FullTab
          isActive={isActive}
          key={tab.key}
          label={tab.label}
          renderIcon={(tab) => this.renderIcon(tab.icon)}
        />
      )
  
  
    // Render any loading content that you like here
    render() {
      return (
        <View >
          <BottomNavigation
                onTabPress={activeTab => this.setState({ activeTab })}
                renderTab={this.renderTab}
                tabs={this.tabs}
            />
        </View>
      );
    }
  }

  export default FooterBar;
