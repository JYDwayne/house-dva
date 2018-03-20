import dva from 'dva';

import key from 'keymaster';

import {dely, requestListFromServer} from '../utils/request';


export default {
  namespace: 'products',
  state: {
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return {
        ...state,
        productsList: [...state.productsList.filter(item => item.id !== id)]
      }
    },
    'initdata'(state, { payload: result }) {
    	return {
        productsList: [...result.data],
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
  	// *getlist({payload: url}, {put, call}) {
   //    yield put({type: 'showLoad', payload: false});
   //    let result = yield call(requestListFromServer, url);
   //    yield put({type: 'initdata', payload: result});
   //    yield put({type: 'showLoad', payload: true});
  	// }

    getlist: [function* ({payload: url}, {put, call}) {
      yield put({type: 'showLoad', payload: false});
      let result = yield call(requestListFromServer, url);
      yield put({type: 'initdata', payload: result});
      yield put({type: 'showLoad', payload: true});
    }, {type: 'takeLatest'}],

    // 测试takeLatest
    testTakelatest: [function* ({payload: url}, {put, call}) {
      console.log('tefdfdst');
      yield put({type: 'showLoad', payload: false});
      let result = yield call(requestListFromServer, url);
      yield put({type: 'initdata', payload: result});
      yield put({type: 'showLoad', payload: true});
    }, {type: 'takeLatest'}]
  }
};