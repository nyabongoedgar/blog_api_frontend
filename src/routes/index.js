import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../components';

function Routes(){
    return(
        <Fragment>
            <Route path="/" component={LandingPage}></Route>
            <Route path="/login" component={}></Route>
            <Route path="/" component={}></Route>
            <Route path="/" component={}></Route>
        </Fragment>
    );
}

export default Routes;