const defaultState = {
  isLoading: false,
  isError: false,
  data: '',
  msg: null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // clear msg
    case 'CLEAR': {
        return {
          ...state,
          msg: null
        }
      }
    // get Promise
    case 'GET_PENDING': {
        return {
            ...state,
            isLoading: true,
        }
      }
    case 'GET_FULFILLED': {
      return {
        ...state,
        isLoading : false,
        data : action.payload.data.data,
      }
    }
    // add Promise
    case 'ADD_PENDING': {
        return {
            ...state,
            isLoading: true,
            isError: false
        }
      }
    case 'ADD_FULFILLED': {
      return {
        ...state,
        isLoading : false,
        msg: 'Success menambahkan event, buka dashboard untuk melihat evet anda',
        isError: false
      }
    }
    case 'ADD_REJECTED':{
      return {
        ...state,
        isLoading : false,
        msg: 'Pastikan semua form terisi',
        isError : true,
      }
    }
    // DEFAULT
    default: {
      return state;
    }
  }
};

export default reducer;