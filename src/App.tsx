import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")}>primary</Button>
    </div>
  );
}

export default App;
