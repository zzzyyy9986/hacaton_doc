import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

export const Picker = () => {
    const [selected, setSelected] = useState([]);
    const options = [
        { label: "ООО тест1", value: "grapes" },
        { label: "ООО тест2 ", value: "mango" },
        { label: "ООО тест3", value: "strawberry" },
        { label: "ООО тест4", value: "grapes" },
        { label: "ООО тест5 ", value: "mango" },
        { label: "ООО тест6", value: "strawberry" },
    ];

    return (
        <div>
            <h1>Выберите ответственных</h1>
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
            />
        </div>
    );
};
