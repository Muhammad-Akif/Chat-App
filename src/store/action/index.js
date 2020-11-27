const set_data = () => {
    return (dispatch) => {
        console.log('running')
        dispatch({
            type: 'SETDATA',
            payload: {
                name: 'Derllis Ertugrul',
                email: 'derllisErtugrul@gmail.com'
            }
        })
    }
}

export { set_data }