import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter, 
    Route, 
    Switch, 
    Link,
    NavLink 
} from 'react-router-dom';

import Home from '../Components/Home';
import About from '../Components/About';
import Post from '../Components/Post';
import Contact from '../Components/Contact';
import NotFoundPage from '../Components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/posts" component={Post} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;