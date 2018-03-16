import dva from 'dva';

import key from 'keymaster';

import {dely, requestListFromServer} from '../utils/request';

import ProductList from '../components/ProductList'

// requestListFromServer()

// setTimeout(function (){
// 	console.log('rerer')
// }, undefined)

export default {
  namespace: 'products',
  state: {
    
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return state.productsList.filter(item => item.id !== id);
    },
    'initdata'(state, { payload: result }) {
    	return {
        productsList: [...result],
        isLoading: true
      }
    }
  },
  effects: {
  	*getlist({payload: url}, {put, call}) {
      let result = yield call(requestListFromServer, url);
      console.log(result);
      // ProductList.loadingDown()
      yield put({ type: 'initdata', payload: result });
  	}
  }
};