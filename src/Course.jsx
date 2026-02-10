import quote from "./assets/quote.png";


    function Course(props){
        return (
            <div className="card">
                <img src={props.image} alt = "" />
                <h5>{props.name}</h5>
                <p>{props.price}</p>
                <h5>{props.rating}</h5>
            </div>
        );
    }
    
export default Course