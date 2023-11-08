import { ACTION_TYPE } from '../actions';

const postInitialState = {
  id: '',
  title: '',
  imageUrl: '',
  content: '',
  publishedAt: '',
  comments: [],
};

export const postReducer = (state = postInitialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SET_POST:
      return {
        ...state,
        ...payload,
      };

    case ACTION_TYPE.DELETE_POST:
      return postInitialState;

    default:
      return state;
  }
};
