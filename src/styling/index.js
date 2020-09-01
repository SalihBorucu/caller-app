import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const templates = {
    wp,
    hp,

    primaryColor: '#000000',
    secondaryColor: 'red',
    warningColor: 'orange',
    errorColor: 'red',
    successColor: 'green',

    darkColor: '#000000',
    lightColor: '#000000',

    backgroundColor: '#000000',
    backgroundSecondaryColor: '#000000',

    textColorPrimary: '#000000',
    textColorSecondary: '#000000',
    textColorLight: '#000000',
    textColorDark: '#000000',
};

const fonts = {
    // 'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
    // 'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
    // 'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

const styles = StyleSheet.create({
    h1: {
        color: templates.textColorPrimary,
        fontSize: 28,
    },
    h2: {
        color: templates.textColorPrimary,
        fontSize: 24,
    },
    h3: {
        color: templates.textColorPrimary,
        fontSize: 20,
    },
    p: {
        color: templates.textColorPrimary,
        fontSize: 14,
    },
    small: {
        color: templates.textColorPrimary,
        fontSize: 8,
    },
    warning: {
        color: templates.textColorPrimary,
        fontSize: 8,
    },
});

Object.keys(styles).map((style) => {
    templates[style] = styles[style];
});

export default {templates, fonts};
