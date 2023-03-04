import styles from './App.module.scss'
import { PlusCircle } from 'phosphor-react'
import { InvalidEvent, useState } from 'react'
import { Task } from './components/Task/TaskItem';
import { ITaskItem } from './models/ITaskItem';

function App() {
  const [newTask, setNewTask] = useState<string>('');
  const [tasksList, setTasksList] = useState<ITaskItem[]>([
    {
      id: '123',
      description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      createdAt: new Date()
    },
    {
      id: '1233',
      description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      createdAt: new Date(),
      finishedAt: new Date()
    },
    {
      id: '1234',
      description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      createdAt: new Date()
    }

  ]);


  function handleNewTaskInvalid(event: any) {
    (event.target as HTMLInputElement).setCustomValidity('Please, insert a description to your new task.');
  }

  function handleNewTaskChange(event: any) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleTaskSubmit(event: any) {
    event.preventDefault();

    setTasksList([
      ...tasksList,
      {
        id: `${Math.floor(Math.random() * 9999999)}`,
        createdAt: new Date(),
        description: newTask
      }]);

    setNewTask('');
  }

  function handleTaskDelete(taskId: string) {
    setTasksList(tasksList.filter(task => task.id !== taskId));
  }

  function handleTaskFinish(taskId?: string) {
    setTasksList(
      tasksList.map(task => {
        if (task.id === taskId)
          task.finishedAt = !!task.finishedAt ? undefined : new Date();

        return task;
      })
    );
  }

  return (
    <div className="App">

      <header>
        <div className={styles.logo}>
          <img src="Logo.svg" alt="site logo" />
        </div>
      </header>

      <main>

        <form onSubmit={handleTaskSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder='Add a new task'
              required
              onInvalid={handleNewTaskInvalid}
              onChange={handleNewTaskChange}
              value={newTask}
            />
            <button type='button'>
              Create
              <PlusCircle size={16} />
            </button>
          </div>
        </form>

        <section className={styles.taskContainer}>

          <div className={styles.taskHeader}>

            <div className={styles.infoLabel}>
              <span className={styles.label}>Created Tasks</span>
              <span className={styles.counter}>{tasksList.length}</span>
            </div>

            <div className={styles.infoLabel}>
              <span className={styles.label}>Finished Tasks</span>
              <span className={styles.counter}>
                {tasksList.filter(t => !!t.finishedAt).length} from {tasksList.length}
              </span>
            </div>

          </div>

          {!tasksList.length ?
            <>
              <hr />
              <div className={styles.emptyTasksContainer}>
                <img src="Clipboard.svg" alt="empty tasks list icon" />
                <p>You don't have created tasks yet.</p>
                <p>Create your tasks and organize your to do list.</p>
              </div>
            </>
            :
            tasksList.map((task) => {
              return (
                <Task
                  key={task.id}
                  taskInfos={task}
                  onDeleteTask={handleTaskDelete}
                  onFinishTask={handleTaskFinish}
                />)
            })
          }

        </section>

      </main>


    </div>
  )
}

export default App
