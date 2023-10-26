import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <main className='py-7 px-12 text-center'>
        <Outlet />
      </main>
    </>
  )
}

export default App
