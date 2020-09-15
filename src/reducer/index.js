
const fetchingData = (state = {
    isFetching: false,
    // data: {}
}, action) => {
    switch (action.type) {
        case "REQUEST_DATA":
            return Object.assign({}, state, { isFetching: true })

        case "RECEIVED_DATA":
            var state = Object.assign(state, { ["data"]: action.data }, { isFetching: false });
            return state
        default:
            return state
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "REQUEST_DATA":
        case "RECEIVED_DATA":
            return Object.assign({}, state, {
                [action.section]: fetchingData(state[action.section], action)
            })
        default:
            return state
    }
}

export default reducer;