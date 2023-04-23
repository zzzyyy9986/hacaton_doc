import React, { useState } from "react";

import { Switch, Route } from "react-router-dom";

// For demo - react route
import FormsBasicInputs from "../demo/FormsBasicInputs";
// For demo - hard link
import FormsLayouts from "../demo/FormsLayouts";
import App from "../../doc/App";
import { ContractorPage } from "../../doc/contractor/ContractorPage";

const Routes = () => {
    return (
        <>
            <Switch>
                <Route path="/admin/forms-layouts">
                    <FormsLayouts contents={""} />
                </Route>
                <Route path="/admin/create">
                    <App />
                </Route>
                <Route>
                    <ContractorPage />
                </Route>
            </Switch>
        </>
    );
};

export default Routes;
