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
        // {
        //     contents: string,
        //     icon: string,
        //     link: string,
        //     isReactLink: boolean,
        //     isHeader: boolean,
        // }

        {
            contents: "Pages",
            isHeader: true
        },
        {
            contents: "Dashboard",
            icon: "sliders",
            link: "/admin"
        },
        {
            contents: "Profile",
            icon: "user",
            link: "/admin/profile"
        },
        {
            contents: "Settings",
            icon: "settings",
            link: "/admin/settings"
        },
        {
            contents: "Invoice",
            icon: "credit-card",
            link: "/admin/invoice"
        },
        {
            contents: "Blank",
            icon: "book",
            link: "/admin/blank"
        },

        {
            contents: "Tools & Components",
            isHeader: true
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
                { contents: "Typography", link: "/admin/ui-typography" }
            ]
        },
        {
            contents: "Icons",
            icon: "coffee",
            link: "/admin/icons-feather"
        },
        {
            contents: "Forms",
            icon: "check-circle",
            link: "ui-forms",
            itemBindId: "uiforms",
            subItems: [
                {
                    contents: "Form Layouts",
                    link: "/admin/forms-layouts",
                    isReactLink: true
                },
                {
                    contents: "Basic Inputs",
                    link: "/admin/forms-basic-inputs",
                    isReactLink: false
                },
                {
                    contents: "Level 2 Test",
                    link: "level2",
                    isReactLink: true,
                    // Test 3, 4 levels
                    itemBindId: "level3",
                    subItems: [
                        {
                            contents: "Level 3 - 1",
                            link: "/admin/level3-1",
                            isReactLink: true
                        },
                        {
                            contents: "Level 3 - 2",
                            link: "/admin/level3-2",
                            isReactLink: true,
                            itemBindId: "level4",
                            subItems: [
                                {
                                    contents: "Level 4 - 1",
                                    link: "/admin/level4-1",
                                    isReactLink: true
                                },
                                {
                                    contents: "Level 4 - 2",
                                    link: "/admin/level4-2",
                                    isReactLink: true
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            contents: "Tables",
            icon: "list",
            link: "/admin/tables-bootstrap"
        },

        {
            contents: "Plugins & Addons",
            isHeader: true
        },
        {
            contents: "Charts",
            icon: "bar-chart-2",
            link: "/admin/charts-chartjs"
        },
        {
            contents: "Maps",
            icon: "map",
            link: "/admin/maps-google"
        }
    ];

    const laravelRenderer: Laravel = new Laravel();

    const renderContents = function() {
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
                    <MainNav contents={""} />

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
