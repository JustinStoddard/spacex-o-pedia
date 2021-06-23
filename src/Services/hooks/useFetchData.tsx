import axios from 'axios';
import { useReducer } from 'react';

export type FetchState = {
  isFetching: boolean;
  isSuccessful: boolean;
  errorMessage?: string;
  result?: any;
};

type ActionType = {
  type: 'fetching' | 'success' | 'error';
  payload?: any;
};

type HookReturn = [
  FetchState,
  () => void,
];

const initialState: FetchState = {
  isFetching: false,
  isSuccessful: false
};

const reducer = (state: FetchState, action: ActionType): FetchState => {
  switch (action.type) {
    case 'fetching':
      return {
        ...state,
        isFetching: true,
        isSuccessful: false,
        errorMessage: '',
      };
    case 'success':
      return {
        ...state,
        isFetching: false,
        isSuccessful: true,
        errorMessage: '',
        result: { ...action.payload }
      };
    case 'error':
      return {
        ...state,
        isFetching: false,
        isSuccessful: false,
        errorMessage: action.payload,
      };
    default:
      throw new Error("Unsupported action");
  };
};

const useFetchData = (fetchType: string | undefined, fetchId?: string) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  const setData = (type: string | undefined, id?: string) => {
    axios({
      method: 'GET',
      url: `https://api.spacexdata.com/v4/${type}${id ? `/${id}` : ''}`
    }).then(data => {
      dispatch({
        type: 'success',
        payload: data?.data,
      });
    }).catch(err => {
      console.error(err);
      dispatch({
        type: 'error',
        payload: err.response?.data?.message
      });
    });
  };

  const getData = () => {
    dispatch({ type: 'fetching' });
    setData(fetchType, fetchId);
  };

  const hookReturn: HookReturn = [data, getData];

  return hookReturn;
};

export default useFetchData;