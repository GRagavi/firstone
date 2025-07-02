import styles from './Course.module.css'
const coursename = "UG";
function Course(){

    return(
        <div className={styles.card}>
            <img src="https://via.placeholder.com/150" alt="Course Image" />
            <h3> {coursename} Course</h3>
            <p>This is a {coursename} course.</p>
        </div>
    )
}
export default Course;