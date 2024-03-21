import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Warning Times Up!
        </Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        primary
      </Button>
    </div>
  );
}

export default App;
