export interface ITaskItem {
    id: string;
    description: string;
    createdAt: Date;
    finishedAt?: Date;
}