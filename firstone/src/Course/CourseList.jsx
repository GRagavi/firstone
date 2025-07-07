import yogaImage from '../assets/yoga.jpg';
import singImage from '../assets/sing.jpg';
import danceImage from '../assets/dance.jpg';
import Course from './Course';


function CourseList(){
    const courses = [
    {    
        image: yogaImage,
        coursename: "Yoga",
        price: "$100",
    },
    {
        image: singImage,
        coursename: "Singing",
        price: "$150",
    },
    {
        image: danceImage,
        coursename: "Dance",
        price: "$200",
    }, 
    ]  ; 

    const coursesList = courses.map((course) => (

        <Course image={course.image}
                coursename={course.coursename}
                price={course.price} />
    
    ));
    return (
        <>
        {coursesList}
        </>
    );
}

export default CourseList;