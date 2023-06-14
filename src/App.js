import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Survey from './pages/Survey'
import First from './pages/First'
import Second from './pages/Second'
import Third from './pages/Third'
import Four from './pages/Four'
import Five from './pages/Five'
import Emoji from './pages/Emoji'
import Star from './pages/Star'
import Yes from './pages/Yes'
import Rating from './pages/Rating'
function App() {
  return (
    <div className='flex flex-col'>
      <BrowserRouter>
        <Navbar />
        <div className='flex '>
          <Sidebar />
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='mysurveys'>
                <Route path='createSurvey' element={<First />} />
              </Route>
              <Route path='next1' element={<Second />} />
              <Route path='next2' element={<Third />} />
              <Route path='next3' element={<Four />} />
              <Route path='next4' element={<Five />} />
              <Route path='emoji' element={<Emoji />} />
              <Route path='star' element={<Star />} />
              <Route path='yesNo' element={<Yes />} />
              <Route path='rating' element={<Rating />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
