import React from "react";
import Button from "../ccomponents/buttons/Button";

const App = () => {
  return (
    <>
      <Button
        buttonColor="primary"
        onClick={() => console.log("buttonClicked")}
      >
        MyButton
      </Button>
    </>
  );
};

export default App;
