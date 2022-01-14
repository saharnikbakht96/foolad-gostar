import { SearchConstants } from './../constants/search.constants';

const initialState = {
    searchList: [],
};

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SearchConstants.GET_SEARCH:
            return {
                ...state,
                searchList: action.payload.searchList,
            };
            break;
        default:
            return state;
    }
};

export default SearchReducer;
