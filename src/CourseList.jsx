import quote from "./assets/quote.png";
import care from "./assets/care.png";
import robotic from "./assets/robotic.png";
import Course from "./Course";

function CourseList(){

    const courses = [
        {
            id: 1,
            name: "routine",
            price: "499",
            image: care,
            rating: 5
        },
        {
            id:2,
            name: "quote",
            price: "999",
            image: quote,
            rating: 4
        },
        {
            id:3,
            name: "robotic",
            price: "766",
            image: robotic,
            rating: 2
        },
        {
            id:4,
            name: "tech",
            price: "333",
            image: robotic,
            rating: 2
        }
    ]
    
    const coursesList = courses.map((course,index) => (
        <Course 
            key={index}
            name={course.name} 
            image={course.image} 
            price={course.price}
            rating={course.rating} 
        />
    ));
    return(
        <>
            {coursesList}
        </>
    );
}

export default CourseList;
