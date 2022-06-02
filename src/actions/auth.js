import { firebase,  googleAuthProvider } from '../firebase/firebase-config'
import { types } from "../types/types"

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(()=> {
            dispatch( login(4567, 'pedro'));
        }, 3500)
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider)
            .then( ({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            });
    }
}

export const login = (uid, displayName) => ({
        type: types.loggin,
        payload: {
            uid,
            displayName
        }
})