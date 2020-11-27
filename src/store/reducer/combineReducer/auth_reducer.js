const INITIAL_STATE = {
    username: "Muhammad Akif",
    email: "akif@gmail.com"
}

export default (state = INITIAL_STATE,action) => {
    console.log("auth_action => ",action)
    return state;
}