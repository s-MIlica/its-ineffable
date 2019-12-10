import React from 'react';
import PastLList from '../components/past-l-list';
import UpcomingLLaunches from '../components/upcoming-l-list';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

const Content = () => {

    return (
        <Router>
            <ul id="list">
                <li className="list-item" id="p-launches-item"> <Link to={'/'}> Past Launches </Link> </li>
                <li className="list-item" id="f-launches-item"> <Link to={'/future'}> Upcoming Launches </Link> </li>
            </ul>

            <Switch>
                <Route exact path='/' component={PastLList} />
                <Route exact path='/future' component={UpcomingLLaunches} />

            </Switch>

        </Router>
    )

}

export default Content;