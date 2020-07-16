import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

const UriIcon = React.memo(({
	name, color, size
}) => (
	<Image
		source={{ uri: name }}
		style={[{ width: size, height: size, resizeMode: 'contain' }, {
			tintColor: color
		}]}
	/>
));

UriIcon.propTypes = {
	name: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.any
};

export default UriIcon;
