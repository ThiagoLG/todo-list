import styles from './TaskItem.module.scss'
import { ITaskComponent } from '../../models/ITaskComponent'
import { Trash } from 'phosphor-react'

export function Task({ taskInfos }: ITaskComponent) {

    return (
        <div className={styles.taskItem}>
            <input type="checkbox" />
            <div>{taskInfos.description}</div>
            <Trash size={24} color="#808080" />
        </div>
    )
}