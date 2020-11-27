const INITIAL_STATE = {
    AppName: "Darllis Ertugrul"
}

export default (state = INITIAL_STATE,action) => {
    console.log("app_action => ",action)
    switch (action.type) {
        case 'InDispatchAction':
            return ({
                ...state,
                AppName: action.data
            })
    }
    return state;
}