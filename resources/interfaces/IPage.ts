import {ITask} from "./ITask";

export interface IPage {
    id: number,
    name: string,
    status: boolean,
    tasks:ITask[]
}