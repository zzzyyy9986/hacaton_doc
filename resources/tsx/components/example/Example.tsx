import React, { useState } from "react";
import ReactDOM from "react-dom";

import Text from "./elements/Text";

const Example = () => {
    const data = "Hello World";

    return <Text contents={data}></Text>;
};

export default Example;

if (document.getElementById("example") !== null) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
