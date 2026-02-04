import "./App.css"
import Course from "./Course";
import Footer from "./Footer";
import Navbar from "./Navbar";
import robotic from "./assets/robotic.png";
import quote from "./assets/quote.png";
import care from "./assets/care.png";
import navv from "./assets/navv.jpeg";


function App() {
  return (
    <>
    {/* <Navbar /> */}
    <Course name="Robo Automation in industry" price={400} image={robotic} rating={4}/>
    <Course name="skin care routine and every customer must know" price="500"image={care} rating={5}/>
    <Course name="quote of the day read and keep in mind" price="700" image={quote} rating={4}/>
    <Course name="navin walker" price="900" image={quote} rating={3}/>
    {/* <Footer /> */}
    </>
    
  );
}

export default App;
