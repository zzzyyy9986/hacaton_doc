import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Contractor } from "./Contractor";
import { IContractor } from "../../../../interfaces/IContractor";
import axios from "axios";

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

    const getAll = async () => {
        const data = await axios.get("/firm/all");
        // console.log(data.data);
        setListOfContractors(data.data);
    };
    useEffect(() => {
        console.log(getAll());
        // setListOfContractors(data);
    }, []);

    return (
        <div>
            <div className="container-fluid">
                <div className="mb-2">
                    <h2>Карточки</h2>
                    <button
                        className="btn btn-success mr-2"
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
                </div>
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
