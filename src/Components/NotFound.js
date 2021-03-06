import React from 'react';
import ReactDOM from 'react-dom';

import { 
    BrowserRouter, 
    Route, 
    Switch, 
    Link,
    NavLink 
} from 'react-router-dom';

const NotFoundPage = () => (
    <div style={divStyle}>
        404 - <Link to="/">Go to homepage</Link>
    </div>
);

var divStyle = {
    margin: 300
};

export default NotFoundPage;