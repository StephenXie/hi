import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { BrowserRouter as Router, Route, withRouter,Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Nav } from "reactstrap";

const Formatter = () => {
    return (
        <div>
            Formatter
        </div>
    )
}

export default withRouter(Formatter)
