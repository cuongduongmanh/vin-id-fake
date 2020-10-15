import { Dimensions, PixelRatio } from 'react-native';

import { isTablet } from './deviceInfo';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = isTablet ? 600 : 375;
const guidelineBaseHeight = isTablet ? 800 : 667;

const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + ((scale(size) - size) * factor);

function scale(size) {
    const newSize = width / guidelineBaseWidth * size;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export {
    scale, verticalScale, moderateScale, width, height
};
