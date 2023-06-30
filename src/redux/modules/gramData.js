import userImg from '../../assets/icon/userImg.png';

export const SET_FEED = 'grams/SET_FEED';

export const getdata = (payload) => {
  return {
    type: SET_FEED,
    payload
  };
};

//초기 상태값
const initialState = [{}];

const grams = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEED:
      return action.payload;
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default grams;
