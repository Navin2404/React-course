const course1 = "HTML"

function Course(){

    // internal css
    const styles = {
        backgroundColor : "green",
    }
    
    return (
        <div style = {styles}>
            <img src="" alt = "" />
            <h3>{course1}</h3>
            <p>This is code practice</p>
        </div>
    )
}

export default Course