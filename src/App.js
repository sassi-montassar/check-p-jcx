
import './App.css';
import imagesrc from "./images/imageInSrc.jpg"

function App() {
  return (
    <div className="App">
 <>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">sassi montassar</h1>
   
    <img src={imagesrc} alt="town2"/>
   
    <img src="/imageInPublic.jpg" alt="town1" />
  </div>
  <video width={320} height={240} controls autoPlay>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>
    </div>
  );
}

export default App;
