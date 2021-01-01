const INITIAL_STATE = {
    users: [],
    CurrentUser: {}
};

export default (state = INITIAL_STATE, action) =>{
    console.log('action => ',action)
    switch (action.type) {
        case 'CurrentUser':
            return ({
                ...state,
                CurrentUser: action.payload
            })
        case 'DatabaseUsers':
            return ({
                ...state,
                users: action.payload
            })
    }
    return state;
}