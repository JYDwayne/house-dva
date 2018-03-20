import dva from 'dva';

import key from 'keymaster';

import { requestListFromServer } from '../utils/request';


export default {
  namespace: 'comment',
  state: {
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return {
        ...state,
        commentsList: [...state.productsList.filter(item => item.id !== id)]
      }
    },
    'initdata'(state, { payload: result }) {
    	return {
        commentsList: [...result.data],
        totalNum: result.totalCount
      }
    },
    'showLoad'(state, { payload: status }) {
      return {
        ...state,
        isLoading: status
      }
    }
  },
  effects: {
  	*getlist({payload: url}, {put, call}) {
      yield put({type: 'showLoad', payload: false});
      let result = yield call(requestListFromServer, url);
      yield put({type: 'initdata', payload: result});
      yield put({type: 'showLoad', payload: true});
  	}
  }
};