import './App.css'
import Navbar from './navbar.jsx'
import Footer from './Footer/Footer.jsx'
import CourseList from './Course/CourseList.jsx'

function App() {

  return (
    <>
   <Navbar/> {/* 
     <Course coursename="Yoga" price="$100" image={yogaImage}/>
    <Course coursename="Singing" image={singImage} />
    <Course coursename="Dance" image={danceImage}/>  */}
    <CourseList/>
    <Footer/>
    </>
  )
}

export default App
