import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const templates = {
    wp,
    hp,

    primaryColor: '#3337A5',
    secondaryColor: '#00AB6B',
    warningColor: 'orange',
    errorColor: 'red',
    successColor: 'green',

    darkColor: '#000000',
    lightColor: '#F1F1F1',

    backgroundColor: '#FFFFFF',
    backgroundSecondaryColor: '#000000',

    textColorPrimary: '#000000',
    textColorSecondary: '#000000',
    textColorLight: '#000000',
    textColorDark: '#000000',
};

const fonts = {
    'Metropolis-Black': require('../../assets/fonts/Metropolis-Black.otf'),
    'Metropolis-BlackItalic': require('../../assets/fonts/Metropolis-BlackItalic.otf'),
    'Metropolis-Bold': require('../../assets/fonts/Metropolis-Bold.otf'),
    'Metropolis-BoldItalic': require('../../assets/fonts/Metropolis-BoldItalic.otf'),
    'Metropolis-ExtraBold': require('../../assets/fonts/Metropolis-ExtraBold.otf'),
    'Metropolis-ExtraBoldItalic': require('../../assets/fonts/Metropolis-ExtraBoldItalic.otf'),
    'Metropolis-ExtraLight': require('../../assets/fonts/Metropolis-ExtraLight.otf'),
    'Metropolis-ExtraLightItalic': require('../../assets/fonts/Metropolis-ExtraLightItalic.otf'),
    'Metropolis-Light': require('../../assets/fonts/Metropolis-Light.otf'),
    'Metropolis-LightItalic': require('../../assets/fonts/Metropolis-LightItalic.otf'),
    'Metropolis-Medium': require('../../assets/fonts/Metropolis-Medium.otf'),
    'Metropolis-MediumItalic': require('../../assets/fonts/Metropolis-MediumItalic.otf'),
    'Metropolis-Regular': require('../../assets/fonts/Metropolis-Regular.otf'),
    'Metropolis-RegularItalic': require('../../assets/fonts/Metropolis-RegularItalic.otf'),
    'Metropolis-SemiBold': require('../../assets/fonts/Metropolis-SemiBold.otf'),
    'Metropolis-SemiBoldItalic': require('../../assets/fonts/Metropolis-SemiBoldItalic.otf'),
    'Metropolis-Thin': require('../../assets/fonts/Metropolis-Thin.otf'),
    'Metropolis-ThinItalic': require('../../assets/fonts/Metropolis-ThinItalic.otf'),
};

const styles = StyleSheet.create({
    h1: {
        color: templates.textColorPrimary,
        fontFamily: 'Metropolis-Bold',
        fontSize: 24,
        lineHeight: 24,
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

export { templates, fonts };
