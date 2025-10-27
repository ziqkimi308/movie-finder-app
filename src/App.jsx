
import { Outlet } from 'react-router'
import './App.css'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Index } from './components/Index'

function App() {

  return (
    <>
	  {/* <Header />
	  <Index />
	  <Card />
	  <Footer /> */}
	  <Outlet />
    </>
  )
}

export default App
