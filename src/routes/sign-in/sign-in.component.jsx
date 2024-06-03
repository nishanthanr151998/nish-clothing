import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils";


const SignIn = () => {
    const logGoogleuser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

    }
    return (
        <div>
            <h1> Sign In page</h1>
            <button onClick={logGoogleuser}>
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default SignIn;