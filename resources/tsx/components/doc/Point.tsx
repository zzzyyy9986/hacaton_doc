import React, { useEffect, useState } from "react";
import { ITask } from "../../../interfaces/ITask";
import axios from "axios";
import { ListOfPoints } from "./tab/ListOfPoints";
import { Picker } from "./Picker";

export interface IPoint {
    key?: any;
    task: ITask;
}
export const Point = ({ task }: IPoint) => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [points, setPoints] = useState([...(task.points ?? [])]);

    const [optionsForSel, setOptionsForSel] = useState();

    useEffect(() => {}, []);

    const updatePoints = async () => {
        let data: { data: IPoint[] } = await axios.get(
            "/points/getById/" + task.id
        );
        await setPoints([...data.data]);
    };

    useEffect(() => {
        if (task.id) {
            updatePoints();
        }
    }, []);
    const onChangeHandler = (e, setData) => {
        setData(e.target.value);
    };
    const onTitleChange = (e) => {
        onChangeHandler(e, setTitle);
    };

    const onDescriptionChange = (e) => {
        onChangeHandler(e, setDescription);
    };

    const addPoint = async (e) => {
        e.preventDefault();
        let data = {
            sub_category_id: task.id,
            description: description,
            title: title,
        };

        const res: any = await axios.post("/point/save", data);
        if (res.status) {
            points.push({ ...data, ...{ id: res.id } });
            setPoints([...points]);
        }
    };

    return (
        <form onSubmit={(event) => addPoint(event)}>
            <ListOfPoints points={points} />
            <div className="form-group">
                <h1>Введите название контрольной точки</h1>
                <input
                    type="text"
                    onChange={(e) => {
                        onTitleChange(e);
                    }}
                    className="form-control"
                />
            </div>
            <Picker />
            <div className="form-group">
                <h1>
                    Введите описание для контрольной точки. Какие-то доп
                    материалы, ссылки на документы
                </h1>
                <textarea
                    onChange={(e) => {
                        onDescriptionChange(e);
                    }}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
                Сохранить
            </button>
        </form>
    );
};
