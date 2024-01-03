import { UseInput } from "./components/UseInput.js";

function App() {
  const [inputValue, handleChange, handleSubmit] = UseInput("안녕");

  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />

      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default App;
