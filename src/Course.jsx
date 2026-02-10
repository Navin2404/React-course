import quote from "./assets/quote.png";
import PropTypes from "prop-types";


    function Course(props){

        if (props.show == true){
                return (
                    <div className="card">
                        <img src={props.image} alt = "" />
                        <h5>{props.name}</h5>
                        <p>{props.price}</p>
                        <h5>{props.rating}</h5>
                    </div>
                );
            }
        else{
            return(
                <div className="card">Course not available</div>
            )
        }
    Course.PropTypes = {
        name: PropTypes.string,
        rating: PropTypes.number,
        show: PropTypes.boolean  
    }

}



export default Course