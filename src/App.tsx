import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Layout from './components/layout/Layout'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
