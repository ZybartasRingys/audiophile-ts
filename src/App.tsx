import { Routes, Route } from 'react-router-dom'

// Layout imports
import Layout from './components/layout/Layout'
import Home from './components/pages/home/Home'
import Headphones from './components/pages/headphones/Headphones'
import SpeakersHome from './components/pages/speakers/SpeakersHome'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/headphones' element={<Headphones />} />
          <Route path='/speakers' element={<SpeakersHome />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
