import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/photos',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
};

function SignIn() {
    return (
        <div className="text-center">
            <h2>Login Form</h2>
            <p>Login with social account</p>

            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </div>
    )
}

export default SignIn;