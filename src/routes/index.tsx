import { Routes, Route } from 'react-router-dom'

import Layout from './_Component/Layout'
import MovieList from './MovieList'
import Favorites from './Favorites'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<MovieList />} />
        <Route path='favorites' element={<Favorites />} />
      </Route>
    </Routes>
  )
}

export default App
