import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ProductPage from './components/ProductPage'
import OrderPage from './components/OrderPage'
import HelpPage from './components/HelpPage'
import MyPage from './components/MyPage'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <IndexPage>
          <Switch>
            <Route path="/product" exact component={ProductPage}/>
            <Route path="/order" exact component={OrderPage}/>
            <Route path="/help" exact component={HelpPage}/>
            <Route path="/my" exact component={MyPage}/>
          </Switch>
        </IndexPage>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
