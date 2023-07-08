// import React from "react";
// import "./free-course.css";

// import "remixicon/fonts/remixicon.css";
// const FreeCourseCard = (props) => {
//   const { imgUrl, title, hours, rating ,level} = props.item;

//   return (
//     <div className="single__free__course">
//       <div className="free__course__img mb-5">
//         <img src={imgUrl} alt="" className="w-100" />
//         <button className="free__btn">Enroll Now</button>
//       </div>

//       <div className="free__course__details">
//         <h6>{title}</h6>

//         <div className=" d-flex align-items-center gap-5">
//           <span className=" d-flex align-items-center gap-2">
//             <i class="ri-time-line"></i>
//             {hours} hours
//           </span>

//           <span className=" d-flex align-items-center gap-2">
//             <i class="ri-road-map-line"></i> {level}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FreeCourseCard;

import React, { useState } from "react";
import "./free-course.css";

import "remixicon/fonts/remixicon.css";

const FreeCourseCard = (props) => {
  const { imgUrl, title, hours, rating, level } = props.item;
  const [enrolled, setEnrolled] = useState(false);

  const handleEnrollClick = () => {
    setEnrolled(true);
  };

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        <button className="free__btn" onClick={handleEnrollClick}>
          Enroll Now
        </button>
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div className="d-flex align-items-center gap-5">
          <span className="d-flex align-items-center gap-2">
            <i className="ri-time-line"></i>
            {hours} hours
          </span>

          <span className="d-flex align-items-center gap-2">
            <i className="ri-road-map-line"></i> {level}
          </span>
        </div>
      </div>

      {enrolled && (
        <div className="popup">
          <p><i>You are successfully enrolled!!</i></p>
        </div>
      )}
    </div>
  );
};

export default FreeCourseCard;


