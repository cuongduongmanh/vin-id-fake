import React from 'react';
import {
	View, Alert, Image, Text, SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';
import { width } from '../../utils/scalling';
import { animateNextTransition } from '../../utils/layoutAnimation';
import I18n from '../../i18n';
import Button from '../../containers/Button';
import TextInput from '../../containers/TextInput';
import sharedStyles from '../Styles';
import { isTablet } from '../../utils/deviceInfo';
import { themes } from '../../constants/colors';
import { analytics } from '../../utils/log';

class LoginView extends React.PureComponent {
    static propTypes = {
    	navigation: PropTypes.object,
        theme: PropTypes.string,
    };

    static defaultProps = {
        theme: 'dark'
    };

    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        };
    };

    valid = () => {
        const { phone } = this.state;
        return phone.trim().length > 8 && phone.trim().length < 12;
    };

    submit = () => {
        if (!this.valid()) {
            return;
        }

        // const { user, password, code } = this.state;
        // const { loginRequest } = this.props;
        Keyboard.dismiss();

        // call login API
        // loginRequest({ user, password, code });
        analytics().logEvent('login');
    };

    render() {
        const {
            Accounts_EmailOrUsernamePlaceholder, isFetching, theme
        } = this.props;

        const { phone } = this.state;

    	return (
    	    <SafeAreaView
                style={[
                    sharedStyles.container,
                    isTablet && sharedStyles.tabletScreenContent,
                    { backgroundColor: themes[theme].backgroundColor }
                ]}
                testID='login-view'
                forceInset={{ vertical: 'never' }}
            >
                <Text style={[sharedStyles.loginTitle, sharedStyles.textBold, { color: themes[theme].titleText }]}>{I18n.t('Login')}</Text>
                <TextInput
                    autoFocus
                    placeholder={Accounts_EmailOrUsernamePlaceholder || I18n.t('Username_or_email')}
                    keyboardType='email-address'
                    returnKeyType='next'
                    iconLeft='at'
                    onChangeText={value => this.setState({ phone: value })}
                    testID='login-view-email'
                    textContentType='username'
                    autoCompleteType='username'
                    theme={theme}
                    value={phone}
                />
                <Button
                    title={I18n.t('Login')}
                    type='primary'
                    onPress={this.submit}
                    testID='login-view-submit'
                    loading={isFetching}
                    disabled={!this.valid()}
                    theme={theme}
                />
            </SafeAreaView>
        );
    }
}

export default LoginView;
