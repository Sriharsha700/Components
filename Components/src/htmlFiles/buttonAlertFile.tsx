import React, { useState } from "react";
import Button from "./ccomponents/buttons/Button";
import Alert from "./ccomponents/alert/Alert";

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>alert</Alert>
      )}
      <Button buttonColor="primary" onClick={() => setAlertVisibility(true)}>
        MyButton
      </Button>
    </>
  );
};

export default App;
