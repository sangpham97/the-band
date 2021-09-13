import { Route, Switch } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import About from './pages/About'
import Blog from './pages/Blog'
import Examples from './pages/Examples'
import Feature from './pages/Feature'
import Help from './pages/Help'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Footer from './components/Footer'
import FeatureAPK from './pages/FeatureAPK'
import FeatureDesign from './pages/FeatureDesign'
import Register from './pages/Register'
import Login from './pages/Login'
import { useSelector } from 'react-redux'
import SinglePost from './pages/SinglePost'
import CreatePost from './pages/CreatePost'
import { useEffect } from 'react'
import Profile from './pages/Profile'

function App() {
  const User = useSelector((state) => state.user.user)
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(User))
  }, [User])
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/examples'>
          <Examples />
        </Route>
        <Route exact path='/blog'>
          <Blog />
        </Route>
        <Route path='/blog/:id'>
          <SinglePost />
        </Route>
        <Route path='/help'>
          <Help />
        </Route>
        <Route path='/pricing'>
          <Pricing />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/profile'>{User ? <Profile /> : <Register />}</Route>
        <Route exact path='/feature'>
          <Feature />
        </Route>
        <Route path='/feature/design'>
          <FeatureDesign />
        </Route>
        <Route path='/feature/apk'>
          <FeatureAPK />
        </Route>
        <Route path='/createBlog'>{User ? <CreatePost /> : <Home />}</Route>
        <Route path='/try-it-free'>
          <Register />
        </Route>
        <Route path='/sign-in'>{User ? <Home /> : <Login />}</Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
