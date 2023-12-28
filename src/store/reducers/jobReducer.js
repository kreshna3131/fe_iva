import { JOB_SEARCH, SUCCESS_FETCH_JOBS, SUCCESS_FETCH_JOB_BY_ID } from "../actionType";
import { Link } from "react-router-dom";
import thunk from 'redux-thunk';

let initialState = {
    jobs: [],
    job: {
        Company: {},
        Skills: [],
        User: {}
    },
    search: {
        companyId: '',
        keyword: ''
    }
}

export default function jobReducer(state = initialState, action) {
    switch (action.type) {
        case SUCCESS_FETCH_JOBS:
            return {
                ...state,
                jobs: action.payload
            }
        case SUCCESS_FETCH_JOB_BY_ID:
            return {
                ...state,
                job: action.payload
            }
        case JOB_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state

    }
}