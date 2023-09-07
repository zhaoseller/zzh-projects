import { useRoutes } from 'react-router-dom'
import router from './router/index'
import styles from '@/assets/styles/global.module.scss'
import Head from './views/layout/Headers.tsx'

function App() {
  const routes = useRoutes(router)
  return (
      <div className={styles.App}>
        <header className='header'>
          <Head></Head>
        </header>
        <main className='main'>
          {routes}
        </main>
        <footer className='footer'></footer>
      </div>
  )
}

export default App
