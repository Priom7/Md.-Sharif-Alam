import React from "react";
import Sky from "react-sky";
import img1 from "./images/firebase.png";
import img2 from "./images/js.png";
import img3 from "./images/js2.png";
import img4 from "./images/json.png";
import img5 from "./images/laravel.png";
import img6 from "./images/mongodb.png";
import img7 from "./images/mysql.png";
import img8 from "./images/node.png";
import img9 from "./images/php.png";
import img10 from "./images/react.png";
import img11 from "./images/schema.png";
import img12 from "./images/java.png";

const BackGround = props => {
  return (
    <div>
      <Sky
        images={{
          0: img1,
          1: img2,
          2: img3,
          3: img4,
          4: img5,
          5: img6,
          6: img7,
          7: img8,
          8: img9,
          9: img10,
          10: img11,
          11: img12
        }}
        how={
          50
        } /* Pass the number of images Sky will render choosing randomly */
        time={40} /* time of animation */
        size={"20px"} /* size of the rendered images */
        background={"#1D1E22"}
      />
    </div>
  );
};

export default BackGround;
