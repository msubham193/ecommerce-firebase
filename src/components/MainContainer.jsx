import React, { useState } from "react";
import HomeContainer from "./HomeContainer";

const MainContainer = () => {
  const [scrollValue, setScrollValue] = useState(0);
  return (
    <div>
      <HomeContainer />
    </div>
  );
};

export default MainContainer;
