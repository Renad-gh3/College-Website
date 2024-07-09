import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  //  is greater than -50, subtract 25 from tx. This ensures that the slider does not move more than 50% to the left.
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    //CSS transform property to move the slider content
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  // This ensures that the slider does not move more than its original position.
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Renad Alghamdi</h3>
                  <span>KAU, Jeddah</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                repellat vitae modi corporis nam dicta, maxime, reiciendis
                dolores tempore voluptatem vel deleniti. Et quo perspiciatis
                provident, est aut sunt ipsa! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Hic explicabo obcaecati illum
                eligendi architecto libero sapiente cum
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Nhyan Abdullah</h3>
                  <span>KAU, Jeddah</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                repellat vitae modi corporis nam dicta, maxime, reiciendis
                dolores tempore voluptatem vel deleniti. Et quo perspiciatis
                provident, est aut sunt ipsa! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Hic explicabo obcaecati illum
                eligendi architecto libero sapiente cum
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Rama Ali </h3>
                  <span>KAU, Jeddah</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                repellat vitae modi corporis nam dicta, maxime, reiciendis
                dolores tempore voluptatem vel deleniti. Et quo perspiciatis
                provident, est aut sunt ipsa! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Hic explicabo obcaecati illum
                eligendi architecto libero sapiente cum
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Sara Adel</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                repellat vitae modi corporis nam dicta, maxime, reiciendis
                dolores tempore voluptatem vel deleniti. Et quo perspiciatis
                provident, est aut sunt ipsa! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Hic explicabo obcaecati illum
                eligendi architecto libero sapiente cum
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
