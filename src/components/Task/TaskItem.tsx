import styles from './TaskItem.module.scss'
import { ITaskComponent } from '../../models/ITaskComponent'
import { Trash } from 'phosphor-react'

export function Task({ taskInfos, onDeleteTask, onFinishTask }: ITaskComponent) {

    function handleDeleteTask() {
        onDeleteTask(taskInfos.id);
    }

    function handleFinishTask() {
        onFinishTask(taskInfos.id);
    }


    return (
        <div className={styles.taskItem}>
            <input
                type="checkbox"
                checked={!!taskInfos.finishedAt}
                onChange={handleFinishTask} />

            <div className={styles.taskDescription}>
                {taskInfos.description}
            </div>

            <Trash
                className={styles.trash}
                size={24}
                color="#808080"
                onClick={handleDeleteTask} />
        </div>
    )
}