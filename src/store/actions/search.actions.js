import { SearchConstants } from '../constants/search.constants';
import Axios from 'axios';

export const getSearchList = (query) => {
    return (dispatch) => {
        Axios.get(`https://api.github.com/search/users?q=${query}`).then((response) => {
            if (response.status) {
                return dispatch({
                    type: SearchConstants.GET_SEARCH,
                    payload: {
                        searchList: response.data.items
                    },
                });
            }
        });
    };
};