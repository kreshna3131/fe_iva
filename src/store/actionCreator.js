import { currencyFormat, dateFormat } from "../helpers";
import { SUCCESS_FETCH_JOBS, SUCCESS_FETCH_COMPANIES, SUCCESS_FETCH_JOB_BY_ID, JOB_SEARCH } from "./actionType";
import { Link } from "react-router-dom";
import thunk from 'redux-thunk';

export const successFetchJobs = (payload) => {
    return { type: SUCCESS_FETCH_JOBS, payload }
}
export const addSearch = (payload) => {
    return { type: JOB_SEARCH, payload }
}

export const successFetchJobById = (payload) => {
    return { type: SUCCESS_FETCH_JOB_BY_ID, payload }
}

export const successFetchCompanies = (payload) => {
    return { type: SUCCESS_FETCH_COMPANIES, payload }
}

export const fetchJobs = (query) => async (dispatch) => {
    try {
        let url = 'https://api3.thessarts.site/pub/jobs?'

        if (query) {

            if (query.limit) {
                url += `limits=${query.limit}`
            }
            if (query.keyword || query.companyId) {
                url += `keyword=${query.keyword}&companyId=${query.companyId}`
            }

        }


        let response = await fetch(url, {
            method: 'GET'
        });
        let resData = await response.json();

        resData.forEach(el => {
            el.salary = currencyFormat(el.salary)
            el.createdAt = dateFormat(el.createdAt)
        });
        dispatch(successFetchJobs(resData));
    } catch (error) {
        console.log(error);
    }
}

export const fetchCompanies = () => async (dispatch) => {
    try {
        let response = await fetch('https://api3.thessarts.site/pub/companies', {
            method: 'GET'
        });
        let json = await response.json();
        dispatch(successFetchCompanies(json));
    } catch (error) {
        console.log(error);
    }
};

export const fetchJobById = (id) => async (dispatch) => {
    try {
        let response = await fetch('https://api3.thessarts.site/pub/jobs/' + id, {
            headers: {
                access_token: localStorage.access_token
            }
        });
        let resData = await response.json();
        if (!response.ok) {
            throw new Error(resData);
        }
        resData.salary = currencyFormat(resData.salary)
        resData.createdAt = dateFormat(resData.createdAt)
        dispatch(successFetchJobById(resData))
    } catch (error) {
        console.log(error);
    }
};