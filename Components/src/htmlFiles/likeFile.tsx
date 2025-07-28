import React, { useState } from "react";
import Like from "./ccomponents/like/Like";

const App = () => {
  return <Like onClick={() => console.log("LikeButtonClicked")} />;
};

export default App;
