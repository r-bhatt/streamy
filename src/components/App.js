import React from 'react';
import { Route, Router } from 'react-router-dom'
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';

const App = () => (
    <div>
        <Router history={history}>
            <div>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" component={StreamCreate} />
                <Route path="/streams/edit/:id" component={StreamEdit} />
                <Route path="/streams/delete" component={StreamDelete} />
                <Route path="/streams/show" component={StreamShow} />
            </div>
        </Router>
    </div>
);

export default App;