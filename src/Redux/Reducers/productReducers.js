import { ActionTypes } from "../Constants/action-type";

const initialState = {
    producrs: [{
        id: 1,
        title: "food",
        Category: "veg"
    }]
}

export const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state
    }
}