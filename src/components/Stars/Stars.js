import React, { useEffect, useState } from "react";
import Star from "./Star";

function Stars({ activeStars = 0, isSmall, setRating = null }) {
  const [numOfStars] = useState(5);
  const [numOfActiveStars, setNumOfActiveStars] = useState(activeStars);
  const [numOfHoverStars, setNumOfHoverStars] = useState(0);

  const starArr = [];
  for (let i = 0; i < numOfStars; i++) {
    starArr.push(i);
  }

  useEffect(() => {
    if (setRating) {
      setRating(numOfActiveStars);
    }
  }, [numOfActiveStars]);

  return (
    <div>
      {starArr.map(s => (
        <Star
          key={s}
          starNumber={s + 1}
          setNumOfActiveStars={setNumOfActiveStars}
          setNumOfHoverStars={setNumOfHoverStars}
          isActive={numOfActiveStars >= s + 1}
          isHovered={numOfHoverStars >= s + 1}
          isSmall={isSmall}
        />
      ))}
    </div>
  );
}

export default Stars;
