import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import I18n from '../i18n';

const FormattedText = React.forwardRef(({
	debug, style, langID, children, ...props
}, ref) => {
	if (debug) {
		console.log(style, props.children);
	}
	langID = langID || 'null';
	return (
		<Text
			ref={ref}
			style={style}
			{...props}
		>
			{I18n.t(langID)}
			{children}
		</Text>
	);
});

FormattedText.propTypes = {
	style: PropTypes.object || PropTypes.array,
	children: PropTypes.string,
	debug: PropTypes.bool,
	langID: PropTypes.string
};

export default FormattedText;
