import styles from './Course.module.css'
import yogaImage from '../assets/yoga.jpg'
//const coursename = "UG";
function Course({
    coursename = "Basic Course",
    price = "$100",
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
            <h3> {coursename}</h3>
            <p>This is a {coursename} course and fee is {price}</p>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <button><i class="fas fa-star"></i> Star</button>
        </div>
    )
}
export default Course;