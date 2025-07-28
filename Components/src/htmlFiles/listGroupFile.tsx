import React from "react";
import ListGroup from "../ccomponents/listGroup/ListGroup";
const App = () => {
  let items = [
    "NewYork",
    "SanFrancisco",
    "Tokyo",
    "London",
    "Chennai",
    "Bangalore",
  ];
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item: string) => console.log("item selected" + item)}
      />
    </div>
  );
};

export default App;
