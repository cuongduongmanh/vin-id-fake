import React from 'react';
import {
    View, StyleSheet, Image
} from 'react-native';
import PropTypes from 'prop-types';
import {height, width} from '../../../utils/scalling';
import { animateNextTransition } from '../../../utils/layoutAnimation';
import Text from '../../../containers/Text';
import I18n from '../../../i18n';

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

class HomeView extends React.Component {
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
        console.log('====render home', width, height);
        return (
            <View style={{ flex: 1, width: width, height: height, backgroundColor: 'red' }}>
                <Text>HomeView</Text>
            </View>
        );
    }
}

export default HomeView;
