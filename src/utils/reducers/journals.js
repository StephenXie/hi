import { GET_JOURNALS, DELETE_JOURNAL, ADD_JOURNAL, CLEAR_JOURNALS } from '../actions/types.js';

const initialState = {
  journals: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_JOURNALS:
      return {
        ...state,
        journals: action.payload,
      };
    case DELETE_JOURNAL:
      return {
        ...state,
        journals: state.journals.filter((lead) => lead.id !== action.payload),
      };
    case ADD_JOURNAL:
      return {
        ...state,
        journals: [...state.journals, action.payload],
      };
    case CLEAR_JOURNALS:
      return {
        ...state,
        journals: [],
      };
    default:
      return state;
  }
}