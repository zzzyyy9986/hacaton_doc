import React from "react";

/**
 * Enables rendering of react components defined from Laravel views.
 *
 * The view should define a JS function renderLaravel() that returns an array with two elements:
 *    1. The component name e.g. 'FormsBasicInputs'
 *    2. An object representing the component parameters
 *
 * To render that compoment, it must first be registered in this file. Define it in the componentRegistry object below.
 *
 * Refer to views/admin/basicInputsHardRoute.blade.php for demo
 */

const componentRegistry = {
    FormsBasicInputs: require("./components/adminkit/demo/FormsBasicInputs")
        .default
};

class Laravel {
    render() {
        if (typeof window["renderLaravel"] !== "function") {
            return;
        }
        let [component, params] = window["renderLaravel"]();
        if (!component) {
            return;
        }
        if (typeof componentRegistry[component] === "undefined") {
            console.log(
                "Component " +
                    component +
                    " is not in the registry. Check laravel.tsx"
            );
        }

        const ComponentToRender =
            typeof componentRegistry[component] === "function"
                ? componentRegistry[component]
                : null;
        if (ComponentToRender) {
            return <ComponentToRender />;
        }
        return <></>;
    }
}

export default Laravel;
