import "./page2.css";
import img from "../images/pe.jpg";

const Page2 = () => {
  return (
    <div className="page2">
      <div className="heading">
        <h3>To the Women I love the Most </h3>
      </div>
      <div className="second-container">
        <div className="img-container">
          <img className="sec-img" src={img} alt="img" />
        </div>
        <div className="word-container">
          <p>
            I can say without even thinking for a second that you're the prime
            reason of me being sane. I literally have no words to express my
            love and gratitude for everything you have done to me to keep me
            happy. In Spite of your tight schedule, you always made sure that i
            m doing well. I admire you and your hard work. Your unique way of
            caring made me fall for you hard. In this Journey of my life i have
            met many people but its YOU who understood me and read me like a
            book. With you I feel peace. Being with you is where I can be
            myself. I can guarantee you that you’re the one person I listen and
            do something you say blindly because I know that you always care for
            my welfare and you always gave me suggestions not compulsion. There
            are many things I can say but we have a lifetime together. I'm so
            Glad that I got you on this Journey and I wish we'll fill our
            journey with Sweet memories and Love.
            <p className="space">sasdsad</p>
            <span className="love">I LOVE YOU FOREVER AND EVER LEO PAPA</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Page2;
