import './App.css'
import Navbar from './navbar.jsx'
import Course from './Course/Course.jsx'
import Footer from './Footer/Footer.jsx'
import yogaImage from './assets/yoga.jpg'
import singImage from './assets/sing.jpg'
import danceImage from './assets/dance.jpg'

function App() {

  return (
    <>
    <Navbar/>
    <Course coursename="Yoga" price="100" image={yogaImage}/>
    <Course coursename="Singing" image={singImage} />
    <Course coursename="Dancing" image={danceImage}/>
    <Footer/>
    </>
  )
}

export default App
