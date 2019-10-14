import {
  SET_LOADING,
  GET_BANNER,
  ERROR,
  UPDATE_IMAGE,
  POST_MESSAGE
} from '../actions/types';

const initialState = {
  loading: true,
  banner: null,
  error: null,
  position: 0,
  message: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_BANNER:
      return {
        ...state,
        banner: action.payload.Details,
        loading: false
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case UPDATE_IMAGE:
      return {
        ...state,
        position: action.payload
      };

    case POST_MESSAGE:
      return {
        ...state,
        message: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
