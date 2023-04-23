import React, { useState } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Contractor } from "./Contractor";
import { IContractor } from "../../../../interfaces/IContractor";

export const ContractorPage = () => {
    const [listOfContractors, setListOfContractors]: [IContractor[], Function] =
        useState([]);

    const AddContractor = () => {
        listOfContractors.push({
            name: "",
            inn: 0,
            email: "",
            phone: 0,
        });
        setListOfContractors([...listOfContractors]);
    };
    const deleteEmptyCard = () => {
        setListOfContractors((prev) => prev.slice(0, prev.length - 1));
    };

    return (
        <div>
            <div className="container-fluid">
                <h2>Карточки</h2>
                <button
                    className="btn btn-success"
                    onClick={(е) => {
                        AddContractor();
                    }}
                >
                    {" "}
                    Добавить
                </button>
                <button
                    className="btn btn-danger"
                    onClick={(e) => {
                        deleteEmptyCard();
                    }}
                >
                    Удалить
                </button>
                <div className="row">
                    {listOfContractors.map((contractor, index) => {
                        return (
                            <div className="col-md-4">
                                <Contractor
                                    key={index}
                                    index={index}
                                    contractor={contractor}
                                    changeParent={setListOfContractors}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
