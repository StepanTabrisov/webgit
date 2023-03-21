import Heading from "Components/Heading"
import YouTube from "react-youtube";
import Nav from "Components/Navigation";

const Content = () => {
    return <>
    <Nav/>
    <Heading tags={'h1'} text = {'Youtube video'}/>
    <div>
        <YouTube videoId="GEfR69hL9y0"/>
    </div>
    </>
  }
  
  export default Content;