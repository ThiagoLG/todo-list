import { MouseEventHandler } from "react";
import { ITaskItem } from "./ITaskItem";

export interface ITaskComponent {
    taskInfos: ITaskItem;
    onDeleteTask: (taskId: string) => void;
    onFinishTask: (taskId: string) => void;
}