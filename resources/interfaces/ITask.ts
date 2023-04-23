import { IPoint } from "./IPoint";

export interface ITask {
    id: number;
    name: string;
    status: boolean;

    points?: IPoint[];
}
