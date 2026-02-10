import quote from "./assets/quote.png";
import care from "./assets/care.png";
import robotic from "./assets/robotic.png";

function CourseList(){

    const courses = [
        {
            name: "routine",
            price: "499",
            image : {care},
            rating: 5
        },
        {
            name: "quote",
            price: "999",
            image : {quote},
            rating: 4
        },
        {
            name: "robotic",
            price: "766",
            image : {robotic},
            rating: 2
        }
    ]
    
    const coursesList = courses.map()
    return(
        
    );

}

export default CourseList