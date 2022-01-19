import firebase from "firebase/compat/app";

const userApi = {
    getMe() {
        // TODO: Call API to get current user (Fake api)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const currentUser = firebase.auth().currentUser;
                resolve({
                    id: currentUser.uid,
                    name: currentUser.displayName,
                    email: currentUser.email,
                    photoUrl: currentUser.photoURL,
                })
            }, 500)
        })
    }
}

export default userApi;