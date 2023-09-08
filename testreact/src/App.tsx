import GuardRouter from './router/GuardRouter.tsx'
import styles from '@/assets/styles/global.module.scss'
import Head from './views/layout/Headers.tsx'
import {useLocation, useRoutes} from 'react-router-dom'
import {singlePages} from './router/index.tsx'

function App() {
  const targetLocation = useLocation()
  const singlePage = useRoutes(singlePages)
  if(singlePages.find(el => el.path === targetLocation.pathname)) return (<div className={styles.App}>{singlePage}</div>)
  return (
      <div className={styles.App}>
        <header className='header'>
          <Head></Head>
        </header>
        <main className='main'>
            <GuardRouter path={targetLocation.pathname}></GuardRouter>
        </main>
        <footer className='footer'></footer>
      </div>
  )
}

export default App
