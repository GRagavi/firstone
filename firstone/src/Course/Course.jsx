import styles from './Course.module.css'
import yogaImage from '../assets/yoga.jpg'
//const coursename = "UG";
function Course({
    coursename = "Basic Course",
    price = "100",
    image = yogaImage,
}){
    // const styles={
    //     padding: "20px",
    //     borderRadius: "10px",
    //     textAlign: "center",
    //     backgroundColor: "lightblue",
    //     maxwidth: "10px",
    // }
    return(
        // <div style={styles}>
        <div className={styles.card}>
            <img src={image} />
            <h3> {coursename} Course</h3>
            <p>This is a {coursename} course and cost is {price}</p>
        </div>
    )
}
export default Course;