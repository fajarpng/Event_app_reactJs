import { get, post } from '../../helper/http';

export const getEvent = (body) => {
  return {
    type: 'GET',
    payload: get(body),
  };
};

export const addEvent = (body) => {
  return {
    type: 'ADD',
    payload: post(body),
  };
};

// clear
export const clear = () => {
  return {
    type: 'CLEAR'
  };
};