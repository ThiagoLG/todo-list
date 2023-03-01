import styles from './App.module.scss'
import { PlusCircle } from 'phosphor-react'

function App() {
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
      </main>


    </div>
  )
}

export default App
