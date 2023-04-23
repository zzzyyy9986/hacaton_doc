import React, { useState } from "react";
// import './App.css';
import { IPage } from "../../../interfaces/IPage";
import { ComponentPage } from "./ComponentPage";
import { useStore } from "../../../store/store";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const getPage = (page: IPage): any => {
    return <ComponentPage page={page} />;
};

function App() {
    const { pages } = useStore();

    return (
        <div className="App">
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {pages.pages.map((page) => {
                                return (
                                    <li>
                                        <Link
                                            key={page.id}
                                            to={"/admin/create/" + page.name}
                                        >
                                            <span
                                                style={{
                                                    textDecoration: "none",
                                                    padding: 10 + "px",
                                                    display: "inline-block",
                                                }}
                                            >
                                                {page.name}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
                <Switch>
                    {pages.pages.map((page) => {
                        return (
                            <Route path={"/admin/create/" + page.name}>
                                {getPage(page)}
                            </Route>
                        );
                    })}
                </Switch>
            </BrowserRouter>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mt-5"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
