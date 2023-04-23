import React, { useEffect } from "react";
import { IPoint } from "../../../../interfaces/IPoint";

interface IListOfPoints {
    points: IPoint[];
    key?: any;
}
export const ListOfPoints = ({ points }: IListOfPoints) => {
    return (
        <ol>
            {points.map((point, i) => {
                return (
                    <li key={point.id}>
                        {i + 1 + "" + ". "}
                        {point.description}
                    </li>
                );
            })}
        </ol>
    );
};
