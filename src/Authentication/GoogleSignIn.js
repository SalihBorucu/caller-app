import * as Google from 'expo-google-app-auth';

async function signInWithGoogleAsync() {
    try {
        const result = await Google.logInAsync({
            androidClientId: '758801542752-b1r13r3htq4n00unh6s3s04d1giodpgi.apps.googleusercontent.com',
            iosClientId: '758801542752-uamtvfk9u959eojn83dhpm7hnl5nkrjd.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {
            console.log(result);
            return result.accessToken;
        } else {
            return { cancelled: true };
        }
    } catch (e) {
        console.log(e);
        return { error: true };
    }
}
