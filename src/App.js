import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Todo from './Todo';
import Home from './Home';
import Formatter from './Formatter';
import Cryptic from './Cryptic';
import GPAC from './GPAC';
import PasteX from './PasteX';
import Linky from './Linky';
import Journals from './Journals';
import Games from './Games';
import Login from './Login';
import { Nav } from "reactstrap";

const App = () => {
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
                <Route path='/Login' component={Login} />
            </Switch>
        </Router>
        <Footer />
        </div>
    )
}

export default App