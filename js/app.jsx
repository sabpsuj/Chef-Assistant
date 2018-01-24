import React from 'react';
import ReactDOM from 'react-dom';
import FormControl from './form_control.jsx';
import Home from './home.jsx';
import Timer from './timer.jsx';
import Memory from './memory.jsx';
import NotFound from './not_found.jsx';
import Recipe from './recipe.jsx';
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';


document.addEventListener('DOMContentLoaded', function () {

    class Template extends React.Component{
        render(){
            return(
                <div>
                    <ul>
                        <li><Link to="/">Przepisy</Link></li>
                        <li><Link to="/add_recipe">Dodaj przepis</Link></li>
                        <li><Link to="/timer">Timer</Link></li>
                        <li><Link to="/memory">Graj!</Link></li>
                    </ul>
                    {this.props.children}
                    <div>
                        <Recipe/>
                        <Recipe/>
                        <Recipe/>
                        <Recipe/>
                    </div>
                </div>
            )
        }
    }
    class App extends React.Component {
        render() {
            return (
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Home} />
                        <Route path='/add_recipe' component={FormControl} />
                        <Route path='/timer' component={Timer} />
                        <Route path='/memory' component={Memory} />
                        <Route path='*' component={NotFound} />
                    </Route>
                </Router>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
