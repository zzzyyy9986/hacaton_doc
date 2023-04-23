import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Routes from "./routes/Routes";
import MainNav from "./nav/MainNav";
import SidebarNav from "./nav/SidebarNav";
import Footer from "./Footer";
import Laravel from "../../laravel";

// For demo - react route
import FormsBasicInputs from "./demo/FormsBasicInputs";
// For demo - hard link
import FormsLayouts from "./demo/FormsLayouts";

const AdminKit = () => {
    /**
     * SidebarNavItemCollection
     */
    const sidebarItems = [
        {
            contents: "Pages",
            isHeader: true,
        },
        {
            contents: "Документооборот",
            icon: "sliders",
            link: "/admin/create",
        },
        {
            contents: "Документы",
            icon: "sliders",
            link: "/admin",
        },
        {
            contents: "Подрядчики",
            icon: "user",
            link: "/admin/сontractor",
        },

        {
            contents: "Tools & Components",
            isHeader: true,
        },
        {
            contents: "UI Elements",
            icon: "briefcase",
            link: "ui-elements",
            itemBindId: "uielements",
            subItems: [
                { contents: "Alerts", link: "/admin/ui-alerts" },
                { contents: "Buttons", link: "/admin/ui-buttons" },
                { contents: "Cards", link: "/admin/ui-cards" },
                { contents: "General", link: "/admin/ui-general" },
                { contents: "Grid", link: "/admin/ui-grid" },
                { contents: "Modals", link: "/admin/ui-modals" },
                { contents: "Typography", link: "/admin/ui-typography" },
            ],
        },
    ];

    const laravelRenderer: Laravel = new Laravel();

    const renderContents = function () {
        return (
            <>
                <Routes />
                {laravelRenderer.render()}
            </>
        );
    };

    return (
        <div className="wrapper">
            <Router>
                <SidebarNav items={sidebarItems} />
                <div className="main">
                    {/*<MainNav contents={""} />*/}

                    <main className="content">{renderContents()}</main>

                    <Footer contents={""} />
                </div>
            </Router>
        </div>
    );
};

export default AdminKit;

if (document.getElementById("adminkit") !== null) {
    ReactDOM.render(<AdminKit />, document.getElementById("adminkit"));
}
