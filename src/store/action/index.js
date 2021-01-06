import firebase from '../../config/firebase'
//if firbase getting any error then use import firebase from firebase;
// const set_data = () => {
//     return (dispatch) => {
//         console.log('running')
//         dispatch({
//             type: 'SETDATA',
//             payload: {
//                 name: 'Derllis Ertugrul',
//                 email: 'derllisErtugrul@gmail.com'
//             }
//         })
//     }
// }

const facebookLogin = (history) => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        const CreateUser = {
            name: user.displayName,
            email: user.email,
            profile: user.photoURL,
            uid: user.uid,
        }
        firebase.database().ref('/').child(`user/${user.uid}`).set(CreateUser)
        .then(console.log(`${user.displayName} Loged in successfully`))
        console.log('user ==> ',user)
        history.push('/chat')
        dispatch({type:'CurrentUser',payload:CreateUser})
        })
        .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        // var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        console.log('error ==> ',errorMessage);
        });
    }
}

const dbData = () => {
    console.log('dbdata called')
    return (dispatch) => {
    let users = []
    firebase.database().ref('/').child('user').on('child_added',(data)=>{
        users.push(data.val())
    })
    dispatch({type: 'DatabaseUsers',payload: users});
    }
}

export { dbData, facebookLogin }