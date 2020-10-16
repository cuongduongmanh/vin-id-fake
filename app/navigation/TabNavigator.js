import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { scale } from '../utils/scalling';
import { isNotch, isTablet } from '../utils/deviceInfo';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeView from '../views/tabbar/HomeView';
import WalletView from '../views/tabbar/WalletView';
import MailView from '../views/tabbar/MailView';
import ProfileView from '../views/tabbar/ProfileView';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { themes } from '../constants/colors';
import sharedStyles from '../views/Styles';
import I18n from '../i18n';

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        resizeMode: 'contain',
        width: scale(64),
        height: scale(64),
        alignSelf: 'center'
    },
    text: {
        marginTop: isTablet ? scale(45) : 0,
        fontSize: scale(28)
    }
});

export default createBottomTabNavigator(
    {
        Home: HomeView,
        Wallet: WalletView,
        Mail: MailView,
        Profile: ProfileView
    },
    {
        tabBarPosition: 'bottom',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                const { theme } = 'light';
                switch (routeName) {
                    case 'Home':
                        return <Icon name='home' backgroundColor='transparent' color={focused ? '#1d74f5' : '#ffffff' } />;
                    case 'Wallet':
                        return <Icon name='home' backgroundColor='transparent' color={focused ? '#1d74f5' : '#ffffff' } />;
                    case 'Mail':
                        return <Icon name='home' backgroundColor='transparent' color={focused ? '#1d74f5' : '#ffffff' } />;
                    case 'Profile':
                        return <Icon name='home' backgroundColor='transparent' color={focused ? '#1d74f5' : '#ffffff' } />;
                }
            },
            tabBarLabel: ({ tintColor }) => {
                const { routeName } = navigation.state;
                const { theme } = 'light';

                switch (routeName) {
                    case 'Home':
                        return <Text style={[sharedStyles.loginTitle, sharedStyles.textBold, { color: '#0d0e12' }]}>{I18n.t('Home')}</Text>;
                    case 'Wallet':
                        return <Text style={[sharedStyles.loginTitle, sharedStyles.textBold, { color: '#0d0e12' }]}>{I18n.t('Home')}</Text>;
                    case 'Mail':
                        return <Text style={[sharedStyles.loginTitle, sharedStyles.textBold, { color: '#0d0e12' }]}>{I18n.t('Home')}</Text>;
                    case 'Profile':
                        return <Text style={[sharedStyles.loginTitle, sharedStyles.textBold, { color: '#0d0e12' }]}>{I18n.t('Home')}</Text>;
                }
            }

        }),
        tabBarOptions: {
            upperCaseLabel: false,
            showIcon: true,
            activeTintColor: '#1d74f5',
            inactiveTintColor: '#0d0e12',
            renderIndicator: () => null,
            style: {
                position: 'absolute',
                width: '100%',
                bottom: isNotch ? 10 : 10,
                backgroundColor: 'transparent',
                height: scale(160)
            },
            labelStyle: {
                alignSelf: 'center',
                fontSize: scale(24)
            }
        }
    }
);
