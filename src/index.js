import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import { Provider } from 'redux-zero/react';
import { HashRouter, Switch, Route } from "react-router-dom";
import store from "./store/store";
import registerServiceWorker from './registerServiceWorker';

const Index = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/home' component={Home} />
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </HashRouter>
        </Provider>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
