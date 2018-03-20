import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import TimerClick from './routes/TimerClick';
import Commentlist from './routes/Comment';

//动态加载路由hemodel
import dynamic from 'dva/dynamic';
console.log(dynamic);


function RouterConfig({ history, app }) {

  //主页
  const IndexPage = dynamic({
    app,
    component: () => import('./routes/IndexPage'),
  })

  //点评列表页
  const Products = dynamic({
    app,
    models: () => [
      import('./models/modelProducts'),
    ],
    component: () => import('./routes/Products'),
  });

  //点评列表二
  const Commentlist = dynamic({
    app,
    models: () => [
      import('./models/modelComment'),
    ],
    component: () => import('./routes/Comment')
  });

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/timer" exact component={TimerClick} />
        <Route path="/commentlist" exact component={Commentlist} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
