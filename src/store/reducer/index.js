const INITIAL_STATE = {
    users: [],
    CurrentUser: {}
};

const reducer = (state = INITIAL_STATE, action) =>{
    console.log('action => ',action)
    switch (action.type) {
        case 'CurrentUser':
            return {
                ...state,
                CurrentUser: action.payload
            }
        case 'DatabaseUsers':
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export default reducer