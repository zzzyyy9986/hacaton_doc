import React from "react";
import { IContractor } from "../../../../interfaces/IContractor";
import axios from "axios";

export const Contractor = ({
    changeParent,
    contractor,
    index,
}: {
    changeParent: Function;
    contractor: IContractor;
    index: number;
    key?: any;
}) => {
    const getTemplate = (contractor: IContractor) => {};

    const onChange = (e) => {
        contractor[e.target.name] = e.target.value;

        changeParent((prev) => {
            if (contractor.id) {
                return [
                    ...prev.map((el) => {
                        if (el.id == contractor.id) {
                            return { ...contractor };
                        }
                        return el;
                    }),
                ];
            } else {
                prev[index] = { ...contractor };
                return [...prev];
            }
        });
    };
    const onDelete = () => {};
    const onSave = async (e) => {
        e.preventDefault();
        const data = await axios.post("/firm/save", {
            contractor,
        });
    };
    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={(e) => onSave(e)}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Имя</label>
                        <input
                            onChange={(e) => {
                                onChange(e);
                            }}
                            name="name"
                            value={contractor.name}
                            required={true}
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Введите имя"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">
                            Email address
                        </label>
                        <input
                            onChange={(e) => {
                                onChange(e);
                            }}
                            name="email"
                            value={contractor.email}
                            required={true}
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="почта"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Инн</label>
                        <input
                            onChange={(e) => {
                                onChange(e);
                            }}
                            value={contractor.inn}
                            name="inn"
                            required={true}
                            type="number"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="инн"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">
                            Телефон
                        </label>
                        <input
                            onChange={(e) => {
                                onChange(e);
                            }}
                            value={contractor.phone}
                            name="phone"
                            required={true}
                            type="number"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="телефон"
                        />
                    </div>
                    {contractor.id && (
                        <button
                            onClick={(e) => onDelete()}
                            type="button"
                            className="btn btn-danger"
                        >
                            Удалить
                        </button>
                    )}
                    <button type="submit" className="btn btn-primary">
                        Сохранить
                    </button>
                </form>
            </div>
        </div>
    );
};
