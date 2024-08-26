import Alert from "./components/Alert";
//import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Button from "./components/button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

/* <ListGroup />
      <Alert>
        Hello <span> World</span>
      </Alert>
       */

export default App;
