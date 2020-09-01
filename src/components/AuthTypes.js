import * as LocalAuthentication from 'expo-local-authentication';

const options = {
    promptMessage: 'Prove yoself, fool!',
    cancelLabel: 'nah',
    fallbackLabel: 'what',
    disableDeviceFallback: true,
};

function fingerPrintLogin() {
    //check if there is an enrolled auth option
    LocalAuthentication.isEnrolledAsync().then((res) => {
        console.log(res);
    });

    LocalAuthentication.supportedAuthenticationTypesAsync().then((authType) => {
        if (!authType.length) {
            console.log('No faceID or fingerPrintID');
            return;
        }
        if (authType.length > 1) {
            console.log('Has both faceID and fingerPrintID');
            //provide options
            LocalAuthentication.authenticateAsync(options).then((res) => {
                console.log(res);
            });
        }
        if (authType[0] === 1) {
            //fingerPrint
            LocalAuthentication.authenticateAsync(options).then((res) => {
                console.log(res);
            });
        }
        if (authType[0] === 2) {
            //faceID, but couldnt test it
            LocalAuthentication.authenticateAsync(options).then((res) => {
                console.log(res);
            });
        }
    });
}
LocalAuthentication.supportedAuthenticationTypesAsync().then((authType) => {
    console.log(authType);
});
