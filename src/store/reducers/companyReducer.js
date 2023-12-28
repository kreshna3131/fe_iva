import { SUCCESS_FETCH_COMPANIES } from "../actionType"
import { Link } from "react-router-dom";
import thunk from 'redux-thunk';

let initialState = {
    companies: []
}

export default function companyReducer(state = initialState, action) {
    switch (action.type) {
        case SUCCESS_FETCH_COMPANIES:
            return {
                ...state,
                companies: action.payload
            }
        default:
            return state

    }
}