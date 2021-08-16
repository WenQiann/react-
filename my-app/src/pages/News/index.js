import React, { Component } from 'react';
import Header from '../Header';
import Home from "../Home";
import Footer from "../Footer";
export default class News extends Component {
    render() {
        return <div>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    }
}