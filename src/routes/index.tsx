import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Details from '../pages/Details';
import Home from '../pages/Home';

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/detail/:movieid' component={Details} />
    </Switch>
)

export default Routes;