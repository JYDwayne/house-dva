import dva from 'dva';

import key from 'keymaster';

import {dely, requestListFromServer} from '../utils/request';

// requestListFromServer()

// setTimeout(function (){
// 	console.log('rerer')
// }, undefined)

export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    'initdata'(state, { payload: result }) {
    	return [...result]
    }
  },
  effects: {
  	*getlist({payload: url}, {put, call}) {
  		yield call(requestListFromServer, url);
      // yield put({ type: 'initdata', payload: data });
  	}
  }
};