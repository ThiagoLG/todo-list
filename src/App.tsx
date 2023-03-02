import styles from './App.module.scss'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import { Task } from './components/Task/TaskItem';
import { ITaskItem } from './models/ITaskItem';

function App() {

  const [tasksList, setTasksList] = useState<ITaskItem[]>([
    {
      id: '123',
      description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      createdAt: new Date()
    },
    {
      id: '123',
      description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      createdAt: new Date()
    },
    {
      id: '123',
      description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      createdAt: new Date()
    }

  ]);

  return (
    <div className="App">

      <header>
        <div className={styles.logo}>
          <img src="Logo.svg" alt="site logo" />
        </div>
      </header>

      <main>

        <form>
          <div className={styles.formGroup}>
            <input type="text" placeholder='Add a new task' />
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
              <span className={styles.counter}>0</span>
            </div>

            <div className={styles.infoLabel}>
              <span className={styles.label}>Finished Tasks</span>
              <span className={styles.counter}>0</span>
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
              return (<Task taskInfos={task} />)
            })
          }

        </section>

      </main>


    </div>
  )
}

export default App
