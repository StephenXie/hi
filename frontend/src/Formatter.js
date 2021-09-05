import { useState, useEffect } from "react";
import Particles from "react-particles-js";
import { BrowserRouter as Router, Route, withRouter,Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { Nav } from "reactstrap";

const Formatter = () => {
    return (
        <div>
            Formatter
        </div>
    )
}

export default withRouter(Formatter)
