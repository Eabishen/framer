import img from "../images/leonsu.jpg";
import "./page1.css";
import v from "../videos/v.mp4";

const Page1 = () => {
  return (
    <div className="page1">
      <video autoPlay loop muted className="video-container">
        <source src={v} type="video/mp4" />
      </video>
      <div className="container">
        <div className="sec">
          <img src={img} alt="img" />
          <p>Happy Birthday to my Walking FM!</p>
        </div>
      </div>
    </div>
  );
};

export default Page1;
