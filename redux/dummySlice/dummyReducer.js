let initialState = {
    text: 'hi'
}


export const dummyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
}