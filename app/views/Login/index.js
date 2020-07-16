import React from 'react';
import {
    View, StyleSheet, Image, Text
} from 'react-native';
import PropTypes from 'prop-types';
import { width } from '../../utils/scalling';
import { animateNextTransition } from '../../utils/layoutAnimation';
import I18n from '../../i18n';
import Button from '../../containers/Button';
import NITextInput from '../../containers/TextInput';

const styles = StyleSheet.create({
    image: {
        width,
        height: 600,
        resizeMode: 'cover'
    },
    container: {
        backgroundColor: '#263238',
        width,
        height: 600
    }
});

class LoginView extends React.PureComponent {
    static propTypes = {
    	navigation: PropTypes.object
    };

    static defaultProps = {
    };

    onMoveToNext = () => {
        const { navigation } = this.props;
        navigation.navigate('Login', animateNextTransition);
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <NITextInput
                    style={{ marginTop: 35 }}
                    placeholder={I18n.t('enter_phone')}
                />
            </View>
        );
    }
}

export default LoginView;
