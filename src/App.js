import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Todo/Tasks";
import AddTask from "./components/Todo/AddTask";
import Todo from './components/Todo/Todo';
import Home from './Home';
import Formatter from './Formatter';
import Cryptic from './Cryptic';
import GPAC from './components/GPACalc/GPAC';
import PasteX from './PasteX';
import Linky from './Linky';
import Journals from './components/Journals/Journals';
import Games from './Games';
import Login from './components/Accounts/Login';
import Register from './components/Accounts/Register';
import store from './utils/store';
import { Nav } from "reactstrap";
import { loadUser } from './utils/actions/auth';
const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    });
    return (
        <div className="flex flex-col min-h-screen justify-between">
        <Router>
        <Navbar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Todo' component={Todo} />
                <Route path='/Formatter' component={Formatter} />
                <Route path='/Cryptic' component={Cryptic} />
                <Route path='/GPAC' component={GPAC} />
                <Route path='/PasteX' component={PasteX} />
                <Route path='/Linky' component={Linky} />
                <Route path='/Journals' component={Journals} />
                <Route path='/Games' component={Games} />
                <Route path='/Account/Login' component={Login} />
                <Route path='/Account/Register' component={Register} />
            </Switch>
        </Router>
        <Footer />
        </div>
    )
}

export default App